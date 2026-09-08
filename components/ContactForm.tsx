"use client";

import {
  useActionState,
  useEffect,
  useId,
  useRef,
  type HTMLAttributes,
} from "react";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/kontakt/actions";

const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;
  const messageErrorId = `${formId}-message-error`;
  const statusId = `${formId}-status`;

  return (
    <form
      ref={formRef}
      action={formAction}
      className="grid gap-5 rounded-xl border border-pine/10 bg-paper p-5 sm:p-6"
      noValidate
    >
      <Field
        id={`${formId}-name`}
        name="name"
        label="Jméno"
        autoComplete="name"
        error={state.fieldErrors?.name}
        errorId={nameErrorId}
      />
      <Field
        id={`${formId}-email`}
        name="email"
        label="E-mail"
        type="email"
        autoComplete="email"
        inputMode="email"
        error={state.fieldErrors?.email}
        errorId={emailErrorId}
      />
      <div>
          <label
            htmlFor={`${formId}-message`}
            className="block text-sm font-medium text-pine-deep"
          >
            Zpráva
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            maxLength={4000}
            aria-invalid={state.fieldErrors?.message ? true : undefined}
            aria-describedby={
              state.fieldErrors?.message ? messageErrorId : undefined
            }
            className="mt-2 w-full min-h-28 rounded-md border border-pine/15 bg-fog px-3 py-2.5 text-base text-ink"
          />
          {state.fieldErrors?.message ? (
            <p id={messageErrorId} className="mt-2 text-sm text-signal">
              {state.fieldErrors.message}
            </p>
          ) : null}
        </div>

        <p className="hidden">
          <label htmlFor={`${formId}-company`}>Firma</label>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-pine px-5 py-2 text-sm font-semibold text-paper hover:bg-pine-deep disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pending ? "Odesílám…" : "Odeslat zprávu"}
          </button>
          <p
            id={statusId}
            role="status"
            aria-live="polite"
            className={`text-sm ${
              state.status === "error"
                ? "text-signal"
                : state.status === "success"
                  ? "text-moss"
                  : "text-muted"
            }`}
          >
            {state.message}
          </p>
        </div>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  inputMode,
  error,
  errorId,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  error?: string;
  errorId: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-pine-deep">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={name === "email" ? 254 : 100}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 h-11 w-full rounded-md border border-pine/15 bg-fog px-3 text-base text-ink"
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-signal">
          {error}
        </p>
      ) : null}
    </div>
  );
}
