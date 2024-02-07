"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { servicosDeControleDeQualidade, servicosDeVistoria } from "@/constants";

const ServicosPrestados = () => {
  return (
    <section className="w-full mx-auto mb-40 mt-10 font-proquality">
      <div className="max-w-screen-lg text-center mx-auto">
        <h2 className="sm:text-titles text-smtitles font-proquality font-bold text-problue">
          Serviços Integrados
        </h2>
        <div className="text-left">
          <h3 className="sm:text-subtitles font-bold text-problack text-para px-4 mt-10 mb-4">
            {servicosDeControleDeQualidade.title}
          </h3>
          {Object.values(servicosDeControleDeQualidade.items).map(
            (item, index) => (
              <Accordion key={index} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <p className="text-smsubtitles">{item.title}</p>
                </AccordionSummary>
                {item.tests.map((test, index) => (
                  <AccordionDetails key={index}>
                    <p className="px-2 text-smpara">{test}</p>
                  </AccordionDetails>
                ))}
              </Accordion>
            )
          )}
        </div>
      </div>
      <div className="max-w-screen-lg text-center mx-auto">
        <div className="text-left">
          <h3 className="sm:text-subtitles font-bold text-problack text-para px-4 mt-10 mb-4">
            {servicosDeVistoria.title}
          </h3>
          {Object.values(servicosDeVistoria.types).map((item, index) => (
            <Accordion key={index} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <p className="text-smsubtitles">{item.title}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="px-2 text-smpara">{item.description}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosPrestados;
