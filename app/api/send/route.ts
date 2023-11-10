import Template from "@/components/email/Template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: "info@marcogianni.it",
      to: ["info@marcogianni.it"],
      subject: "Hello world",
      react: Template({ firstName: "John" }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
