export function getSiteUrl(): URL {
  const configuredUrl = process.env.SITE_URL;

  if (configuredUrl) {
    return new URL(configuredUrl);
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("SITE_URL must be set in production.");
  }

  return new URL("http://localhost:3000");
}
