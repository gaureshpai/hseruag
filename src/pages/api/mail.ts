import type { NextApiRequest, NextApiResponse } from "next"
import { ValidationError } from "yup"
import { mailValidationSchema } from "@/components/contact-form/contact-form"
import { rateLimiterApi, getUserId } from "@/utility/rate-limiter"
import { mail } from "@/utility/mail"

const REQUEST_PER_HOUR = 5 as const
const RATELIMIT_DURATION = 3600000 as const
const MAX_USER_PER_SECOND = 100 as const

const limiter = rateLimiterApi({
  interval: RATELIMIT_DURATION,
  uniqueTokenPerInterval: MAX_USER_PER_SECOND,
  getUserId,
})

export type MailRequestBody = {
  name: string
  email: string
  subject: string
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<{ status: number; message: string | string[] }>) => {
  try {
    const { method } = req
    if (method !== "POST") {
      res.status(405).json({
        status: 405,
        message: `Method not allowed`,
      })
      return
    }
    const body: MailRequestBody = req.body

    const rateLimitResult = await limiter.check(res, req, REQUEST_PER_HOUR)
    if (rateLimitResult.status !== 200) {
      res.status(rateLimitResult.status).json(rateLimitResult)
      return
    }

    try {
      await mailValidationSchema.validate(body, { abortEarly: false })
    } catch (validationError) {
      if (validationError instanceof ValidationError) {
        res.status(422).json({
          status: 422,
          message: validationError.errors,
        })
      } else {
        res.status(500).json({
          status: 500,
          message: "Internal server error during validation",
        })
      }
      return
    }

    const { name, email, subject, message } = body

    const response = await mail(name, email, subject, message)
    res.status(response.status).send(response)
  } catch (error: any) {
    console.error("API Handler Error:", error)
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || "Internal server error",
    })
  }
}

export default handler