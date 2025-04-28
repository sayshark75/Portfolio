import { googleSheetsUtil } from "@/utils/googleSheetsUtil";
import { verifyRecaptcha } from "@/utils/recaptchaUtils";
import { NextRequest, NextResponse } from "next/server";

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
    await googleSheetsUtil("A1:D1", [[name, email, message, new Date().toLocaleString()]]);
    return NextResponse.json({ message: "mail sent successfully", status: true });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ message: "mail not sent", status: false, data: null });
  }
}
