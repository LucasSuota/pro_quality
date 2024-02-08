import ServicesList from "./Texts/ServicesList";
import { projetoDePavimentação, servicesList } from "@/constants";
import DefaultButton from "./Buttons/DefualtButton";
import { Gear } from "@/src/assets/svgs";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Services = () => {
  return (
    <section className="sm:max-w-screen-xl mx-auto flex flex-col items-center justify-center mt-10">
      <h2 className="font-proquality font-bold sm:text-titles text-smtitles text-problue">
        SERVIÇOS
      </h2>
      <section className="flex md:flex-row mb-10 sm:flex-col flex-col md:mx-10 px-5 gap-10 mt-12">
        {/* {servicesList.map((item, index) => (
          <ServicesList
            key={index}
            image={item.image}
            title={item.title}
            text1={item.text1}
            text2={item.text2}
            text3={item.text3}
            text4={item.text4}
          />
        ))} */}

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {servicesList[0].title}
          </AccordionSummary>
          <AccordionDetails>
            <p>{servicesList[0].text1}</p>
            <p>{servicesList[0].text2}</p>
            <p>{servicesList[0].text3}</p>
            <p>{servicesList[0].text4}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {servicesList[1].title}
          </AccordionSummary>
          <AccordionDetails>
            <p>{servicesList[1].text1}</p>
            <p>{servicesList[1].text2}</p>
            <p>{servicesList[1].text3}</p>
            <p>{servicesList[1].text4}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {servicesList[2].title}
          </AccordionSummary>
          <AccordionDetails>
            <p>{servicesList[2].text1}</p>
          </AccordionDetails>
        </Accordion>
      </section>
      <DefaultButton title="Todos os serviços" link="/servicos" />
    </section>
  );
};

export default Services;
