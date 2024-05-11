import axios from "axios";
import { useEffect, useState } from "react";
import { FormEvent } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Alert } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { flagProp } from "../types";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const Contact = ({ flagEs }: flagProp) => {
  const { ref: titleContact, inView: inViewTitle } = useInView({
    triggerOnce: true,
  });
  const { ref: contentContact, inView: inViewContent } = useInView({
    triggerOnce: true,
  });

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
      nombre.trim() === "" ? setNameAlert(false) : setNameAlert(true);
    } else {
      setMounted(true);
    }
  }, [nombre]);

  useEffect(() => {
    if (mounted) {
      email.trim() === ""
        ? setEmailAlert(false)
        : !emailRegex.test(email)
        ? setEmailAlert(false)
        : setEmailAlert(true);
    } else {
      setMounted(true);
    }
  }, [email]);

  useEffect(() => {
    if (mounted) {
      asunto.trim() === "" ? setSubjectAlert(false) : setSubjectAlert(true);
    } else {
      setMounted(true);
    }
  }, [asunto]);

  useEffect(() => {
    if (mounted) {
      mensaje.trim() === "" || mensaje.trim().length <= 30
        ? setMessageAlert(false)
        : setMessageAlert(true);
    } else {
      setMounted(true);
    }
  }, [mensaje]);

  useEffect(() => {
    ![nombre, email, asunto, mensaje].includes("") &&
    mensaje.trim().length > 30 &&
    emailRegex.test(email)
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
    if (!canSend) {
      setAlertMessage({
        msg: flagEs ? "Formato no válido" : "Not valid format",
        type: "error",
      });
    } else {
      setSpinner(false);
      setCanSend(false);
      try {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
        setCanSend(false);
        const peticion = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/contact`,
          {
            nombre,
            email,
            mensaje,
            asunto,
          }
        );
        setAlertMessage({ msg: peticion.data, type: "success" });
        setSpinner(true);
        setNombre("");
        setEmail("");
        setMensaje("");
        setAsunto("");
        setMounted(false);
      } catch (error) {
        setCanSend(true);
        if (axios.isAxiosError(error)) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
          setAlertMessage({
            msg: error.response?.data.msg,
            type: "error",
          });
          setSpinner(true);
        } else {
          console.error(error);
        }
      }
    }
  };

  return (
    <>
      <section className="bg-blue-900 -mt-1">
        <div className="custom-shape-divider-top-1715395463">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="py-10">
          <section
            id="contacto"
            className="max-w-xl md:max-w-2xl mx-auto p-10 bg-black bg-opacity-60 rounded-lg"
          >
            <div
              ref={titleContact}
              className={`flex mb-8 justify-center gap-3 drop-shadow-[0_2.2px_2.2px_rgba(189,0,255,1)] opacity-0 ${
                inViewTitle &&
                " text-gray-100 text-4xl text-center opacity-100 md:animate-fade-down md:animate-delay-300"
              }`}
            >
              <h2>{flagEs ? "Contacto" : "Contact"}</h2>
              <EnvelopeIcon className="inline-block h-10 w-10 text-gray-100" />
            </div>
            <div
              ref={contentContact}
              className={`opacity-0 ${
                inViewContent &&
                "opacity-100 md:animate-fade md:animate-delay-500"
              }`}
            >
              <p className="text-gray-100 text-center mt-4 mb-5">
                {flagEs
                  ? `Envíame un correo llenando el siguiente formulario si estás interesado
          en colaborar o si tienes alguna idea en mente`
                  : `Fill the following form if you are interested in collaborating with me or if you have any ideas on mind`}
                .
              </p>
              <form className="py-4" onSubmit={(e) => handleSubmit(e)}>
                <div className="md:grid md:grid-cols-2 md:gap-5">
                  <div className="flex flex-col">
                    <label
                      className="text-gray-100 text-xl py-2"
                      htmlFor="nombre"
                    >
                      {flagEs ? "Nombre" : "Name"}
                    </label>
                    <input
                      className={`rounded p-2 bg-gray-800 bg-opacity-50 text-gray-100 border-gray-100 border-2 outline-none ${
                        !nameAlert
                          ? "border-red-600 focus:border-red-600"
                          : "focus:border-sky-400"
                      }`}
                      type="text"
                      onChange={(e) => setNombre(e.target.value)}
                      id="nombre"
                      placeholder={`${flagEs ? "Tu Nombre" : "Your Name"}`}
                      value={nombre}
                    />
                    <p className="text-red-500 mt-2 text-sm" hidden={nameAlert}>
                      {flagEs ? "El nombre es obligatorio" : "Name's missing"} *
                    </p>
                  </div>
                  <div className="flex flex-col mt-2 md:mt-0">
                    <label
                      className="text-gray-100 text-xl py-2"
                      htmlFor="correo"
                    >
                      Email
                    </label>
                    <input
                      className={`rounded p-2 bg-gray-800 bg-opacity-50 text-gray-100 border-gray-100 border-2 outline-none ${
                        !emailAlert
                          ? "border-red-600 focus:border-red-600"
                          : "focus:border-sky-400"
                      }`}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      id="correo"
                      placeholder={`${flagEs ? "Tu Email" : "Your Email"}`}
                      value={email}
                    />
                    <p
                      className="text-red-500 mt-2 text-sm"
                      hidden={emailAlert}
                    >
                      {flagEs
                        ? "Dirección no válida"
                        : "Please enter a valid email"}{" "}
                      *
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mt-2 md:mt-0 py-2">
                  <label
                    className="text-gray-100 text-xl py-2"
                    htmlFor="asunto"
                  >
                    {flagEs ? "Asunto" : "Subject"}
                  </label>
                  <input
                    className={`rounded p-2 bg-gray-800 bg-opacity-50 text-gray-100 border-gray-100 border-2 outline-none ${
                      !subjectAlert
                        ? "border-red-600 focus:border-red-600"
                        : "focus:border-sky-400"
                    }`}
                    type="text"
                    onChange={(e) => setAsunto(e.target.value)}
                    id="asunto"
                    placeholder={`${
                      flagEs ? "Motivo del email" : "Subject of the email"
                    }`}
                    value={asunto}
                  />
                  <p
                    className="text-red-500 mt-2 text-sm"
                    hidden={subjectAlert}
                  >
                    {flagEs ? "El asunto es obligatorio" : "Subject's missing"}{" "}
                    *
                  </p>
                </div>
                <div className="flex flex-col mt-2">
                  <label
                    className="text-gray-100 text-xl py-2"
                    htmlFor="mensaje"
                  >
                    {flagEs ? "Mensaje" : "Message"}
                  </label>
                  <textarea
                    className={`rounded p-2 bg-gray-800 bg-opacity-50 text-gray-100 border-gray-100 border-2 outline-none resize-none ${
                      !messageAlert
                        ? "border-red-600 focus:border-red-600"
                        : "focus:border-sky-400"
                    }`}
                    id="mensaje"
                    cols={30}
                    rows={10}
                    placeholder={`${
                      flagEs
                        ? "Deja tu mensaje aquí..."
                        : "Type your message here...."
                    }`}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                  ></textarea>
                  <p
                    className="text-red-500 mt-2 text-sm"
                    hidden={messageAlert}
                  >
                    {mensaje.trimStart().length} / {31}
                  </p>
                </div>
                <div className="text-gray-100 font-semibold">
                  {alertMessage.msg !== "" && (
                    <div className="pt-6 font-extrabold animate-jump-in animate-once">
                      <Alert
                        severity={
                          alertMessage.type === "error" ? "error" : "success"
                        }
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
                    className="text-left w-full md:w-auto relative rounded bg-gradient-to-br from-sky-600 to-blue-900 hover:from-cyan-500 hover:to-cyan-800 hover:text-gray-100 dark:text-gray-100 px-10 mt-6 py-3 flex items-center justify-center disabled:opacity-40 disabled:hover:cursor-not-allowed disabled:cursor-default disabled:hover:from-sky-600 disabled:hover:to-cyan-700"
                    type="submit"
                    disabled={!canSend}
                  >
                    <span className="mr-2">
                      {flagEs ? "Enviar" : "Send"} Email
                    </span>
                    <EnvelopeIcon className="h-6 w-6" />
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
