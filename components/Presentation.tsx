import DefaultButton from "./Buttons/DefualtButton";

const Presentation = () => {
  return (
    // <section className="w-full mx-auto">
    //   <div className="max-w-screen-lg mx-auto px-4 pt-40 pb-40 flex flex-col">
    //     <div ref={scope} className="sm:w-full">
    //       <h2 className="sm:text-titles text-smtitles font-proquality font-bold">
    //         Quem somos
    //       </h2>
    //       <p className="sm:text-para text-smpara mt-4">
    //         A <span>PROQUALITY Engenharia</span> é uma empresa dedicada à
    //         excelência nos serviços de ensaios em obras de{" "}
    //         <span>pavimentação</span> e <span>construção civil</span>, bem como{" "}
    //         <span>vistorias</span> de entrega de obras.
    //       </p>
    //       <p className="sm:text-para text-smpara mt-4">
    //         Com uma equipe <span>altamente capacitada</span> e comprometida,
    //         nosso objetivo é assegurar a <span>qualidade</span> e{" "}
    //         <span>conformidade</span> em cada projeto que assumimos. Realizamos
    //         ensaios especializados para garantir a<span>durabilidade</span> e{" "}
    //         <span>segurança</span> das estruturas, além de oferecer vistorias
    //         abrangentes que antecipam potenciais problemas, proporcionando
    //         tranquilidade aos nossos clientes.
    //       </p>
    //       <p className="sm:text-para text-smpara mt-4">
    //         Na <span>PROQUALITY Engenharia</span>, <span>comprometimento</span>,{" "}
    //         <span>conhecimento técnico</span> e <span>eficiência</span> são os
    //         pilares que fundamentam nossa atuação, tornando-nos a escolha
    //         confiável para suas necessidades de controle de qualidade em obras.
    //       </p>
    //     </div>
    //     <QueroOrcamento />
    //   </div>
    // </section>
    <section className="max-w-screen-lg mx-auto sm:px-10 px-4 min-h-screen flex flex-col">
      <div className="mt-40">
        <h2 className="text-problack text-titles font-proquality font-bold">
          Quem somos
        </h2>
        <div className="font-proquality sm:text-para text-smpara">
          <p className="mt-4">
            A{" "}
            <span className="underline underline-offset-2 decoration-problue">
              ProQuality Engenharia
            </span>{" "}
            é uma empresa dedicada à excelência nos serviços de ensaios em obras
            de pavimentação e construção civil, bem como vistorias de entrega de
            obras.
          </p>
          <p className="mt-4">
            Com uma equipe altamente capacitada e comprometida, nosso objetivo é
            assegurar a qualidade e conformidade em cada projeto que assumimos.
            Realizamos ensaios especializados para garantir a durabilidade e
            segurança das estruturas, além de oferecer vistorias abrangentes que
            antecipam potenciais problemas, proporcionando tranquilidade aos
            nossos clientes.
          </p>
          <p className="mt-4">
            Na Proquality Engenharia, comprometimento, conhecimento técnico e
            eficiência são os pilares que fundamentam nossa atuação,
            tornando-nos a escolha confiável para suas necessidades de controle
            de qualidade em obras.
          </p>
        </div>
      </div>
      <DefaultButton title="Ver Serviços e Projetos" link="/servicos" />
    </section>
  );
};

export default Presentation;
