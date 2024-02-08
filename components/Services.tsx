import { servicesList } from "@/constants";
import DefaultButton from "./Buttons/DefualtButton";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const Services = () => {
  return (
    <section className="sm:max-w-screen-xl mx-auto flex flex-col items-center justify-center mt-10">
      <h2 className="font-proquality font-bold sm:text-titles text-smtitles text-problue">
        SERVIÇOS
      </h2>
      <section className="flex md:flex-row mb-10 items-start sm:flex-col flex-col md:mx-4 px-2 gap-10 mt-12">
        {servicesList.map((service, index) => (
          <Accordion
            key={index}
            className="sm:w-2/3 w-full shadow-none border-0"
            defaultExpanded
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <div className="flex items-center gap-4">
                {service.image && (
                  <Image
                    src={service.image}
                    width={50}
                    height={50}
                    alt={service.title}
                  />
                )}
                <h2 className="sm:text-smpara text-smsubtitles font-proquality text-problue font-bold">
                  {service.title}
                </h2>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="font-proquality text-smpara">
                <p className="mt-4">{service.text1}</p>
                <p className="mt-4">{service.text2}</p>
                <p className="mt-4">{service.text3}</p>
                <p className="mt-4 text-problue font-bold">{service.text4}</p>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </section>
      <DefaultButton title="Todos os serviços" link="/servicos" />
    </section>
  );
};

export default Services;
