import ServicesList from "./Texts/ServicesList";
import { servicesList } from "@/constants";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12">
      <h2 className="font-proquality font-bold text-proTitles">SERVIÇOS</h2>
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
    </section>
  );
};

export default Services;
