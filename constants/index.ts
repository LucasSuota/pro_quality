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
];

export const weOfferServices = [
  {
    title: "Serviços de Vistoria",
    type: {
      recebimentoDeObras: {
        title: "Recebimento de Obras",
        description:
          "A vistoria de recebimento de obra é um procedimento importante realizado para avaliar e garantir que uma construção ou projeto tenha sido concluído de acordo com as especificações e requisitos estabelecidos no contrato.",
        use: [
          {
            title: "Verificação de Conformidade",
            description:
              " Garantir que a obra foi executada conforme o projeto aprovado, normas técnicas e regulamentações locais.",
          },
          {
            title: "Identificação de Defeitos ou Problemas",
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
              "Formalizar a aceitação da obra pelo proprietário ou cliente, indicando que ela está pronta para uso e ocupação",
          },
        ],
      },
      parecerTecnicoJudicial: {
        title: "Parecer Técnico Judicial",
        description:
          "Um parecer técnico judicial de imóvel é um documento elaborado por um profissional qualificado, como um engenheiro ou arquiteto, que fornece uma análise técnica sobre questões relacionadas a um imóvel dentro do contexto de um processo judicial. Esse parecer pode abordar diversos aspectos, como avaliação de valor, condições estruturais, possíveis defeitos, conformidade com normas e regulamentos, entre outros.",
        goal: "O objetivo desse parecer é fornecer informações técnicas e especializadas ao tribunal para ajudar na tomada de decisões relacionadas ao imóvel em questão. Pode ser solicitado em casos de disputas legais envolvendo propriedades, como ações de desapropriação, litígios imobiliários, danos estruturais, entre outros.",
        sum: "O parecer técnico judicial desempenha um papel crucial ao fornecer embasamento técnico para que o sistema judiciário possa entender melhor os aspectos técnicos e, assim, tomar decisões mais informadas e justas em relação ao imóvel objeto do processo.",
      },
      inspeçãoPredial: {
        title: "Inspeção Predial",
        description:
          "Uma inspeção predial é uma avaliação técnica realizada em edificações, sejam elas residenciais, comerciais ou industriais. O objetivo principal é analisar o estado de conservação, a segurança estrutural e as condições gerais do imóvel. Esse tipo de inspeção é frequentemente conduzido por profissionais qualificados, como engenheiros ou arquitetos.",

        use: [
          {
            title: "Estrutura",
            description:
              "Avaliação das condições das fundações, vigas, pilares e demais elementos estruturais.",
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
              "Avaliação das condições de segurança contra incêndios, acessibilidade, entre outros.",
          },
        ],
        sum: "A inspeção predial é útil para identificar possíveis problemas antes que se agravem, permitindo a realização de manutenções preventivas e, em alguns casos, pode ser exigida por normativas locais. Além disso, ela é comumente solicitada em processos de compra e venda de imóveis, para garantir que o comprador tenha conhecimento do estado geral da propriedade.",
      },
    },
  },
  {
    title: "Serviços de Controle de Qualidade",
    items: {
      primeiro: {
        title: "concreto",
        concreto: [
          "Moldagem de corpos de prova de concreto",
          "Ensaio de resistência a compresão",
          "Slump test",
          "Extração de corpos de prova com sonda rotativa",
        ],
      },
      segundo: {
        title: "asfalto",
        asfalto: [
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
        solosEAgregados: [
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
