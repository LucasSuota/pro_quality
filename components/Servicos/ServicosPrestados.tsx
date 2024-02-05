import { weOfferServices } from "@/constants";

const ServicosPrestados = () => {
  return (
    <nav className="max-w-screen-lg mx-auto">
      {weOfferServices.map((services, index) => (
        <h1 key={index}>{services.title}</h1>
      ))}
    </nav>
  );
};

export default ServicosPrestados;
