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
        <div
          className="w-full sm:h-[200px] h-[100px] flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
            url('/assets/images/civilengineer.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <Footer />
      </Transition>
    </section>
  );
};

export default page;
