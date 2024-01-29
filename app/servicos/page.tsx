"use client";

import { ActionButton, Header, AllServices, Footer } from "@/components";
import Transition from "@/components/Transition/Transition";
import { weOfferServices } from "@/constants";
import { useState } from "react";

interface UseCase {
  title: string;
  description: string;
}

interface ServiceTypeDetails {
  title: string;
  description: string;
  use?: UseCase[];
  goal?: string;
  sum?: string;
}

interface ServiceType {
  [key: string]: ServiceTypeDetails | string[];
}

interface Service {
  title: string;
  type: ServiceType;
}

interface ServiceDetailsProps {
  title: string;
  type: ServiceType;
}

interface ServicesListProps {
  services: Service[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ title, type }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-8">
      <h2
        className="text-2xl font-bold mb-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {title}
      </h2>
      {expanded && (
        <div className="text-gray-700">
          {Object.entries(type).map(([typeName, typeDetails]) => (
            <div key={typeName} className="mb-4">
              <h3 className="text-lg font-bold mb-2">
                {(typeDetails as ServiceTypeDetails).title}
              </h3>
              <p className="mb-2">
                {(typeDetails as ServiceTypeDetails).description}
              </p>
              {Array.isArray(typeDetails) ? (
                <ul className="list-disc pl-4">
                  {typeDetails.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <>
                  {(typeDetails as ServiceTypeDetails).use && (
                    <ul className="list-disc pl-4">
                      {(typeDetails as ServiceTypeDetails).use?.map(
                        (useCase, index) => (
                          <li key={index}>
                            <strong>{useCase.title}:</strong>{" "}
                            {useCase.description}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                  {(typeDetails as ServiceTypeDetails).goal && (
                    <p className="mb-2">
                      <strong>Goal:</strong>{" "}
                      {(typeDetails as ServiceTypeDetails).goal}
                    </p>
                  )}
                  {(typeDetails as ServiceTypeDetails).sum && (
                    <p>{(typeDetails as ServiceTypeDetails).sum}</p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  return (
    <div className="max-w-3xl mx-auto">
      {services.map((service, index) => (
        <ServiceDetails key={index} title={service.title} type={service.type} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Transition>
        <ActionButton />
        <Header />
        <main className="flex-grow bg-white">
          <div className="py-8">
            {/* <ServicesList services={weOfferServices} /> */}
          </div>
        </main>
        <Footer />
      </Transition>
    </>
  );
}
