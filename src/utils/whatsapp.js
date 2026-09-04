export const WHATSAPP_NUMBER = '5512988232393'
export const DUVIDAS_WHATSAPP_NUMBER = '5512981895314'

export function buildWhatsappLink(message, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function buildPropertyWhatsappLink(property) {
  const message = `Quero consultar o imóvel: ${property.title}, ${property.bairro}, ${property.city}`
  return buildWhatsappLink(message)
}
