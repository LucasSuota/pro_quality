"use client";

import React from "react";
import { Card, List, Typography } from "antd";

const { Title, Text } = Typography;

interface Service {
  title: string;
  description?: string;
  types?: {
    [key: string]: {
      title: string;
      description: string;
      uses?: { title: string; description: string }[];
      sum?: string;
    };
  };
  uses?: { title: string; description: string }[];
  sum?: string;
  items?: {
    [key: string]: {
      title: string;
      tests: string[];
    };
  };
}

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  const renderService = (service: Service, index: number) => {
    const { title, description, types, uses, sum } = service;

    return (
      <section className="sm:mt-10 mt-0">
        <h3 className="sm:text-titles text-smtitles bg-problue px-2 py-4 text-white text-center">
          Todos os serviços
        </h3>
        <div className="max-w-screen-lg mt-5">
          <Card key={index} title={title}>
            {description && <Text>{description}</Text>}
            {types &&
              Object.entries(types).map(([typeKey, typeValue], typeIndex) => (
                <Card key={typeKey} title={typeValue.title} className="mb-4">
                  <Text>{typeValue.description}</Text>
                  {typeValue.uses && (
                    <List
                      dataSource={typeValue.uses}
                      renderItem={(use, useIndex) => (
                        <List.Item key={useIndex}>
                          <Text strong>{use.title}</Text>
                          <Text>{use.description}</Text>
                        </List.Item>
                      )}
                    />
                  )}
                  {typeValue.sum && <Text>{typeValue.sum}</Text>}
                </Card>
              ))}
            {uses && (
              <List
                dataSource={uses}
                renderItem={(use, useIndex) => (
                  <List.Item key={useIndex}>
                    <Text strong>{use.title}</Text>
                    <Text>{use.description}</Text>
                  </List.Item>
                )}
              />
            )}
            {sum && <Text>{sum}</Text>}
          </Card>
        </div>
      </section>
    );
  };

  return (
    <div className="font-proquality max-w-screen-lg mx-auto">
      {services.map((service, index) => {
        if (service.items) {
          const { title, items } = service;
          return (
            <Card key={index} title={title}>
              {Object.entries(items).map(([itemKey, itemValue], itemIndex) => (
                <Card key={itemKey} title={itemValue.title}>
                  <List
                    dataSource={itemValue.tests}
                    renderItem={(test, testIndex) => (
                      <List.Item key={testIndex}>{test}</List.Item>
                    )}
                  />
                </Card>
              ))}
            </Card>
          );
        } else {
          return renderService(service, index);
        }
      })}
    </div>
  );
};

export default Services;
