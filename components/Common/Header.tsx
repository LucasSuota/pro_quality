"use client";

import Image from "next/image";
import { HeaderMenu } from "..";
import Link from "next/link";
import { FullLogoBlack } from "@/public/assets/images";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <header className="w-full z-40 bg-white fixed">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-row items-center justify-between">
          <Head>
            <title>ProQuality Engenharia</title>
            <meta
              name="ProQuality Engenharia"
              content="Controle de Qualidade, Projetos e Vistoria"
            />
          </Head>
          <Link href={"/"}>
            <Image src={FullLogoBlack} width={120} height={120} alt="Logo" />
          </Link>
          <HeaderMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
