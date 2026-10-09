import { checkContactRateLimit } from "@/lib/contact-rate-limit";
import { validateContactSubmission } from "@/lib/contact-validation";

export const runtime = "nodejs";

const maxRequestBytes = 10_000;

function json(
  body: { message: string },
  status: number,
  headers?: HeadersInit,
) {
  return Response.json(body, { status, headers });
}

function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const address = forwardedFor?.split(",")[0]?.trim() || realIp?.trim();
  return address || "unknown";
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ message: "Send the form as JSON." }, 415);
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxRequestBytes) {
    return json({ message: "The form submission is too large." }, 413);
  }

  const body = await request.text();
  if (new TextEncoder().encode(body).byteLength > maxRequestBytes) {
    return json({ message: "The form submission is too large." }, 413);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(body);
  } catch (error) {
    if (!(error instanceof SyntaxError)) {
      throw error;
    }
    return json({ message: "The form submission was not valid JSON." }, 400);
  }

  const validation = validateContactSubmission(parsed);
  if (!validation.success) {
    return json({ message: validation.message }, 400);
  }

  if (validation.data.company) {
    return json({ message: "Thanks. Your message has been sent." }, 200);
  }

  const rateLimit = checkContactRateLimit(getClientKey(request));
  if (!rateLimit.allowed) {
    return json(
      { message: "Too many messages. Please wait a few minutes and try again." },
      429,
      { "Retry-After": String(rateLimit.retryAfterSeconds) },
    );
  }

  const deliveryUrl = process.env.CONTACT_DELIVERY_URL;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const token = process.env.CONTACT_DELIVERY_TOKEN;

  if (!deliveryUrl || !recipient) {
    console.error(
      "Contact delivery is not configured: CONTACT_DELIVERY_URL and CONTACT_TO_EMAIL are required.",
    );
    return json(
      {
        message:
          "The contact form is not configured yet. Please use the social links or try again later.",
      },
      503,
    );
  }

  let destination: URL;
  try {
    destination = new URL(deliveryUrl);
  } catch {
    console.error("CONTACT_DELIVERY_URL must be an absolute URL.");
    return json(
      { message: "The contact service is temporarily unavailable." },
      503,
    );
  }

  if (
    process.env.NODE_ENV === "production" &&
    destination.protocol !== "https:"
  ) {
    console.error("CONTACT_DELIVERY_URL must use HTTPS in production.");
    return json(
      { message: "The contact service is temporarily unavailable." },
      503,
    );
  }

  try {
    const delivery = await fetch(destination, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        to: recipient,
        replyTo: validation.data.email,
        name: validation.data.name,
        message: validation.data.message,
      }),
      signal: AbortSignal.timeout(8_000),
    });

    if (!delivery.ok) {
      console.error("Contact delivery service returned an error.", {
        status: delivery.status,
      });
      return json(
        {
          message:
            "Your message could not be delivered. Please try again later.",
        },
        502,
      );
    }
  } catch (error) {
    console.error("Contact delivery request failed.", error);
    return json(
      {
        message:
          "Your message could not be delivered. Please check back later.",
      },
      502,
    );
  }

  return json({ message: "Thanks. Your message has been sent." }, 200);
}
