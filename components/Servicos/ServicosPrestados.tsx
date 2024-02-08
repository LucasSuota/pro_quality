"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  projetoDePavimentação,
  servicosDeControleDeQualidade,
  servicosDeVistoria,
} from "@/constants";

const ServicosPrestados = () => {
  return (
    <section className="w-full mx-auto mb-40 mt-10 font-proquality">
      <div className="max-w-screen-lg text-center mx-auto">
        <h2 className="sm:text-titles text-smtitles font-proquality font-bold text-problue">
          SERVIÇOS INTEGRADOS
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
          {Object.values(servicosDeVistoria.types).map((item: any, index) => (
            <Accordion key={index} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <p className="text-smsubtitles">{item.title}</p>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <p className="px-2 text-smpara">{item.description}</p>
                  {item.uses && (
                    <div className="px-2 mt-4">
                      {item.uses.map((use: any, index: number) => (
                        <p key={index}>
                          <strong>{use.title}</strong>: {use.description}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      <div className="max-w-screen-lg text-center mx-auto">
        <div className="text-left">
          <h3 className="sm:text-subtitles font-bold text-problack text-para px-4 mt-10 mb-4">
            {projetoDePavimentação.title}
          </h3>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {projetoDePavimentação.title}
            </AccordionSummary>
            <AccordionDetails>
              <div className="px-2">
                {/* <p>{projetoDePavimentação.description}</p> */}
                {projetoDePavimentação.items.map((item, index) => (
                  <p className="mt-2 font-bold" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicosPrestados;
