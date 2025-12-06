import { createTransport } from "nodemailer";

export const mail = async (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> => {
  const user = process.env.NODEMAILER_USER;
  const pass = process.env.NODEMAILER_PASS;

  if (!user || !pass) {
    console.error(
      "Nodemailer environment variables NODEMAILER_USER or NODEMAILER_PASS are not set.",
    );
    return {
      status: 500,
      message: "Internal server error: Email service not configured.",
    };
  }

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER,
    subject: "Portfolio: [" + subject + " ]",
    text: `${name}: <${email}>\n${message}`,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending email:", error);
        resolve({ status: 500, message: "Failed to send mail" });
      } else {
        resolve({ status: 200, message: "Mail send successfully" });
      }
    });
  });
};
