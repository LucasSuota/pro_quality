import { Instagram, Whatsapp } from "@/src/assets/svgs";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <form>
      <div className="max-w-screen-lg px-10 mt-4 mx-auto">
        <h1 className="font-proquality sm:text-titles text-smtitles font-bold">
          Contato
        </h1>
        <p className="font-proquality sm:text-para text-smpara">
          Entre em contato conosco para sanar dúvidas que você possa ter através
          do nosso email ou nossas redes sociais.
        </p>
      </div>
      <div className="mt-10 max-w-screen-lg px-10 mx-auto">
        <h2 className="font-proquality sm:text-subtitles text-smsubtitles font-bold">
          Fale conosco
        </h2>
      </div>
      <div className="max-w-screen-lg flex flex-col sm:flex-row justify-between mx-auto">
        <div className="w-full sm:w-3/5 max-w-screen-lg px-10 mt-4 mx-auto flex flex-col">
          <input
            className="bg-progray font-proquality text-black py-2 px-4 my-1"
            type="text"
            placeholder="Seu nome"
          />
          <input
            className="bg-progray font-proquality text-black py-2 px-4 my-1"
            type="text"
            placeholder="Email"
          />
          <input
            className="bg-progray font-proquality text-black py-2 px-4 my-1"
            type="text"
            placeholder="Telefone"
          />
          <input
            className="bg-progray h-[200px] font-proquality text-black py-2 px-4 my-1"
            type="text"
            placeholder="Mensagem"
          />
          <button className="hover:bg-problack hover:text-white px-8 py-2 bg-problue active:bg-problack active:text-white text-white font-proquality text-[18px] mt-4">
            ENVIAR MENSAGEM
          </button>
        </div>
        <div className="w-full sm:w-2/5 max-w-screen-lg px-10 sm:mt-4 mt-10 mx-auto">
          <div>
            <p className="font-proquality">
              Email:{" "}
              <span className="font-bold text-SmProSubTitles text-problue">
                contato@proquality.com
              </span>
            </p>
            <p className="font-proquality">
              Telefone:{" "}
              <span className="font-bold text-SmProSubTitles text-problue">
                (41) 91234-5678
              </span>
            </p>
          </div>
          <div className="mt-10">
            <p className="font-proquality">Nos siga nas redes sociais</p>
            <div className="flex flex-row gap-10 items-start mt-4">
              <Link href={"https://www.instagram.com/mf_orlowski"}>
                <Image src={Instagram} width={48} height={48} alt="Instagram" />
              </Link>
              <Link href={"https://wa.me/554184015100"}>
                <Image src={Whatsapp} width={48} height={48} alt="Whatsapp" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-10 mt-10 mb-10">
        <p className="font-proquality text-problue text-proSmSubTitles sm:text-2xl font-bold">
          PROQUALITY ENGENHARIA
        </p>
        <p className="font-proquality">
          Rua José Mosson, 2486. Curitiba, Paraná, Brasil
        </p>
      </div>
    </form>
  );
};

export default Contact;
