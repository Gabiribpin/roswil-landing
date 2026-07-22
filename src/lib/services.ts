export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: "needle" | "overlock" | "hem" | "repair" | "order" | "partners";
};

export const services: ServiceItem[] = [
  {
    id: "costura-montagem",
    title: "Costura e montagem de peças",
    description:
      "Costura e montagem cuidadosa de peças com máquina reta, com atenção ao caimento e ao acabamento.",
    icon: "needle",
  },
  {
    id: "overloque",
    title: "Acabamentos em overloque",
    description:
      "Acabamentos limpos e resistentes em overloque para valorizar o resultado final de cada peça.",
    icon: "overlock",
  },
  {
    id: "barras-ajustes",
    title: "Barras e ajustes",
    description:
      "Barras, ajustes de comprimento e pequenos refinamentos para deixar a peça no tamanho certo.",
    icon: "hem",
  },
  {
    id: "consertos",
    title: "Consertos de roupas",
    description:
      "Consertos feitos com capricho para recuperar e prolongar o uso das suas peças.",
    icon: "repair",
  },
  {
    id: "encomenda",
    title: "Produção sob encomenda",
    description:
      "Produção sob encomenda para quem precisa de peças costuradas com organização e compromisso.",
    icon: "order",
  },
  {
    id: "parceria",
    title: "Parceria com confecções e pequenas marcas",
    description:
      "Apoio em costura e acabamentos para confecções, lojas, marcas e costureiras que precisam terceirizar.",
    icon: "partners",
  },
];

export const differentials = [
  {
    title: "Cuidado em cada peça",
    description: "Atenção aos detalhes do início ao fim de cada trabalho.",
  },
  {
    title: "Acabamento bem-feito",
    description: "Acabamentos limpos, com padrão profissional e capricho.",
  },
  {
    title: "Atendimento próximo",
    description: "Comunicação clara e acompanhamento próximo do seu pedido.",
  },
  {
    title: "Responsabilidade com os pedidos",
    description: "Compromisso com prazos combinados e com a qualidade entregue.",
  },
  {
    title: "Orçamento sem compromisso",
    description: "Tire dúvidas e peça orçamento pelo WhatsApp, sem pressão.",
  },
  {
    title: "Serviços personalizados",
    description: "Soluções alinhadas à necessidade de cada cliente ou parceria.",
  },
];

export const serviceTypeOptions = [
  "Costura e montagem de peças",
  "Acabamentos em overloque",
  "Barras e ajustes",
  "Consertos de roupas",
  "Produção sob encomenda",
  "Parceria / facção",
  "Outro",
];
