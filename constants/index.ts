import { Projeto1, Projeto2 } from "@/src/assets/images/projetos";
import {
  Search,
  Check,
  LightBulb,
  Gear,
  Problems,
  Speech,
} from "@/src/assets/svgs";

export const HeaderMenuItemsList = [
  { title: "Home", link: "/" },
  { title: "Quem somos", link: "/quem_somos" },
  { title: "Clientes", link: "/clientes" },
  { title: "Serviços", link: "/servicos" },
  { title: "Contato", link: "/contato" },
];

export const servicesList = [
  {
    title: "CONTROLE DE QUALIDADE",
    image: Check,
    text1:
      "Oferecemos serviços abrangentes de controle de qualidade em obras, garantindo excelência na execução por meio de inspeções rigorosas e ensaios especializados.",
    text2:
      "Nossa equipe altamente qualificada realiza verificações detalhadas em todas as fases do projeto, assegurando conformidade com normas e padrões estabelecidos.",
    text3:
      "Realizamos ensaios de qualidade em materiais, estruturas e instalações, proporcionando segurança e durabilidade aos empreendimentos.",
    text4:
      "Conte conosco para assegurar a integridade e qualidade em cada etapa de sua obra.",
  },
  {
    title: "VISTORIA EM OBRAS",
    image: Search,
    text1:
      "Oferecemos serviços de vistoria de entrega de obra, um passo crucial para garantir a excelência no resultado final.",
    text2:
      "Nossa equipe especializada realiza inspeções minuciosas, verificando detalhes de acabamento, funcionalidade e conformidade com as especificações do projeto.",
    text3:
      "Com expertise em identificar potenciais problemas antes da entrega, asseguramos que seu empreendimento seja entregue com qualidade superior.",
    text4:
      "Conte conosco para assegurar a integridade e qualidade em cada etapa de sua obra.",
  },
];

export const weGuaranteeList = [
  { title: "EXPERTISE TÉCNICA", logo: LightBulb },
  { title: "COMPROMETIMENTO COM A QUALIDADE", logo: Gear },
  { title: "ANTECIPAÇÃO DE PROBLEMAS", logo: Problems },
  { title: "TRANSPARÊNCIA E COMUNICAÇÃO", logo: Speech },
];

export const projetosRealizadosPreview = [
  {
    title: "Serviço de sondagem a trado",
    description:
      "Realizado no dia xx/xx/xxxx na cidade de xx, cliente empresa xx",
    image: Projeto2,
  },
  {
    title: "Ensaio de deflexão viga benkelman",
    description:
      "Realizado no dia xx/xx/xxxx na cidade de xx, cliente empresa xx",
    image: Projeto1,
  },
];
