import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeStoreProvider } from "@/components/theme-store-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatsAppLink } from "@/components/whatsapp-link";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shreda — Founder & Full-stack Developer",
    template: "%s | Shreda",
  },
  description:
    "Shreda is a solo founder and full-stack developer in Lagos, Nigeria, building Schooldra and practical business tools.",
  openGraph: {
    type: "website",
    siteName: "Shreda",
    title: "Shreda — Founder & Full-stack Developer",
    description:
      "Building Schooldra for Nigerian students and practical tools for Nigerian businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreda — Founder & Full-stack Developer",
    description:
      "Building Schooldra for Nigerian students and practical tools for Nigerian businesses.",
  },
};

const themeBootstrap = `(() => {
  let mode = "system";
  try {
    const saved = localStorage.getItem("shreda-theme");
    if (saved === "light" || saved === "dark") mode = saved;
  } catch {
    console.warn("Theme preference is unavailable; using the system theme.");
  }
  const resolved = mode === "system"
    ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : mode;
  const root = document.documentElement;
  root.dataset.theme = resolved;
  root.classList.toggle("dark", resolved === "dark");
  window.__shredaTheme = { mode, resolved };
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <ThemeStoreProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <SiteHeader themeControl={<ThemeToggle />} />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <WhatsAppLink />
        </ThemeStoreProvider>
      </body>
    </html>
  );
}
