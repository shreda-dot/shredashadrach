"use client";

import { usePathname } from "next/navigation";
import { getWhatsAppHref } from "@/lib/whatsapp";

export function WhatsAppLink() {
  const pathname = usePathname();
  const href = getWhatsAppHref();

  if (pathname === "/contact") {
    return null;
  }

  if (!href) {
    return process.env.NODE_ENV === "development" ? (
      <span className="whatsapp-float whatsapp-todo" role="status">
        [TODO: configure WhatsApp]
      </span>
    ) : null;
  }

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shreda on WhatsApp, opens in a new tab"
      title="Chat on WhatsApp"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M20.4 3.6A11.7 11.7 0 0 0 2 17.7L.5 23.5l6-1.6A11.7 11.7 0 0 0 20.4 3.6ZM12 21a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-3.6 1 1-3.5-.3-.4A9.7 9.7 0 1 1 12 21Zm5.3-7.3c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.5.3-.6c.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7c0 1.6 1.2 3.1 1.4 3.4s2.4 3.7 5.8 5.1c.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.7-.1 1.8-.7 2.1-1.4s.3-1.3.2-1.4-.3-.2-.6-.4Z" />
      </svg>
    </a>
  );
}
