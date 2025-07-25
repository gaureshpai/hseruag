import type { NextApiResponse, NextApiRequest } from "next"
import { LRUCache } from "lru-cache"
import { nanoid } from "nanoid"

const RATE_LIMITER_USER_ID_COOKIE_NAME = "userUuid" as const
const RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME = "userUuid_expires" as const

export type rateLimiterApiOptions = {
  uniqueTokenPerInterval?: number
  interval?: number
  getUserId: (req: NextApiRequest, res: NextApiResponse) => string
}

/**
 * Creates a rate limiter API.
 *
 * @param {Object} [options={}] - Configuration options.
 * @param {number} [options.interval=60000] - Duration for the rate limiting window in milliseconds. Default is 60000 ms.
 * @param {number} [options.uniqueTokenPerInterval=50] - Maximum number of unique tokens allowed per interval. Default is 50.
 * @param {Function} [options.getUserId] - Function to extract the user ID from the request.
 * @returns {Object} An object with a `check` method to enforce rate limiting.
 */
export function rateLimiterApi(options?: rateLimiterApiOptions) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 50,
    ttl: options?.interval || 60000,
  })

  return {
    /**
     * Checks the rate limit for a request.
     *
     * @param {NextApiResponse} res - Nextjs response object.
     * @param {NextApiRequest} req - Nextjs request object.
     * @param {number} limitPerHour - Allowed number of requests (Per hour).
     * @returns {Promise<{status: number, message: string}>} A promise that could `resolve` or `reject` to an object with status and message.
     */
    check: (
      res: NextApiResponse,
      req: NextApiRequest,
      limitPerHour: number,
    ): Promise<{ status: number; message: string }> =>
      new Promise<{ status: number; message: string }>((resolve) => {
        try {
          const userId = options?.getUserId(req, res)
          if (!userId) {
            resolve({ status: 400, message: "Token missing" })
            return
          }
          const token = `user:${userId}`

          const tokenCount = (tokenCache.get(token) as number[]) || [0]
          if (tokenCount[0] === 0) {
            tokenCache.set(token, tokenCount)
          }
          tokenCount[0] += 1

          const currentUsage = tokenCount[0]
          const isRateLimited = currentUsage >= limitPerHour
          res.setHeader("X-RateLimit-Limit", limitPerHour)
          res.setHeader("X-RateLimit-Remaining", isRateLimited ? 0 : limitPerHour - currentUsage)

          if (isRateLimited) {
            resolve({ status: 429, message: "Rate limit exceeded" })
          } else {
            resolve({ status: 200, message: "Success" })
          }
        } catch (error) {
          console.error("Rate Limiter Error:", error)
          resolve({ status: 500, message: "Internal server error" })
        }
      }),
  }
}

export const getUserId = (req: NextApiRequest, res: NextApiResponse) => {
  const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || ""
  const userAgent = req.headers["user-agent"] || ""

  if (userIp && userAgent) {
    return `${userIp}-${userAgent}`
  }

  if (req.cookies[RATE_LIMITER_USER_ID_COOKIE_NAME] && req.cookies[RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME]) {
    const expiryDate = new Date(req.cookies[RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME])
    if (expiryDate <= new Date()) {
      setTokenExpiryCookie(res)
      return setUserTokenCookie(res)
    }
    return req.cookies[RATE_LIMITER_USER_ID_COOKIE_NAME]
  }

  setTokenExpiryCookie(res)
  return setUserTokenCookie(res)
}

const setUserTokenCookie = (res: NextApiResponse) => {
  const userUuidToken = nanoid(20)
  res.setHeader(
    "Set-Cookie",
    `${RATE_LIMITER_USER_ID_COOKIE_NAME}=${userUuidToken}; Max-Age=${60 * 60 * 24}; SameSite=Strict`,
  )
  return userUuidToken
}

const setTokenExpiryCookie = (res: NextApiResponse) => {
  const newExpirationDate = new Date()
  newExpirationDate.setSeconds(newExpirationDate.getSeconds() + 60 * 60 * 24)
  res.setHeader(
    "Set-Cookie",
    `${RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME}=${newExpirationDate.toUTCString()}; Max-Age=${
      60 * 60 * 24
    }; SameSite=Strict`,
  )
}