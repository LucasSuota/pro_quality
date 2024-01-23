"use client";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const Presentation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const interval = setInterval(() => {
      animate(
        "span",
        { backgroundColor: "#195973", color: "#ffffff" },
        { duration: 1 },
      );

      clearInterval(interval);
    }, 500);
  });

  return (
    <section className="w-full mx-auto">
      <div className="max-w-screen-lg mx-auto px-10 sm:px-0 pt-40 flex sm:flex-row flex-col gap-10">
        <p className="text-7xl font-proquality font-bold">&quot;</p>
        <div ref={scope} className="sm:w-full">
          <h2 className="sm:text-titles text-smtitles font-proquality font-bold">
            Quem somos
          </h2>
          <p className="sm:text-para text-smpara mt-4">
            A <span>ProQuality Engenharia</span> é uma empresa dedicada à
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
            Na Proquality Engenharia, <span>comprometimento</span>,{" "}
            <span>conhecimento técnico</span> e<span>eficiência</span> são os
            pilares que fundamentam nossa atuação, tornando-nos a escolha
            confiável para suas necessidades de controle de qualidade em obras.
          </p>
        </div>
        <p className="text-7xl font-proquality font-bold">&quot;</p>
      </div>
    </section>
  );
};

export default Presentation;
