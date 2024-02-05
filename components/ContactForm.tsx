"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  telephone: string;
  message: string;
};

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { register, handleSubmit, formState } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    emailjs
      .send(
        "service_dm33xco",
        "template_meu0l8s",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          telephone: data.telephone,
        },
        "yUkSRiur1yql8qP68"
      )
      .then(() => {
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <div className="max-w-screen-lg px-5 mx-auto mt-10">
      {isOpen && (
        <div className="fixed top-0 left-0 z-40 mt-10 w-full">
          <div className="sm:w-1/4 w-3/4 mx-auto bg-problue text-white px-6 py-4 rounded shadow-lg">
            <div className="flex justify-end">
              <button
                className="text-white close-btn text-2xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>
            <p>Seu email foi enviado com sucesso!</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-problack text-smpara font-proquality"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Nome é necessário" })}
            className={`w-full p-2 border-2 ${
              formState.errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formState.errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-problack text-smpara font-proquality"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email é necessário",
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className={`w-full p-2 border-2 ${
              formState.errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="telephone"
            className="block text-problack text-smpara font-proquality"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="telephone"
            {...register("telephone", { required: "Telefone é necessário" })}
            className={`w-full p-2 border-2 ${
              formState.errors.telephone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formState.errors.telephone && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.telephone.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-problack text-smpara font-proquality"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Mensagem é necessária" })}
            className={`w-full p-2 border-2 ${
              formState.errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formState.errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isOpen}
          className="bg-problue sm:text-para text-smpara font-proquality text-white px-10 py-2 hover:bg-problack focus:outline-none focus:ring focus:border-blue-300 disabled:bg-problack transition-all"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
