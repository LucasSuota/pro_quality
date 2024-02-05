import { projetosRealizadosPreview } from "@/constants";
import Image from "next/image";
import DefaultButton from "./Buttons/DefualtButton";

const RealizedProjectsPreview = () => {
  return (
    <section className="max-w-screen-lg mx-auto text-center">
      <h3 className="w-2/4 mx-auto font-proquality sm:text-titles text-smtitles font-bold mt-20 mb-20">
        SERVIÇOS REALIZADOS
      </h3>
      <div className="mx-5 mb-10 flex sm:flex-row flex-col items-center gap-4">
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "400px",
          }}
          src={projetosRealizadosPreview[0].image}
          alt={projetosRealizadosPreview[0].title}
        />

        <div className="flex flex-col sm:items-start text-start">
          <h4 className="sm:text-proTitles sm:text-subtitles text-smsubtitles uppercase font-proquality font-bold">
            {projetosRealizadosPreview[0].title}
          </h4>
          <p className="sm:text-para text-smpara uppercase font-proquality">
            Realizado dia: {projetosRealizadosPreview[0].date}
          </p>
          <p className="sm:text-para text-smpara uppercase font-proquality">
            Cidade: {projetosRealizadosPreview[0].place}
          </p>
          {projetosRealizadosPreview[0].client && (
            <p className="sm:text-para text-smpara uppercase font-proquality">
              Cliente: {projetosRealizadosPreview[0].client}
            </p>
          )}
          <DefaultButton title="Ver mais" link="/servicos" />
        </div>
      </div>
      <div className="mx-5 mb-10 flex sm:flex-row flex-col items-center gap-4">
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "400px",
          }}
          src={projetosRealizadosPreview[1].image}
          alt={projetosRealizadosPreview[1].title}
        />

        <div className="flex flex-col sm:items-start text-start">
          <h4 className="sm:text-proTitles sm:text-subtitles text-smsubtitles uppercase font-proquality font-bold">
            {projetosRealizadosPreview[1].title}
          </h4>
          <p className="sm:text-para text-smpara uppercase font-proquality">
            Realizado dia: {projetosRealizadosPreview[1].date}
          </p>
          <p className="sm:text-para text-smpara uppercase font-proquality">
            Cidade: {projetosRealizadosPreview[1].place}
          </p>
          {projetosRealizadosPreview[1].client && (
            <p className="sm:text-para text-smpara uppercase font-proquality">
              Cliente: {projetosRealizadosPreview[1].client}
            </p>
          )}
          <DefaultButton title="Ver mais" link="/servicos" />
        </div>
      </div>
    </section>
  );
};

export default RealizedProjectsPreview;
