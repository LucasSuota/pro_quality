"use client";

import Link from "next/link";
import ServicesList from "./Texts/ServicesList";
import { servicesList } from "@/constants";

const Services = () => {
  return (
    <section className="sm:max-w-screen-lg mx-auto flex flex-col items-center justify-center mt-10">
      <h2 className="font-proquality font-bold sm:text-titles text-smtitles">
        SERVIÇOS
      </h2>
      <section className="flex md:flex-row sm:flex-col flex-col md:mx-10 px-5 gap-10 mt-12">
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
        <button className="bg-problue hover:bg-problack px-6 py-3 text-white mt-20">
          VER TODOS OS SERVIÇOS
        </button>
      </Link>
    </section>
  );
};

export default Services;
