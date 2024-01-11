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
            description={item.text.map((text, textIndex) => (
              <p
                className="mt-1 sm:text-proSubTitles text-proSmSubTitles"
                key={textIndex}
              >
                {text}
              </p>
            ))}
          />
        ))}
      </section>
    </section>
  );
};

export default Services;
