import type { NextConfig } from "next";

const siteUrl = process.env.SITE_URL;

if (process.env.NODE_ENV === "production" && !siteUrl) {
  throw new Error("SITE_URL must be set before building for production.");
}

const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();

if (
  process.env.NODE_ENV === "production" &&
  (!whatsAppNumber || !/^\d{12,15}$/.test(whatsAppNumber))
) {
  throw new Error(
    "NEXT_PUBLIC_WHATSAPP_NUMBER must be set to an international number using digits only before building for production.",
  );
}

if (siteUrl) {
  try {
    const parsedUrl = new URL(siteUrl);
    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      throw new Error("SITE_URL must use HTTP or HTTPS.");
    }
  } catch {
    throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
  }
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
};

export default nextConfig;
