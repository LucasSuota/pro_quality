import { Footer, Header } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="min-w-full min-h-[300px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
        url('/assets/images/herobg.png')`,
          backgroundPosition: "center",
          backgroundSize: "fit",
        }}
      />
      <div className="max-w-screen-lg px-10 mt-4">
        <h1 className="font-proquality text-[32px] font-bold">Contato</h1>
        <p className="font-proquality text-[14px]">
          Entre em contato conosco para sanar dúvidas que você possa ter através
          do nosso email ou nossas redes sociais.
        </p>
      </div>
      <div className="mt-10 max-w-screen-lg px-10">
        <h2 className="font-proquality text-[22px] font-bold">Fale conosco</h2>
      </div>
      <div className="max-w-screen-lg px-10 mt-4">
        <input
          className="w-full bg-progray font-proquality text-black py-2 px-4 my-1"
          type="text"
          placeholder="Seu nome"
        />
        <input
          className="w-full bg-progray font-proquality text-black py-2 px-4 my-1"
          type="text"
          placeholder="Email"
        />
        <input
          className="w-full bg-progray font-proquality text-black py-2 px-4 my-1"
          type="text"
          placeholder="Telefone"
        />
        <input
          className="w-full bg-progray h-[200px] font-proquality text-black py-2 px-4 my-1"
          type="text"
          placeholder="Mensagem"
        />
        <button className="px-8 py-2 bg-problue active:bg-problack active:text-white text-white font-proquality text-[18px] mt-4">
          ENVIAR MENSAGEM
        </button>
      </div>
      <div className="max-w-screen-lg mx-10 mt-10">
        <p className="font-proquality ">
          Ou envie mensagem a nossos canais de contato:
        </p>
        <p className="font-proquality">Telefone: 41 91234-5678</p>
        <p className="font-proquality">Email: proquality@contato.com</p>
      </div>
      <Footer />
    </>
  );
}
