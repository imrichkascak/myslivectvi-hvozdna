export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HONEYPOT_NAME = "company";

export function parseContactForm(formData: FormData):
  | { ok: true; data: ContactFields; isSpam: boolean }
  | { ok: false; errors: ContactFieldErrors } {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get(HONEYPOT_NAME) ?? "").trim();

  const errors: ContactFieldErrors = {};

  if (name.length < 2) {
    errors.name = "Napište jméno a příjmení.";
  } else if (name.length > 100) {
    errors.name = "Jméno je příliš dlouhé.";
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    errors.email = "Zadejte platnou e-mailovou adresu.";
  }

  if (message.length < 10) {
    errors.message = "Zpráva musí mít alespoň 10 znaků.";
  } else if (message.length > 4000) {
    errors.message = "Zpráva je příliš dlouhá.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { name, email, message },
    isSpam: honeypot.length > 0,
  };
}

export function buildContactEmail(data: ContactFields) {
  return {
    subject: `Zpráva z webu: ${data.name}`,
    text: [
      `Jméno: ${data.name}`,
      `E-mail: ${data.email}`,
      "",
      data.message,
    ].join("\n"),
  };
}
