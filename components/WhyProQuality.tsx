"use client";

import { weGuaranteeList } from "@/constants";
import { WeGuaranteCard } from ".";
import { motion } from "framer-motion";

const WhyProQuality = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      className="max-w-screen-lg mx-auto text-center mt-20 py-20 bg-progray"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
      <div className="sm:mx-20 mx-10 mt-10 flex flex-col sm:flex-row">
        {weGuaranteeList.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <WeGuaranteCard title={item.title} logo={item.logo} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyProQuality;
