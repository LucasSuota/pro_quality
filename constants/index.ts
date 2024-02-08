import { projetosImagens } from "@/src/assets/images/projetos";
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
  {
    title: "PROJETOS DE PAVIMENTAÇÃO",
    text1:
      "Oferecemos serviços abrangentes de projetos de pavimentação, incluindo análise de solo, dimensionamento de materiais, desenhos técnicos, e supervisão de obras. Garantimos soluções eficientes e duradouras para atender às necessidades específicas de cada projeto, seguindo padrões de qualidade e normas técnicas vigentes. Contamos com uma equipe especializada para assegurar a execução precisa e segura de todos os aspectos do projeto de pavimentação.",
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
    date: "19/12/2023",
    image: projetosImagens[0].url,
    place: "Contorno Leste - São José dos Pinhais",
    client: "Terrinter topografia",
  },
  {
    title: "Serviço de sondagem a trado",
    date: "16/12/2023",
    image: projetosImagens[1].url,
    place: "Contorno Leste - São José dos Pinhais",
  },
  {
    title: "Ensaio de densidade INSITU",
    date: "22/01/2024",
    image: projetosImagens[2].url,
    place: "Rua Dom Predo I - Contenda PR",
    client: "AACS engenharia e empreendimentos",
  },
];

export const servicosDeControleDeQualidade = {
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
};

export const servicosDeVistoria = {
  title: "Serviços de Vistoria",
  types: {
    recebimentoDeObras: {
      title: "Recebimento de Obras",
      description:
        "A vistoria de recebimento de obra avalia se a construção está de acordo com o contrato.",
      uses: [
        {
          title: "Verificação de Conformidade",
          description:
            "Garantir que a obra foi executada conforme o projeto aprovado, normas técnicas e regulamentações locais.",
        },
        {
          title: "Identificação de Defeitos",
          description:
            "Detectar quaisquer defeitos, danos ou questões de qualidade que precisem ser corrigidos antes do recebimento final.",
        },
        {
          title: "Documentação",
          description:
            "Registrar visualmente o estado atual da obra por meio de relatórios fotográficos e documentação escrita, o que é crucial para resolver disputas futuras.",
        },
        {
          title: "Recebimento Oficial",
          description:
            "Formalizar a aceitação da obra pelo proprietário ou cliente, indicando que ela está pronta para uso e ocupação.",
        },
      ],
    },
    parecerTecnicoJudicial: {
      title: "Parecer Técnico Judicial",
      description:
        "Um parecer técnico judicial de imóvel é um documento elaborado por um profissional qualificado, como um engenheiro ou arquiteto, que fornece uma análise técnica sobre questões relacionadas a um imóvel dentro do contexto de um processo judicial. Esse parecer pode abordar diversos aspectos, como avaliação de valor, condições estruturais, possíveis defeitos, conformidade com normas e regulamentos, entre outros.",
      goal: "O objetivo desse parecer é fornecer informações técnicas e especializadas ao tribunal para ajudar na tomada de decisões relacionadas ao imóvel em questão. Pode ser solicitado em casos de disputas legais envolvendo propriedades, como ações de desapropriação, litígios imobiliários, danos estruturais, entre outros.",
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
            "Verificação das instalações elétricas, hidráulicas, sanitárias e de gás, buscando possíveis irregularidades ou desgastes.",
        },
        {
          title: "Acabamentos",
          description:
            "Análise do estado de conservação de pisos, revestimentos, pinturas e outros elementos estéticos.",
        },
        {
          title: "Segurança",
          description:
            "Avaliação das condições de segurança contra incêndios, acessibilidade, entre outros.",
        },
        {
          title: "Patologias",
          description:
            " Identificação de patologias, como infiltrações, fissuras, desgastes prematuros, entre outros problemas.",
        },
      ],
      sum: "Identifica problemas antes que se agravem, permitindo manutenções preventivas e atendendo normativas locais.",
    },
  },
};

export const projetoDePavimentação = {
  title: "Projetos de Pavimentação",
  description:
    "Oferecemos serviços abrangentes de projetos de pavimentação, incluindo análise de solo, dimensionamento de materiais, desenhos técnicos, e supervisão de obras. Garantimos soluções eficientes e duradouras para atender às necessidades específicas de cada projeto, seguindo padrões de qualidade e normas técnicas vigentes. Contamos com uma equipe especializada para assegurar a execução precisa e segura de todos os aspectos do projeto de pavimentação.",
  items: [
    "Projeto Geométrico",
    "Projeto de Drenagem",
    "Projeto de Pavimentação",
    "Projeto de Sinalização e Complementares",
  ],
};

export const footerItems = [
  { title: "Home", link: "/" },
  { title: "Serviços", link: "/servicos" },
  { title: "Quem somos", link: "/quem_somos" },
  { title: "Contato", link: "/contato" },
];
