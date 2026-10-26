export function buildWhatsAppLink(
  whatsappNumber: string | null,
  message: string
): string | null {
  if (!whatsappNumber) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
