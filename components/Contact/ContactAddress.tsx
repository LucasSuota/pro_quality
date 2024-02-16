import Head from "next/head";
import React from "react";

const ContactAddress = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 mt-10 mb-10">
      <Head>
        <title>ProQuality Engenharia Cidade</title>
        <meta
          name="description"
          content="Vistoria de obras em Curitiba, Controle de Qualidade em Curitiba, Controle de Qualidade em São José dos Pinhais, Projetos de Pavimentação em Curitiba, Pavimentação em Curitiba"
        />
        <meta
          name="Cidade"
          content="Curitiba, Araucária, Contenda, São José dos Pinhais, Paraná"
        />
      </Head>
      <p className="font-proquality text-problue text-proSmSubTitles sm:text-2xl font-bold">
        PROQUALITY ENGENHARIA
      </p>
      <p className="font-proquality">CURITIBA, PARANÁ, BRASIL</p>
    </div>
  );
};

export default ContactAddress;
