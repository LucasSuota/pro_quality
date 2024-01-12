import Image from "next/image";
import { HeaderMenu } from ".";
import Link from "next/link";
import { FullLogoBlack } from "@/public/assets/images";

const Header = () => {
  return (
    <header className="fixed bg-white min-w-full z-20">
      <div className="max-w-screen-lg mx-auto px-4 py-3  flex flex-row items-center justify-between">
        <Link href={"/"}>
          <Image src={FullLogoBlack} width={150} height={150} alt="Logo" />
        </Link>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
