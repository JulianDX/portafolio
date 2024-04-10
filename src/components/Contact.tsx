import axios from "axios";
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
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.status);
        console.error(error.response?.data);
        // Do something with this error...
      } else {
        console.error(error);
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
          <p className="py-4">Otras formas de contacto:</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100008319888002"
              target="_blank"
              className="bg-blue-100 cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-indigo-200"
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 92 92"
                fill="none"
              >
                <rect
                  x="0.138672"
                  width="48"
                  height="48"
                  rx="15"
                  fill="#EDF4FF"
                />
                <path
                  d="M56.4927 48.6403L57.7973 40.3588H49.7611V34.9759C49.7611 32.7114 50.883 30.4987 54.4706 30.4987H58.1756V23.4465C56.018 23.1028 53.8378 22.9168 51.6527 22.8901C45.0385 22.8901 40.7204 26.8626 40.7204 34.0442V40.3588H33.3887V48.6403H40.7204V68.671H49.7611V48.6403H56.4927Z"
                  fill="#337FFF"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/573224250426"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-indigo-200"
            >
              <svg
                className="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-green-200"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 93 92"
                fill="none"
              >
                <rect
                  x="1.13867"
                  width="91.5618"
                  height="91.5618"
                  rx="15"
                  fill="#ECFFF5"
                />
                <path
                  d="M23.5762 66.8405L26.8608 54.6381C24.2118 49.8847 23.3702 44.3378 24.4904 39.0154C25.6106 33.693 28.6176 28.952 32.9594 25.6624C37.3012 22.3729 42.6867 20.7554 48.1276 21.1068C53.5685 21.4582 58.6999 23.755 62.5802 27.5756C66.4604 31.3962 68.8292 36.4844 69.2519 41.9065C69.6746 47.3286 68.1228 52.7208 64.8813 57.0938C61.6399 61.4668 56.9261 64.5271 51.605 65.7133C46.284 66.8994 40.7125 66.1318 35.9131 63.5513L23.5762 66.8405ZM36.508 58.985L37.2709 59.4365C40.7473 61.4918 44.8076 62.3423 48.8191 61.8555C52.8306 61.3687 56.5681 59.5719 59.4489 56.7452C62.3298 53.9185 64.1923 50.2206 64.7463 46.2279C65.3002 42.2351 64.5143 38.1717 62.5113 34.6709C60.5082 31.1701 57.4003 28.4285 53.6721 26.8734C49.9438 25.3184 45.8045 25.0372 41.8993 26.0736C37.994 27.11 34.5422 29.4059 32.0817 32.6035C29.6212 35.801 28.2903 39.7206 28.2963 43.7514C28.293 47.0937 29.2197 50.3712 30.9732 53.2192L31.4516 54.0061L29.6153 60.8167L36.508 58.985Z"
                  fill="#00D95F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M55.0259 46.8847C54.5787 46.5249 54.0549 46.2716 53.4947 46.1442C52.9344 46.0168 52.3524 46.0186 51.793 46.1495C50.9524 46.4977 50.4093 47.8134 49.8661 48.4713C49.7516 48.629 49.5833 48.7396 49.3928 48.7823C49.2024 48.8251 49.0028 48.797 48.8316 48.7034C45.7543 47.5012 43.1748 45.2965 41.5122 42.4475C41.3704 42.2697 41.3033 42.044 41.325 41.8178C41.3467 41.5916 41.4555 41.3827 41.6286 41.235C42.2344 40.6368 42.6791 39.8959 42.9218 39.0809C42.9756 38.1818 42.7691 37.2863 42.3269 36.5011C41.985 35.4002 41.3344 34.42 40.4518 33.6762C39.9966 33.472 39.4919 33.4036 38.9985 33.4791C38.5052 33.5546 38.0443 33.7709 37.6715 34.1019C37.0242 34.6589 36.5104 35.3537 36.168 36.135C35.8256 36.9163 35.6632 37.7643 35.6929 38.6165C35.6949 39.0951 35.7557 39.5716 35.8739 40.0354C36.1742 41.1497 36.636 42.2144 37.2447 43.1956C37.6839 43.9473 38.163 44.6749 38.6801 45.3755C40.3607 47.6767 42.4732 49.6305 44.9003 51.1284C46.1183 51.8897 47.42 52.5086 48.7799 52.973C50.1924 53.6117 51.752 53.8568 53.2931 53.6824C54.1711 53.5499 55.003 53.2041 55.7156 52.6755C56.4281 52.1469 56.9995 51.4518 57.3795 50.6512C57.6028 50.1675 57.6705 49.6269 57.5735 49.1033C57.3407 48.0327 55.9053 47.4007 55.0259 46.8847Z"
                  fill="#00D95F"
                />
              </svg>
            </a>
          </div>
        </div>
      </form>
    </section>
  );
};
