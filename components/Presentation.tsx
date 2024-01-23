"use client";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const Presentation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const interval = setInterval(() => {
      animate("span", {
        backgroundColor: "#195973",
        color: "#ffffff",
        padding: "1px 1px",
        duration: 1,
        fontWeight: "bold",
      });

      clearInterval(interval);
    }, 500);
  });

  return (
    <section className="w-full mx-auto">
      <div className="max-w-screen-lg mx-auto px-5 sm:px-0 pt-40 pb-40 flex sm:flex-row flex-col">
        {/* <p className="text-5xl font-proquality font-bold">&quot;</p> */}
        <div ref={scope} className="sm:w-full">
          <h2 className="sm:text-titles text-smtitles font-proquality font-bold">
            Quem somos
          </h2>
          <p className="sm:text-para text-smpara mt-4">
            A <span>PROQUALITY Engenharia</span> é uma empresa dedicada à
            excelência nos serviços de ensaios em obras de pavimentação e
            construção civil, bem como vistorias de entrega de obras.
          </p>
          <p className="sm:text-para text-smpara mt-4">
            Com uma equipe <span>altamente capacitada</span> e{" "}
            <span>comprometida</span>, nosso objetivo é assegurar a{" "}
            <span>qualidade</span> e conformidade em cada projeto que assumimos.
            Realizamos ensaios especializados para garantir a durabilidade e
            segurança das estruturas, além de oferecer vistorias abrangentes que
            antecipam potenciais problemas, proporcionando tranquilidade aos
            nossos clientes.
          </p>
          <p className="sm:text-para text-smpara mt-4">
            Na <span>PROQUALITY Engenharia</span> , <span>comprometimento</span>
            , <span>conhecimento técnico</span> e <span>eficiência</span> são os
            pilares que fundamentam nossa atuação, tornando-nos a escolha{" "}
            <span>confiável</span> para suas necessidades de controle de
            qualidade em obras.
          </p>
        </div>
        {/* <p className="text-5xl font-proquality font-bold">&quot;</p> */}
      </div>
    </section>
  );
};

export default Presentation;
