import { Footer, Header } from "@/components";
import DefaultButton from "@/components/Buttons/DefualtButton";
import ServicosHero from "@/components/Servicos/ServicosHero";
import ServicosPrestados from "@/components/Servicos/ServicosPrestados";
import { services } from "@/constants";

const page = () => {
  return (
    <section>
      <Header />
      <ServicosHero />
      <ServicosPrestados services={services} />

      <Footer />
    </section>
  );
};

export default page;
