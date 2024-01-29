"use client";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import QueroOrcamento from "./Buttons/QueroOrcamento";

const Presentation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const interval = setInterval(() => {
      animate(
        "span",
        {
          backgroundColor: "#195973",
          borderRadius: "2px",
          margin: "1px 1px",
          color: "#ffffff",
          padding: "1px 5px",
        },
        { duration: 1 }
      );

      clearInterval(interval);
    }, 500);
  });

  return (
    <section className="w-full mx-auto">
      <div className="max-w-screen-lg mx-auto px-5 sm:px-0 pt-40 pb-40 flex flex-col">
        <div ref={scope} className="sm:w-full">
          <h2 className="sm:text-titles text-smtitles font-proquality font-bold">
            Quem somos
          </h2>
          <p className="sm:text-para text-smpara mt-4">
            A <span>PROQUALITY Engenharia</span> é uma empresa dedicada à
            excelência nos serviços de ensaios em obras de{" "}
            <span>pavimentação</span> e <span>construção civil</span>, bem como{" "}
            <span>vistorias</span> de entrega de obras.
          </p>
          <p className="sm:text-para text-smpara mt-4">
            Com uma equipe <span>altamente capacitada</span> e comprometida,
            nosso objetivo é assegurar a <span>qualidade</span> e{" "}
            <span>conformidade</span> em cada projeto que assumimos. Realizamos
            ensaios especializados para garantir a<span>durabilidade</span> e{" "}
            <span>segurança</span> das estruturas, além de oferecer vistorias
            abrangentes que antecipam potenciais problemas, proporcionando
            tranquilidade aos nossos clientes.
          </p>
          <p className="sm:text-para text-smpara mt-4">
            Na <span>PROQUALITY Engenharia</span>, <span>comprometimento</span>,{" "}
            <span>conhecimento técnico</span> e <span>eficiência</span> são os
            pilares que fundamentam nossa atuação, tornando-nos a escolha
            confiável para suas necessidades de controle de qualidade em obras.
          </p>
        </div>
        <QueroOrcamento />
      </div>
    </section>
  );
};

export default Presentation;
