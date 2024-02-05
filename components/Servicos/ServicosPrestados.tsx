import { weOfferServices } from "@/constants";

const ServicosPrestados = () => {
  return (
    <nav className="w-full mx-auto bg-problue">
      {weOfferServices.map((services, index) => (
        <div key={index} className="text-white font-proquality">
          <h1 key={index}>{services.title}</h1>
          <h2>{services.type?.inspeçãoPredial.title}</h2>
          <h3>{services.type?.inspeçãoPredial.description}</h3>

          <h2>{services.type?.parecerTecnicoJudicial.title}</h2>
          <h3>{services.type?.parecerTecnicoJudicial.description}</h3>
          <h3>{services.type?.parecerTecnicoJudicial.goal}</h3>
          <h2>{services.type?.recebimentoDeObras.title}</h2>
          <h3>{services.type?.recebimentoDeObras.description}</h3>
        </div>
      ))}
    </nav>
  );
};

export default ServicosPrestados;
