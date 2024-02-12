import { FullLogoWhite } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { footerItems } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full bg-problack">
      <div className="max-w-screen-lg px-4 py-6 mx-auto flex flex-row items-center justify-center sm:gap-40 gap-4">
        <Link href={"/"}>
          <Image
            src={FullLogoWhite}
            width={100}
            height={100}
            alt="ProQuality logo"
          />
        </Link>

        <nav className="flex sm:flex-row flex-col gap-4">
          {footerItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <p className="font-proquality text-smpara text-white hover:text-progray active:text-problue transition-all">
                {item.title}
              </p>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={"https://www.linkedin.com/in/maiconorlowski/"}>
            <LinkedInIcon className="w-[32px] h-[32px] text-white hover:text-progray" />
          </Link>
          <Link href={"https://wa.me/554184015100"}>
            <WhatsAppIcon className="w-[32px] h-[32px] text-white hover:text-progray" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
