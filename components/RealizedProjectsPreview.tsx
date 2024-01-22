import { projetosRealizadosPreview } from "@/constants";
import Image from "next/image";
import VerMais from "./Buttons/QueroOrcamento copy";

const RealizedProjectsPreview = () => {
  return (
    <section className="max-w-screen-lg mx-auto text-center">
      <h3 className="w-2/4 mx-auto font-proquality sm:text-titles text-smtitles font-bold mt-20 mb-20">
        PROJETOS REALIZADOS
      </h3>
      <div>
        {projetosRealizadosPreview.map((item, index) => (
          <div
            className="mx-10 mb-10 flex sm:flex-row flex-col items-center gap-2"
            key={index}
          >
            <Image src={item.image} width={300} height={250} alt={item.title} />
            <div className="flex flex-col sm:items-start text-start">
              <h4 className="sm:text-proTitles sm:text-subtitles text-smsubtitles uppercase font-proquality font-bold">
                {item.title}
              </h4>
              <p className="sm:text-para text-smpara uppercase font-proquality">
                {item.description}
              </p>
              <VerMais />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealizedProjectsPreview;