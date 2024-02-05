import { Projeto1, Projeto2, Projeto3 } from "@/src/assets/images/projetos";
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
    title: "Ensaio de deflexão viga benkelman",
    date: "22/01/2024",
    image: Projeto1,
    place: "Contorno Leste - São José dos Pinhais",
    client: "Terrinter topografia",
  },
  {
    title: "Serviço de sondagem a trado",
    date: "19/12/2023",
    image: Projeto2,
    place: "Contorno Leste - São José dos Pinhais",
  },
  {
    title: "Ensaio de densidade Insitu",
    date: "22/01/2024",
    image: Projeto3,
    place: "Rua Dom Predo I - Contenda PR",
    client: "AACS engenharia e empreendimentos",
  },
];

export const services = [
  {
    title: "Serviços de Vistoria",
    types: {
      recebimentoDeObras: {
        title: "Recebimento de Obras",
        description:
          "A vistoria de recebimento de obra avalia se a construção está de acordo com o contrato.",
        uses: [
          {
            title: "Verificação de Conformidade",
            description: "Garante execução conforme projeto e normas.",
          },
          {
            title: "Identificação de Defeitos",
            description: "Detecta defeitos antes do recebimento final.",
          },
          {
            title: "Documentação",
            description:
              "Registra visualmente o estado da obra para disputas futuras.",
          },
          {
            title: "Recebimento Oficial",
            description: "Formaliza aceitação da obra pelo proprietário.",
          },
        ],
      },
      parecerTecnicoJudicial: {
        title: "Parecer Técnico Judicial",
        description:
          "Documento técnico em processos judiciais relacionados a imóveis, fornecendo análise especializada.",
        goal: "Fornece informações técnicas ao tribunal para decisões justas em casos legais envolvendo propriedades.",
        sum: "Desempenha papel crucial ao oferecer embasamento técnico para decisões informadas no sistema judiciário.",
      },
      inspecaoPredial: {
        title: "Inspeção Predial",
        description:
          "Avaliação técnica de edificações para analisar conservação, segurança e condições gerais.",
        uses: [
          {
            title: "Estrutura",
            description:
              "Avaliação de fundações, vigas, pilares e elementos estruturais.",
          },
          {
            title: "Instalações",
            description:
              "Verificação de instalações elétricas, hidráulicas e sanitárias.",
          },
          {
            title: "Acabamentos",
            description:
              "Análise do estado de conservação de pisos, revestimentos, pinturas.",
          },
          {
            title: "Segurança",
            description:
              "Avaliação de condições de segurança contra incêndios e acessibilidade.",
          },
          {
            title: "Patologias",
            description:
              "Avaliação de condições de segurança contra incêndios e acessibilidade.",
          },
        ],
        sum: "Identifica problemas antes que se agravem, permitindo manutenções preventivas e atendendo normativas locais.",
      },
    },
  },
  {
    title: "Serviços de Controle de Qualidade",
    items: {
      primeiro: {
        title: "Concreto",
        tests: [
          "Moldagem de corpos de prova",
          "Ensaio de resistência à compressão",
          "Slump test",
          "Extração de corpos de prova com sonda rotativa",
        ],
      },
      segundo: {
        title: "Asfalto",
        tests: [
          "Extração de corpos de prova com sonda rotativa",
          "Teor de betume",
          "Taxa de ligantes",
          "Grau de compactação",
          "Deflexão viga benkelman",
          "Granulometria",
          "Compactação marshall",
        ],
      },
      terceiro: {
        title: "Solos e Agregados",
        tests: [
          "Granulometria",
          "Ensaio de proctor",
          "Ensaio de CBR",
          "Sondagem a trado",
          "Ensaio de densidade IN SITU",
          "Deflexão viga benkelman",
          "Lamelaridade",
        ],
      },
    },
  },
];

export const footerItems = [
  { title: "Home", link: "/" },
  { title: "Serviços", link: "/servicos" },
  { title: "Quem somos", link: "/quem_somos" },
  { title: "Contato", link: "/contato" },
];
