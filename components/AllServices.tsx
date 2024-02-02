import Image from "next/image";
import { projetosRealizadosPreview } from "@/constants";
import VerMais from "./Buttons/DefualtButton";

const AllServices = () => {
  return (
    <>
      {projetosRealizadosPreview.map((item, index) => (
        <div
          className="mx-5 mb-10 flex sm:flex-row flex-col items-center gap-4"
          key={index}
        >
          <Image
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "400px",
            }}
            src={item.image}
            alt={item.title}
          />

          <div className="flex flex-col sm:items-start text-start">
            <h4 className="sm:text-proTitles sm:text-subtitles text-smsubtitles uppercase font-proquality font-bold">
              {item.title}
            </h4>
            <p className="sm:text-para text-smpara uppercase font-proquality">
              Realizado dia: {item.date}
            </p>
            <p className="sm:text-para text-smpara uppercase font-proquality">
              Cidade: {item.place}
            </p>
            {item.client && (
              <p className="sm:text-para text-smpara uppercase font-proquality">
                Cliente: {item.client}
              </p>
            )}
            <VerMais />
          </div>
        </div>
      ))}
    </>
  );
};

export default AllServices;
