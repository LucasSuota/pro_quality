import Image from "next/image";
import { FullLogoWhite } from "@/public/assets/images";
import DefaultButton from "../Buttons/DefualtButton";
import Head from "next/head";

const Hero = () => {
  return (
    <section className="min-w-full z-0 mx-auto h-[680px] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
          url('/assets/images/herobg.png')`,
          backgroundPositionX: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="max-w-screen-xl sm:px-5 mx-auto flex flex-col items-center justify-center h-full relative z-10">
        <div className="flex flex-col items-start justify-end h-3/5 sm:px-0 px-4">
          <Image
            className="mb-4"
            src={FullLogoWhite}
            width={150}
            height={150}
            alt="ProQuality Engenharia Logo"
          />
          <Head>
            <title>
              Laboratório de Obras em Curitiba | Análise e Testes de Qualidade
            </title>
            <meta
              name="description"
              content="Descubra o laboratório de obras líder em Curitiba, especializado em análise e testes de qualidade para projetos de construção civil. Serviços de ensaios laboratoriais confiáveis, controle de qualidade e projetos de pavimentação para garantir a segurança e durabilidade de suas obras."
            />
            <meta
              name="keywords"
              content="laboratório de obras, análise de qualidade, testes de construção, Curitiba, ensaios laboratoriais, segurança na construção, durabilidade de obras, controle de qualidade, engenharia civil"
            />
            <meta name="author" content="ProQuality Engenharia" />
            <meta name="robots" content="index, follow" />
          </Head>
          <h1 className="sm:text-4xl text-3xl font-proquality text-white font-semibold">
            CONTROLE DE QUALIDADE, PROJETOS E VISTORIA
          </h1>
          <DefaultButton title="Quero Orçamento" link="/contato" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
