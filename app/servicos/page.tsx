"use client";

import { Footer, Header } from "@/components";
import ServicosHero from "@/components/Servicos/ServicosHero";
import ServicosPrestados from "@/components/Servicos/ServicosPrestados";
import Transition from "@/components/Transition/Transition";
import { services } from "@/constants";

const page = () => {
  return (
    <section>
      <Transition>
        <Header />
        <ServicosHero />
        <ServicosPrestados services={services} />
        <Footer />
      </Transition>
    </section>
  );
};

export default page;
