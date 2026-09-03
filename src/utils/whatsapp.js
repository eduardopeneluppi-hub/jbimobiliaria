export const WHATSAPP_NUMBER = '5512981895314'

export function buildWhatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildPropertyWhatsappLink(property) {
  const message = `Quero consultar o imóvel: ${property.title}, ${property.bairro}, ${property.city}`
  return buildWhatsappLink(message)
}
