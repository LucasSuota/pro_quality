import Image from "next/image";
import { FullLogoWhite } from "@/public/assets/images";
import { Instagram, WhatsappIcon } from "@/public/assets/svgs";

const Footer = () => {
  return (
    <footer className="mx-auto bg-problack">
      <div className="max-w-screen-lg mx-auto px-4 py-3 flex flex-col items-center">
        <Image src={FullLogoWhite} width={150} height={150} alt="Logo" />
        <div className="flex flex-row gap-10 mt-4">
          <Image src={Instagram} width={40} height={40} alt="Instagram" />
          <Image src={WhatsappIcon} width={40} height={40} alt="Whatsapp" />
        </div>
        <p className="text-white font-proquality text-proSmSubTitles text-center mt-4">
          © 2024. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
