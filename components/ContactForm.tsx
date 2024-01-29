"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  telephone: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-screen-lg px-5 mx-auto mt-10">
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
            className={`w-full p-2 border ${
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
            className={`w-full p-2 border ${
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
            className={`w-full p-2 border ${
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
            className={`w-full p-2 border ${
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
          className="bg-problue font-proquality text-white px-4 py-2 hover:bg-problack focus:outline-none focus:ring focus:border-blue-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
