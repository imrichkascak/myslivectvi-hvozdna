"use server";

import { Resend } from "resend";
import { buildContactEmail, parseContactForm } from "@/lib/contact";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = parseContactForm(formData);

  if (!parsed.ok) {
    return {
      status: "error",
      message: "Zkontrolujte vyznačená pole.",
      fieldErrors: parsed.errors,
    };
  }

  if (parsed.isSpam) {
    return {
      status: "success",
      message: "Děkujeme. Zpráva je na cestě k výboru.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "MS Vrchovina Hvozdná <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("CONTACT_EMAIL or RESEND_API_KEY is missing");
    return {
      status: "error",
      message:
        "Zprávu teď nelze odeslat e-mailem. Napište nám prosím na Facebooku, nebo to zkuste znovu později.",
    };
  }

  const { subject, text } = buildContactEmail(parsed.data);
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: parsed.data.email,
    subject,
    text,
  });

  if (error) {
    console.error("Contact email failed:", error);
    return {
      status: "error",
      message: "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu za chvíli.",
    };
  }

  return {
    status: "success",
    message: "Děkujeme. Zpráva je na cestě k výboru.",
  };
}
