import { Search, Check } from "@/src/assets/svgs";

export const HeaderMenuItemsList = [
  { title: "Home", link: "/" },
  { title: "Quem somos?", link: "/quem_somos" },
  { title: "Clientes", link: "/clientes" },
  { title: "Contato", link: "/contato" },
];

export const servicesList = [
  {
    title: "CONTROLE DE QUALIDADE",
    image: Check,
    text: [
      "Oferecemos serviços abrangentes de controle de qualidade em obras, garantindo excelência na execução por meio de inspeções rigorosas e ensaios especializados.",
      "Nossa equipe altamente qualificada realiza verificações detalhadas em todas as fases do projeto, assegurando conformidade com normas e padrões estabelecidos.",
      "Realizamos ensaios de qualidade em materiais, estruturas e instalações, proporcionando segurança e durabilidade aos empreendimentos.",
      "Conte conosco para assegurar a integridade e qualidade em cada etapa de sua obra.",
    ],
  },
  {
    title: "VISTORIA EM OBRAS",
    image: Search,
    text: [
      "Oferecemos serviços de vistoria de entrega de obra, um passo crucial para garantir a excelência no resultado final.",
      "Nossa equipe especializada realiza inspeções minuciosas, verificando detalhes de acabamento, funcionalidade e conformidade com as especificações do projeto.",
      "Com expertise em identificar potenciais problemas antes da entrega, asseguramos que seu empreendimento seja entregue com qualidade superior.",
      "Conte conosco para uma vistoria abrangente que proporciona confiança e tranquilidade na entrega de sua obra",
    ],
  },
];
