import React from "react";

const Presentation = () => {
  return (
    <section className="w-full mx-auto h-screen">
      <div className="max-w-screen-lg mx-auto px-10 sm:px-0 pt-40 flex sm:flex-row flex-col gap-10">
        <p className="text-7xl font-proquality font-bold">&quot;</p>
        <div className="sm:w-full">
          <h2 className="sm:text-titles text-smtitles font-proquality font-bold">
            Quem somos
          </h2>
          <p className="sm:text-para text-smpara mt-4">
            A Proquality Engenharia é uma empresa dedicada à excelência nos
            serviços de ensaios em obras de pavimentação e construção civil, bem
            como vistorias de entrega de obras.
          </p>
          <p className="sm:text-para text-smpara mt-4">
            Com uma equipe altamente capacitada e comprometida, nosso objetivo é
            assegurar a qualidade e conformidade em cada projeto que assumimos.
            Realizamos ensaios especializados para garantir a durabilidade e
            segurança das estruturas, além de oferecer vistorias abrangentes que
            antecipam potenciais problemas, proporcionando tranquilidade aos
            nossos clientes.
          </p>
          <p className="sm:text-para text-smpara mt-4">
            Na Proquality Engenharia, comprometimento, conhecimento técnico e
            eficiência são os pilares que fundamentam nossa atuação,
            tornando-nos a escolha confiável para suas necessidades de controle
            de qualidade em obras.
          </p>
        </div>
        <p className="text-7xl font-proquality font-bold">&quot;</p>
      </div>
    </section>
  );
};

export default Presentation;
