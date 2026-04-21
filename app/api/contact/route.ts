import { randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SESSION_COOKIE = "portfolio_contact_sid";
const LOCK_COOKIE = "portfolio_contact_locked";
const LOCK_WINDOW_SECONDS = 60 * 60 * 24;

const deviceLocks = new Map<string, number>();

const disposableDomains = new Set([
  "10minutemail.com",
  "dispostable.com",
  "fakeinbox.com",
  "getairmail.com",
  "guerrillamail.com",
  "maildrop.cc",
  "mailinator.com",
  "mailnesia.com",
  "tempmail.com",
  "temp-mail.org",
  "trashmail.com",
  "yopmail.com",
]);

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

function isDisposableEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase() || "";

  if (!domain) {
    return true;
  }

  if (disposableDomains.has(domain)) {
    return true;
  }

  return /(temp|disposable|mailinator|yopmail|trashmail)/i.test(domain);
}

function validatePayload(payload: ContactPayload) {
  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim().toLowerCase();
  const subject = (payload.subject || "").trim();
  const message = (payload.message || "").trim();
  const website = (payload.website || "").trim();

  if (website.length > 0) {
    return { ok: false, error: "Spam blocked." };
  }

  if (name.length < 2 || name.length > 80) {
    return { ok: false, error: "Name must be between 2 and 80 characters." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please provide a valid email address." };
  }

  if (isDisposableEmail(email)) {
    return {
      ok: false,
      error:
        "Temporary/disposable email addresses are not allowed. Please use a real email.",
    };
  }

  if (subject.length < 3 || subject.length > 120) {
    return { ok: false, error: "Subject must be between 3 and 120 characters." };
  }

  if (message.length < 20 || message.length > 2500) {
    return {
      ok: false,
      error: "Message must be between 20 and 2500 characters.",
    };
  }

  return {
    ok: true,
    value: {
      name,
      email,
      subject,
      message,
    },
  };
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const validated = validatePayload(body);

  if (!validated.ok) {
    return NextResponse.json({ message: validated.error }, { status: 400 });
  }

  const submission = validated.value!;

  const existingSessionCookie = request.cookies.get(SESSION_COOKIE)?.value;
  const hasLockedCookie = request.cookies.get(LOCK_COOKIE)?.value === "1";
  const sessionId = existingSessionCookie || randomUUID();

  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip";
  const userAgent = request.headers.get("user-agent") || "unknown-agent";
  const clientKey = `${clientIp}|${userAgent.slice(0, 160)}`;
  const currentLockUntil = deviceLocks.get(clientKey) || 0;

  if (hasLockedCookie || currentLockUntil > Date.now()) {
    return NextResponse.json(
      {
        message:
          "Message already sent recently from this browser/device. Please try again after 24 hours.",
      },
      { status: 429 }
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail =
    process.env.CONTACT_RECEIVER_EMAIL || "sharmaeditzayush@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        message:
          "Contact form is not configured yet. Add SMTP environment variables first.",
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const emailText = [
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Subject: ${submission.subject}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${smtpUser}>`,
      to: receiverEmail,
      replyTo: submission.email,
      subject: `[Portfolio] ${submission.subject}`,
      text: emailText,
    });
  } catch (error) {
    console.error("Contact form SMTP error:", error);

    return NextResponse.json(
      {
        message:
          "SMTP authentication failed or mail service rejected the request. Re-check SMTP_USER, SMTP_PASS (App Password), and restart the dev server.",
      },
      { status: 500 }
    );
  }

  deviceLocks.set(clientKey, Date.now() + LOCK_WINDOW_SECONDS * 1000);

  const response = NextResponse.json(
    {
      message:
        "Message sent successfully. This browser/device is now locked for 24 hours.",
    },
    { status: 200 }
  );

  response.cookies.set(SESSION_COOKIE, sessionId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  response.cookies.set(LOCK_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: LOCK_WINDOW_SECONDS,
  });

  return response;
}
