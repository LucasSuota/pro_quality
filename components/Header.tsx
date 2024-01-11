import { LogoBlack } from "@/src/assets/images";
import Image from "next/image";
import { HeaderMenu } from ".";

const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto px-4 py-3 z-20 flex flex-row items-center justify-between">
      <Image src={LogoBlack} width={150} height={150} alt="Logo" />
      <HeaderMenu />
    </header>
  );
};

export default Header;
