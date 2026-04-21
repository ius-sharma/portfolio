"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type ContactFormProps = {
  initialSubject: string;
};

export default function ContactForm({ initialSubject }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: initialSubject,
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const raw = await response.text();
      let data: { message?: string } = {};

      try {
        data = JSON.parse(raw) as { message?: string };
      } catch {
        data = { message: "Unexpected server response." };
      }

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Unable to send your message right now.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Message sent successfully.");
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again in a moment.");
    }
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pb-20 pt-14 md:px-8">
      <Link className="text-sm text-[#facc15] hover:underline" href="/">
        Back to Home
      </Link>

      <section className="mt-5 rounded-3xl border border-white/20 bg-[#111111]/85 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.2em] text-[#facc15]">Contact Form</p>
        <h1 className="mt-3 font-title text-4xl md:text-5xl">Send Me a Message</h1>
        <p className="mt-4 text-[#f5f5f5]">
          Fill out this form and I will get back to you as soon as possible.
        </p>

        {status === "success" ? (
          <div className="mt-8 space-y-4 rounded-2xl border border-[#facc15]/60 bg-black/50 p-6">
            <p className="text-xl font-semibold text-[#facc15]">Message Sent Successfully</p>
            <p className="text-sm text-[#f5f5f5]">{message}</p>
            <p className="text-sm text-[#f5f5f5]">
              Expected response time: within 24-48 hours.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (

        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-[#f5f5f5]">
              Your Name
              <input
                required
                className="rounded-xl border border-white/25 bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#facc15]"
                value={form.name}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, name: event.target.value }))
                }
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-[#f5f5f5]">
              Your Email
              <input
                required
                type="email"
                className="rounded-xl border border-white/25 bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#facc15]"
                value={form.email}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm text-[#f5f5f5]">
            Subject
            <input
              required
              className="rounded-xl border border-white/25 bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#facc15]"
              value={form.subject}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, subject: event.target.value }))
              }
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-[#f5f5f5]">
            Message
            <textarea
              required
              rows={7}
              className="rounded-xl border border-white/25 bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#facc15]"
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
            />
          </label>

          <label className="hidden" aria-hidden="true">
            Website
            <input
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, website: event.target.value }))
              }
            />
          </label>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-[#000000] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <Link
              href="/"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Cancel
            </Link>
          </div>

          {message && (
            <p className="text-sm text-[#ffffff]">
              {message}
            </p>
          )}

          <p className="text-xs text-[#facc15]">
            Anti-spam policy: only one successful message is allowed per
            browser/device every 24 hours.
          </p>
        </form>
        )}
      </section>
    </main>
  );
}
