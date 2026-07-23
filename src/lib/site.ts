/**
 * Configuração central do site RW Ateliê.
 * Atualize cidade/Instagram quando tiver o dado definitivo.
 */

export const siteConfig = {
  brandName: "RW Ateliê",
  professionalName: "Rosane",
  tagline: "Oficina de costura",

  /**
   * WhatsApp oficial: +55 19 99622-5907
   * Formato wa.me: só números, com código do país.
   */
  whatsappNumber: "5519996225907",

  /** Exibido no rodapé e em textos de contato */
  whatsappDisplay: "(19) 99622-5907",

  /**
   * Cidade e região de atendimento — provisório até confirmação.
   */
  location: "Cidade e Estado",

  /**
   * Instagram (opcional). Deixe vazio até ter o @ definitivo.
   */
  instagramUrl: "" as string,

  /** Caminho do logo em /public */
  logoSrc: "/images/logo-rw-atelie.png",

  defaultWhatsAppMessage:
    "Olá, Rosane! Conheci seu trabalho pelo site e gostaria de solicitar informações sobre um serviço de costura.",

  partnershipWhatsAppMessage:
    "Olá, Rosane! Conheci seu trabalho pelo site e gostaria de conversar sobre uma parceria de costura.",

  seo: {
    title: "RW Ateliê — Costura com cuidado, qualidade e compromisso",
    description:
      "Serviços de costura com máquina reta e overloque para confecções, pequenas marcas, lojas e ajustes. Solicite orçamento pelo WhatsApp.",
    url: "https://roswil-landing.vercel.app",
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
