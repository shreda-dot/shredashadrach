"use client";

import { useState, type FormEvent } from "react";

type SubmitState =
  | { status: "idle"; message: string }
  | { status: "submitting"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting", message: "Sending your message…" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: { message?: string } = await response.json();

      if (!response.ok) {
        setState({
          status: "error",
          message:
            result.message ??
            "Your message could not be sent. Please try again or email me directly.",
        });
        return;
      }

      form.reset();
      setState({
        status: "success",
        message: result.message ?? "Your message has been sent.",
      });
    } catch {
      setState({
        status: "error",
        message:
          "The request could not reach the server. Check your connection and try again.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          minLength={10}
          maxLength={5000}
          required
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-company">Leave this field empty</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <button
        className="button button-primary"
        type="submit"
        disabled={state.status === "submitting"}
      >
        {state.status === "submitting" ? "Sending…" : "Send message"}
      </button>
      <p
        className="form-status"
        data-state={state.status === "idle" || state.status === "submitting" ? "" : state.status}
        aria-live="polite"
        role={state.status === "error" ? "alert" : "status"}
      >
        {state.message}
      </p>
    </form>
  );
}
