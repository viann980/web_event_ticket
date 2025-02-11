// Default WhatsApp number for event registration
const DEFAULT_WHATSAPP_NUMBER = "6285771912060";

/**
 * Redirects to WhatsApp with a pre-filled message
 * @param {string} message - The message to send
 * @param {string} phoneNumber - The phone number to send the message to (without + symbol)
 */
export const redirectToWhatsApp = (message, phoneNumber = DEFAULT_WHATSAPP_NUMBER) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Creates a registration message for an event and redirects to WhatsApp
 * @param {string} eventTitle - The title of the event
 * @param {string} phoneNumber - Optional phone number to override the default
 */
export const handleEventRegistration = (eventTitle, phoneNumber = DEFAULT_WHATSAPP_NUMBER) => {
  const message = `Halo, saya ingin mendaftar untuk event: ${eventTitle}`;
  redirectToWhatsApp(message, phoneNumber);
};
