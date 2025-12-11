import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validations/contact";

function createTransporter() {
  if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    return nodemailer.createTransporter({
      host: `email.${process.env.AWS_SES_REGION || "eu-west-1"}.amazonaws.com`,
      port: 465,
      secure: true,
      auth: {
        user: process.env.AWS_ACCESS_KEY_ID,
        pass: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  throw new Error("Email service not configured. Please set AWS SES credentials.");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const { name, phone, email, message } = validation.data;

    const transporter = createTransporter();

    const emailContent = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; direction: rtl;">
        <h2 style="color: #B85C38;">פנייה חדשה מאתר Or-Ya Health</h2>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>שם:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>טלפון:</strong> <a href="tel:${phone}">${phone}</a></p>
          ${email ? `<p style="margin: 10px 0;"><strong>אימייל:</strong> <a href="mailto:${email}">${email}</a></p>` : ""}
          ${message ? `<p style="margin: 10px 0;"><strong>הודעה:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
        </div>

        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          פנייה זו התקבלה מטופס יצירת הקשר באתר healthiscreation.com
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      replyTo: email || undefined,
      subject: `פנייה חדשה מ-${name}`,
      html: emailContent,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to send message", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
