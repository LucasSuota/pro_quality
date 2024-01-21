"use client";

import { weGuaranteeList } from "@/constants";
import { WeGuaranteCard } from ".";
import { inView, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { HeroBg } from "@/public/assets/images";

const WhyProQuality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section className="max-w-screen-lg mx-auto text-center mt-20 py-20 bg-progray">
      <h2 className="w-[200px] mx-auto leading-7 font-proquality text-proTitles font-bold">
        POR QUE A PROQUALITY?
      </h2>
      <div
        className="mt-10 sm:mx-20 mx-10"
        style={{ width: "50px", height: "2px", background: "#195973" }}
      />
      <p className="mt-10 sm:mx-20 mx-10 text-start sm:text-proSmTitles text-proSmSubTitles">
        Ao escolher a <b className="text-problue">Proquality Engenharia</b>,
        você está optando por um parceiro comprometido com a{" "}
        <b className="text-problue">excelência</b> e a{" "}
        <b className="text-problue">confiabilidade.</b> Nossa equipe
        especializada não apenas possui profundo conhecimento técnico em ensaios
        de pavimentação e construção civil, mas também se destaca na realização
        de vistorias de entrega de obras.
      </p>
      <p className="mt-10 sm:mx-20 mx-10 text-start sm:text-proSmTitles text-proSmSubTitles">
        Ao nos contratar, garantimos:
      </p>
      <div className="sm:mx-20 mx-10 mt-10 grid sm:grid-cols-2 grid-cols-1">
        {weGuaranteeList.map((item, index) => (
          <motion.div
            style={{
              transform: isInView ? "none" : "translateY(-50px)",
              opacity: isInView ? 1 : 0,
              transition: "0.4s",
            }}
            variants={squareVariants}
            ref={ref}
            key={index}
          >
            <WeGuaranteCard title={item.title} logo={item.logo} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyProQuality;
