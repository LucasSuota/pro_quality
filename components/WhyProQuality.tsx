"use client";

import { weGuaranteeList } from "@/constants";
import { WeGuaranteCard } from ".";
import { inView, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { HeroBg } from "@/public/assets/images";

const WhyProQuality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section className="w-full bg-progray">
      <motion.section className="max-w-screen-lg mx-auto text-center mt-20 py-20">
        <h2 className="w-[200px] mx-auto leading-7 font-proquality sm:text-titles text-smtitles font-bold">
          POR QUE A PROQUALITY?
        </h2>
        <div
          className="mt-10 sm:mx-20 mx-10"
          style={{ width: "50px", height: "2px", background: "#195973" }}
        />
        <p className="mt-10 sm:mx-20 mx-10 text-start sm:text-para text-smpara">
          Ao escolher a <b className="text-problue">Proquality Engenharia</b>,
          você está optando por um parceiro comprometido com a{" "}
          <b className="text-problue">excelência</b> e a{" "}
          <b className="text-problue">confiabilidade.</b> Nossa equipe
          especializada não apenas possui profundo conhecimento técnico em
          ensaios de pavimentação e construção civil, mas também se destaca na
          realização de vistorias de entrega de obras.
        </p>
        <p className="mt-10 sm:mx-20 mx-10 text-start sm:text-para text-smpara">
          Ao nos contratar, garantimos:
        </p>
        <div className="sm:mx-20 mx-10 mt-10 grid sm:grid-cols-2 grid-cols-1">
          {weGuaranteeList.map((item, index) => (
            <motion.div
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              ref={ref}
              key={index}
            >
              <WeGuaranteCard title={item.title} logo={item.logo} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  );
};

export default WhyProQuality;
