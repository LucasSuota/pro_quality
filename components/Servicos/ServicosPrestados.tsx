import { weOfferServices } from "@/constants";

const ServicosPrestados = () => {
  return (
    <nav className="max-w-screen-lg mx-auto">
      {weOfferServices.map((servicos) => (
        <h1>{servicos.title}</h1>
      ))}
    </nav>
  );
};

export default ServicosPrestados;
