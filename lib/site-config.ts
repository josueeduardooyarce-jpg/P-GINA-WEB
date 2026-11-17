// Datos de tu empresa. Todo el sitio lee estos valores desde aquí.
export const siteConfig = {
  name: 'Nexura Corp',
  legalName: 'Nexura Corp',
  url: 'https://www.nexuracorp.com', // REEMPLAZAR: tu dominio final
  email: 'josueeduardooyarce@gmail.com',
  // REEMPLAZAR: URL de tu calendario (Cal.com o Calendly), p. ej. "https://cal.com/tu-usuario/diagnostico".
  // Si queda vacío, se muestra un marcador de posición.
  calendarUrl: '',
  // WhatsApp con código de país, solo dígitos (Perú = 51).
  whatsapp: '51919496967',
  // Clave pública de Web3Forms (es seguro que esté en el código de la página).
  web3formsKey: '8e0b015b-3861-4c8c-9d29-d505794ac292',
}

// Enlace que abre el chat de WhatsApp con un mensaje ya escrito.
export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}
