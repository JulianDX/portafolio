import Typewriter from "../hooks/TypeWriter";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Main = () => {
  return (
    <>
      <main className="text-white max-w-7xl mx-auto md:p-10 md:grid md:grid-cols-3 mt-5 gap-0 md:animate-fade-left md:animate-once md:animate-ease-in md:animate-normal">
        <div className="md:col-span-2 md:flex items-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left drop-shadow-[0_2.2px_2.2px_rgba(0,78,207,1)]">
              Hola, soy{" "}
              <span className="bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text drop-shadow-none">
                Julián Roa Palacio
              </span>
            </h1>
            <div className="text-4xl drop-shadow-[0_3.2px_3.2px_rgba(0,78,207,1)] md:text-5xl mt-5 font-semibold text-center md:text-left h-28 lg:h-20 leading-snug md:mt-4 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
              <Typewriter
                words={["Ingeniero de Sistemas", "Desarrollador Web"]}
                delay={80}
              />
            </div>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mx-automt-5">
              <a
                href="files/CVJulianRoaPalacio.pdf"
                download="CVJulianRoaPalacio.pdf"
                className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <ArrowDownTrayIcon className="inline-block h-6 w-6 mr-2 group-hover:text-gray-900 z-20" />
                <span className="w-32 h-32 rotate-45 translate-x-60 -translate-y-2 absolute left-0 top-0 bg-white opacity-[10%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Descargar CV
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
              <a
                href="https://github.com/JulianDX"
                target="_blank"
                className="relative inline-flex items-center justify-start p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <svg
                  className="w-6 h-6 me-2 z-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Ver GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img
            className="max-w-52 md:max-w-full h-auto rounded-full box mt-7"
            src="img/j.webp"
            alt="Imagen perfil"
            width={351}
            height={251}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
