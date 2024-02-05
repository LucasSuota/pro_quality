import Image from "next/image";
import { CivilEngineer, FullLogoBlack } from "@/public/assets/images";
import WhatsApp from "@mui/icons-material/WhatsApp";
import DefaultButton from "./Buttons/DefualtButton";
import Link from "next/link";

const Presentation = () => {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto flex gap-10 flex-row items-center justify-between">
        <div className="relative w-2/4 h-screen">
          <Image
            src={CivilEngineer}
            style={{ objectFit: "cover" }}
            fill
            alt="Logo"
          />
        </div>
        <div className="w-2/4 h-screen flex flex-col gap-4 items-start justify-center font-proquality">
          <h3 className="text-5xl mb-4 text-problue font-bold ">
            PROQUALITY ENGENHARIA
          </h3>
          <p>
            A ProQuality Engenharia é uma empresa dedicada à excelência nos
            serviços de ensaios em obras de pavimentação e construção civil, bem
            como vistorias de entrega de obras.
          </p>
          <p>
            Com uma equipe altamente capacitada e comprometida, nosso objetivo é
            assegurar a qualidade e conformidade em cada projeto que assumimos.
            Realizamos ensaios especializados para garantir a durabilidade e
            segurança das estruturas, além de oferecer vistorias abrangentes que
            antecipam potenciais problemas, proporcionando tranquilidade aos
            nossos clientes.
          </p>
          <p>
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
