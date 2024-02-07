"use client";

import { Footer, Header } from "@/components";
import ServicosHero from "@/components/Servicos/ServicosHero";
import ServicosPrestados from "@/components/Servicos/ServicosPrestados";
import Transition from "@/components/Transition/Transition";

const page = () => {
  return (
    <section>
      <Transition>
        <Header />
        <ServicosHero />
        <ServicosPrestados />

        <Footer />
      </Transition>
    </section>
  );
};

export default page;
