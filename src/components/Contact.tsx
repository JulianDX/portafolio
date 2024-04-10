import axios from "axios";
import request from "axios";
import { useEffect, useState } from "react";
import { FormEvent } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Alert } from "@mui/material";

export const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mounted, setMounted] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const [canSend, setCanSend] = useState(false);

  const [alertMessage, setAlertMessage] = useState({ msg: "", type: "" });

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

  useEffect(() => {
    if (alertMessage.msg !== "") {
      setTimeout(() => {
        setAlertMessage({ msg: "", type: "" });
      }, 5000);
    }
  }, [alertMessage.msg]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpinner(false);
    try {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setCanSend(false);
      const peticion = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        nombre,
        email,
        mensaje,
        asunto,
      });
      setAlertMessage({ msg: peticion.data, type: "success" });
      setSpinner(true);
    } catch (error) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      if (request.isAxiosError(error) && error.response) {
        setAlertMessage({ msg: "Hubo un error enviando el correo", type: "error" });
        setSpinner(true);
      }
    }
    setNombre("");
    setEmail("");
    setMensaje("");
    setAsunto("");
    setMounted(false);
  };

  return (
    <section
      id="contacto"
      className="max-w-xl md:max-w-2xl mx-auto p-10 bg-black bg-opacity-60 rounded-lg"
    >
      <h2 className="text-white text-4xl text-center">Contacto</h2>
      <p className="text-white text-center mt-2">
        Envíame un correo llenando el siguiente formulario si estás interesado
        en colaborar o si tienes alguna idea en mente.
      </p>
      <form className="py-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="md:grid md:grid-cols-2 md:gap-5">
          <div className="flex flex-col">
            <label className="text-white text-xl py-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className={`rounded p-2 bg-gray-800 bg-opacity-50 text-white border-gray-100 border-2 outline-none ${
                !nameAlert
                  ? "border-red-600 focus:border-red-600"
                  : "focus:border-sky-400"
              }`}
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              id="nombre"
              placeholder="Tu nombre"
              value={nombre}
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
              className={`rounded p-2 bg-gray-800 bg-opacity-50 text-white border-gray-100 border-2 outline-none ${
                !emailAlert
                  ? "border-red-600 focus:border-red-600"
                  : "focus:border-sky-400"
              }`}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="correo"
              placeholder="Tu email"
              value={email}
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
            className={`rounded p-2 bg-gray-800 bg-opacity-50 text-white border-gray-100 border-2 outline-none ${
              !subjectAlert
                ? "border-red-600 focus:border-red-600"
                : "focus:border-sky-400"
            }`}
            type="text"
            onChange={(e) => setAsunto(e.target.value)}
            id="asunto"
            placeholder="Motivo del email"
            value={asunto}
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
            className={`rounded p-2 bg-gray-800 bg-opacity-50 text-white border-gray-100 border-2 outline-none resize-none ${
              !messageAlert
                ? "border-red-600 focus:border-red-600"
                : "focus:border-sky-400"
            }`}
            id="mensaje"
            cols={30}
            rows={10}
            placeholder="Deja tu mensaje aquí..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <p className="text-red-500 mt-2 text-sm" hidden={messageAlert}>
            El mensaje es obligatorio y debe tener más de 6 caracteres*
          </p>
        </div>
        <div className="text-white font-semibold">
          {alertMessage.msg !== "" && (
            <div className="pt-6 font-extrabold animate-jump-in animate-once">
              <Alert
                severity={alertMessage.type === "error" ? "error" : "success"}
              >
                {alertMessage.msg}
              </Alert>
            </div>
          )}
          <div className="sk-folding-cube" hidden={spinner}>
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
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
