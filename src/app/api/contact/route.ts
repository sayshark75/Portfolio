import getCurrentDateInTimeZone from "@/utils/getCurrentDatetime";
import { googleSheetsUtil } from "@/utils/googleSheetsUtil";
import { verifyRecaptcha } from "@/utils/recaptchaUtils";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  // use nodemailer to send a mail using name email and message

  const { name, email, message, token } = await req.json();

  try {
    const recaptchaResponse = await verifyRecaptcha(token);

    if (!recaptchaResponse.success || recaptchaResponse.score < 0.5) {
      return new Response(
        JSON.stringify({
          message: "Failed reCAPTCHA verification",
          error: true,
          score: recaptchaResponse.score,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return new Response(
      JSON.stringify({
        message: "reCAPTCHA verification failed",
        error: true,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"${process.env.USER}" <${process.env.APP_EMAIL}>`,
      to: `${process.env.APP_EMAIL}`,
      subject: `Message From: ${name}`,
      text: `From:\nUser - ${name}, \nEmail - ${email},\n\nMessage - ${message}\n\n${getCurrentDateInTimeZone("Asia/Kolkata")}`,
      html: "",
    });
    await googleSheetsUtil("A1:C1", [[name, email, message]]);
    return NextResponse.json({ message: "mail sent successfully", status: true, data: info });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ message: "mail not sent", status: false, data: null });
  }
}
