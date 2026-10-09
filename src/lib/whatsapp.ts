const defaultMessage = "Hi Shreda, I saw your portfolio.";

export function getWhatsAppHref(): string | null {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();

  if (!number || !/^\d{12,15}$/.test(number)) {
    return null;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(defaultMessage)}`;
}
