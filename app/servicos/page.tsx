import { Footer, Header } from "@/components";
import ServicosHero from "@/components/Servicos/ServicosHero";
import { weOfferServices } from "@/constants";

const page = () => {
  return (
    <section>
      <Header />
      <ServicosHero />

      <nav className="max-w-screen-lg min-h-screen mx-auto sm:px-10 px-4 flex flex-col">
        <div className="mt-40 font-proquality">
          <h2 className="sm:text-titles text-smtitles font-bold">
            Serviços oferecidos
          </h2>
          {weOfferServices.map((item, index) => (
            <p key={index} className="sm:text-subtitles text-smsubtitles">
              {item.title}
            </p>
          ))}
          <h2 className="sm:text-titles text-smtitles font-bold">
            Serviços prestados
          </h2>
        </div>
      </nav>
      <Footer />
    </section>
  );
};

export default page;
