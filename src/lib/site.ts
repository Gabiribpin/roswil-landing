/**
 * Configuração central do site RosWil.
 * Atualize estes valores antes de publicar (WhatsApp, cidade, Instagram).
 */

export const siteConfig = {
  brandName: "RosWil",
  professionalName: "Rosane",
  tagline: "Oficina de costura",

  /**
   * WhatsApp com DDD, só números, com código do país.
   * Exemplo Brasil: 5511999999999
   * Substitua pelo número real antes de publicar.
   */
  whatsappNumber: "5500000000000",

  /** Exibido no rodapé e em textos de contato */
  whatsappDisplay: "(00) 00000-0000",

  /**
   * Cidade e região de atendimento — provisório até confirmação.
   */
  location: "Cidade e Estado",

  /**
   * Instagram (opcional). Deixe vazio até ter o @ definitivo.
   * Exemplo: "https://instagram.com/roswil.costura"
   */
  instagramUrl: "" as string,

  defaultWhatsAppMessage:
    "Olá, Rosane! Conheci seu trabalho pelo site e gostaria de solicitar informações sobre um serviço de costura.",

  partnershipWhatsAppMessage:
    "Olá, Rosane! Conheci seu trabalho pelo site e gostaria de conversar sobre uma parceria de costura.",

  seo: {
    title: "RosWil — Costura com cuidado, qualidade e compromisso",
    description:
      "Serviços de costura com máquina reta e overloque para confecções, pequenas marcas, lojas e ajustes. Solicite orçamento pelo WhatsApp.",
    url: "https://roswil.vercel.app",
  },
};

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? siteConfig.defaultWhatsAppMessage,
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function buildContactWhatsAppMessage(data: {
  name: string;
  whatsapp: string;
  serviceType: string;
  quantity: string;
  message: string;
}): string {
  return [
    "Olá, Rosane! Conheci seu trabalho pelo site e gostaria de solicitar informações sobre um serviço de costura.",
    "",
    `Nome: ${data.name}`,
    `WhatsApp: ${data.whatsapp}`,
    `Tipo de serviço: ${data.serviceType}`,
    `Quantidade aproximada: ${data.quantity || "Não informado"}`,
    data.message ? `Mensagem: ${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
