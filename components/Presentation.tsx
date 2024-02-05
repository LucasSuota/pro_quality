import Image from "next/image";
import { CivilEngineer, FullLogoBlack } from "@/public/assets/images";
import WhatsApp from "@mui/icons-material/WhatsApp";
import DefaultButton from "./Buttons/DefualtButton";
import Link from "next/link";

const Presentation = () => {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto flex sm:flex-row flex-col sm:gap-10 gap-2 items-center justify-between">
        <div className="relative sm:w-2/4 w-full sm:h-screen h-[400px]">
          <Image
            src={CivilEngineer}
            style={{ objectFit: "cover" }}
            fill
            alt="Logo"
          />
        </div>
        <div className="sm:w-2/4 w-full sm:px-0 px-10 h-screen flex flex-col gap-4 items-start justify-center font-proquality">
          <h3 className="sm:text-5xl text-smtitles mb-4 text-problue font-bold ">
            PROQUALITY ENGENHARIA
          </h3>
          <p className="text-smpara">
            A ProQuality Engenharia é uma empresa dedicada à excelência nos
            serviços de ensaios em obras de pavimentação e construção civil, bem
            como vistorias de entrega de obras.
          </p>
          <p className="text-smpara">
            Com uma equipe altamente capacitada e comprometida, nosso objetivo é
            assegurar a qualidade e conformidade em cada projeto que assumimos.
            Realizamos ensaios especializados para garantir a durabilidade e
            segurança das estruturas, além de oferecer vistorias abrangentes que
            antecipam potenciais problemas, proporcionando tranquilidade aos
            nossos clientes.
          </p>
          <p className="text-smpara">
            Na Proquality Engenharia, comprometimento, conhecimento técnico e
            eficiência são os pilares que fundamentam nossa atuação,
            tornando-nos a escolha confiável para suas necessidades de controle
            de qualidade em obras.
          </p>

          <Image src={FullLogoBlack} width={130} height={130} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
