export const whatsappMessage = (): string => {
  const PHONE_NUMBER = "525619238733";
  const DEFAULT_WP_MESSAGE =
    "Hola me gustaría solicitar información acerca del show de los Fantasmas del Ático";
  const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_WP_MESSAGE)}`;
  return WHATSAPP_URL;
};
