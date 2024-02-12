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
import Image from "next/image";
import { Check, Pavimentação, Search } from "@/src/assets/svgs";

const ServicosPrestados = () => {
  return (
    <section className="w-full mx-auto mb-40 mt-10 font-proquality">
      <div className="max-w-screen-lg text-center mx-auto">
        <h2 className="sm:text-titles text-smtitles font-proquality font-bold text-problue">
          SERVIÇOS INTEGRADOS
        </h2>
        <div className="mt-10">
          <div className="flex items-center justify-start gap-4 flex-row p-4">
            <Image src={Check} width={30} height={30} alt="check" />
            <h3 className="sm:text-subtitles text-problue text-smsubtitles text-left">
              {servicosDeControleDeQualidade.title}
            </h3>
          </div>
          {Object.values(servicosDeControleDeQualidade.items).map(
            (item, index) => (
              <Accordion
                className="text-left"
                key={index}
                sx={{
                  boxShadow: "none",
                  border: "none",
                  "&:before": {
                    display: "none",
                  },
                }}
              >
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
        <div className="text-left mt-10">
          <div className="flex items-center justify-start gap-4 flex-row p-4">
            <Image src={Pavimentação} width={30} height={30} alt="check" />
            <h3 className="sm:text-subtitles text-problue text-smsubtitles text-left">
              {projetoDePavimentação.title}
            </h3>
          </div>

          <Accordion
            sx={{
              boxShadow: "none",
              border: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {projetoDePavimentação.title}
            </AccordionSummary>
            <AccordionDetails>
              <div className="px-2">
                {projetoDePavimentação.items.map((item, index) => (
                  <p className="mt-6" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="max-w-screen-lg text-center mx-auto">
        <div className="text-left mt-10">
          <div className="flex items-center justify-start gap-4 flex-row p-4">
            <Image src={Search} width={30} height={30} alt="check" />
            <h3 className="sm:text-subtitles text-problue text-smsubtitles text-left">
              {servicosDeVistoria.title}
            </h3>
          </div>
          {Object.values(servicosDeVistoria.types).map((item: any, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: "none",
                border: "none",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <p className="text-smsubtitles text-problack">{item.title}</p>
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
    </section>
  );
};

export default ServicosPrestados;
