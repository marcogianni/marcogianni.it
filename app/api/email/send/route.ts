import TemplateOwner from "@/components/email/templates/template-owner";
import TemplateUser from "@/components/email/templates/template-user";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const { data: ownerData, error: errorData } = await resend.emails.send({
      from: "info@marcogianni.it",
      to: ["info@marcogianni.it"],
      subject: body.subject,
      react: TemplateOwner(body) as React.ReactElement,
    });

    const { data, error } = await resend.emails.send({
      from: "info@marcogianni.it",
      to: [body.email],
      subject: body.subject,
      react: TemplateUser(body) as React.ReactElement,
    });

    if (error || errorData) {
      return NextResponse.json({ error });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
