"use client";

import Link from "next/link";
import ServicesList from "./Texts/ServicesList";
import { servicesList } from "@/constants";

const Services = () => {
  return (
    <section className="sm:max-w-screen-xl mx-auto flex flex-col items-center justify-center mt-10">
      <h2 className="font-proquality font-bold sm:text-titles text-smtitles">
        SERVIÇOS
      </h2>
      <section className="flex sm:flex-row flex-col sm:mx-40 px-10 gap-10 mt-12">
        {servicesList.map((item, index) => (
          <ServicesList
            key={index}
            image={item.image}
            title={item.title}
            text1={item.text1}
            text2={item.text2}
            text3={item.text3}
            text4={item.text4}
          />
        ))}
      </section>
      <Link href={"/servicos"}>
        <button className="px-6 py-4 font-bold bg-problue text-white font-proquality text-smpara sm:text-para mt-20">
          VER TODOS OS SERVIÇOS
        </button>
      </Link>
    </section>
  );
};

export default Services;
