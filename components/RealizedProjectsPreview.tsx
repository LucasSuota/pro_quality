import { realizedProjects } from "@/constants";
import Image from "next/image";
import DefaultButton from "./Buttons/DefualtButton";

const RealizedProjectsPreview = () => {
  const sortedProjects = realizedProjects.sort((a, b) => {
    const dateA = a.date.split("/").reverse().join("-");
    const dateB = b.date.split("/").reverse().join("-");
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  const newestProjects = sortedProjects.slice(0, 2);

  return (
    <section className="max-w-screen-lg mx-auto text-center mb-20">
      <h3 className="w-2/4 mx-auto font-proquality sm:text-titles text-smtitles font-bold mt-20 mb-20 text-problue">
        SERVIÇOS REALIZADOS
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-1 gap-4">
        {newestProjects.map((project, index) => (
          <div className="flex flex-col gap-2 px-4 mx-auto w-full" key={index}>
            <div className="w-full h-[360px] relative flex flex-col gap-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                objectFit="cover"
              />
            </div>
            <div className="w-full flex flex-col items-start mx-auto justify-center">
              <h3 className="font-proquality font-bold text-problue text-smsubtitles">
                {project.title}
              </h3>
              <p className="text-smpara font-proquality">
                Data: {project.date}
              </p>
              <DefaultButton title="VER MAIS" link="/servicos" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealizedProjectsPreview;
