import QueroOrcamento from "./Buttons/QueroOrcamento";

const Hero = () => {
  return (
    <section
      className="min-w-full mx-auto h-[680px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
        url('/assets/images/herobg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-start justify-end h-3/5 sm:px-0 px-4">
          <h1 className="sm:text-5xl text-4xl font-proquality text-white font-semibold">
            CONTROLE DE QUALIDADE E VISTORIA EM OBRAS
          </h1>
          <QueroOrcamento />
        </div>
      </div>
    </section>
  );
};

export default Hero;
