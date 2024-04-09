import axios from "axios";
import { useEffect, useState } from "react";
import { FormEvent } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mounted, setMounted] = useState(false);

  const [canSend, setCanSend] = useState(false);

  const [nameAlert, setNameAlert] = useState(true);
  const [emailAlert, setEmailAlert] = useState(true);
  const [subjectAlert, setSubjectAlert] = useState(true);
  const [messageAlert, setMessageAlert] = useState(true);

  useEffect(() => {
    if (mounted) {
      nombre === "" ? setNameAlert(false) : setNameAlert(true);
    } else {
      setMounted(true);
    }
  }, [nombre]);

  useEffect(() => {
    if (mounted) {
      email === "" ? setEmailAlert(false) : setEmailAlert(true);
    } else {
      setMounted(true);
    }
  }, [email]);

  useEffect(() => {
    if (mounted) {
      asunto === "" ? setSubjectAlert(false) : setSubjectAlert(true);
    } else {
      setMounted(true);
    }
  }, [asunto]);

  useEffect(() => {
    if (mounted) {
      mensaje === "" || mensaje.length <= 6
        ? setMessageAlert(false)
        : setMessageAlert(true);
    } else {
      setMounted(true);
    }
  }, [mensaje]);

  useEffect(() => {
    ![nombre, email, asunto, mensaje].includes("") && mensaje.length > 6
      ? setCanSend(true)
      : setCanSend(false);
  }, [nombre, email, asunto, mensaje]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/contact", {
      nombre,
      email,
      mensaje,
      asunto,
    });
  };

  return (
    <section className="max-w-xl md:max-w-2xl mx-auto pb-10 px-4">
      <h2 className="text-white text-4xl text-center">Contacto</h2>
      <p className="text-white text-center mt-2">Llena el formulario para ponernos en contacto</p>
      <form className="py-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="md:grid md:grid-cols-2 md:gap-5">
          <div className="flex flex-col">
            <label className="text-white text-xl py-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className={`rounded p-2 bg-gray-800 bg-opacity-50 text-white border-gray-100 border-2 focus:border-sky-400 outline-none ${
                !nameAlert && "border-red-600 focus:border-red-600"
              }`}
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              id="nombre"
              placeholder="Tu nombre"
            />
            <p className="text-red-500 mt-2 text-sm" hidden={nameAlert}>
              El nombre es obligatorio *
            </p>
          </div>
          <div className="flex flex-col mt-2 md:mt-0">
            <label className="text-white text-xl py-2" htmlFor="correo">
              Email
            </label>
            <input
              className={`rounded p-2 bg-gray-800 bg-opacity-50 text-white border-gray-100 border-2 focus:border-sky-400 outline-none ${
                !emailAlert && "border-red-600 focus:border-red-600"
              }`}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="correo"
              placeholder="Tu email"
            />
            <p className="text-red-500 mt-2 text-sm" hidden={emailAlert}>
              El email es obligatorio *
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-2 md:mt-0 py-2">
          <label className="text-white text-xl py-2" htmlFor="asunto">
            Asunto
          </label>
          <input
            className={`rounded p-2 bg-gray-800 bg-opacity-50 text-white border-gray-100 border-2 focus:border-sky-400 outline-none ${
              !subjectAlert && "border-red-600 focus:border-red-600"
            }`}
            type="text"
            onChange={(e) => setAsunto(e.target.value)}
            id="asunto"
            placeholder="Motivo del email"
          />
          <p className="text-red-500 mt-2 text-sm" hidden={subjectAlert}>
            El asunto es obligatorio *
          </p>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-white text-xl py-2" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            className={`rounded resize-none p-2 bg-gray-800 bg-opacity-50 text-white border-gray-100 border-2 focus:border-sky-400 outline-none ${
              !messageAlert && "border-red-600 focus:border-red-600"
            }`}
            id="mensaje"
            cols={30}
            rows={10}
            placeholder="Deja tu mensaje aquí..."
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <p className="text-red-500 mt-2 text-sm" hidden={messageAlert}>
            El mensaje es obligatorio y debe tener más de 6 caracteres*
          </p>
        </div>
        <div className="text-white font-semibold">
          <button
            className="text-left w-full md:w-auto relative rounded bg-gradient-to-br from-sky-600 to-red-500 hover:from-cyan-500 hover:to-yellow-600 hover:text-white dark:text-white px-10 mt-6 py-3 flex items-center justify-center disabled:opacity-20 disabled:cursor-default disabled:hover:from-sky-600 disabled:hover:to-red-500"
            type="submit"
            disabled={!canSend}
          >
            <span className="mr-2">Enviar Email</span>
            <EnvelopeIcon className="h-6 w-6" />
          </button>
        </div>
      </form>
    </section>
  );
};
