import Typewriter from "../hooks/TypeWriter";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Main = () => {
  return (
    <>
      <main className="text-white max-w-7xl mx-auto md:p-10 md:grid md:grid-cols-3 mt-5 gap-0 lg:animate-fade-left lg:animate-once lg:animate-ease-in lg:animate-normal">
        <div className="md:col-span-2 md:flex items-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">
              Hola, soy{" "}
              <span className="bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
                Julián Roa Palacio
              </span>
            </h1>
            <div className="text-4xl md:text-5xl mt-5 font-semibold text-center md:text-left h-28 lg:h-20 leading-snug md:mt-4 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
              <Typewriter
                words={["Ingeniero de Sistemas", "Desarrollador Web"]}
                delay={80}
              />
            </div>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mx-auto mb-4">
              <a
                href="files/CV.pdf"
                download="CV_Julian_Roa.pdf"
                className="text-[#404954] h-full bg-gray-100 hover:text-white hover:bg-[#404954] font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 transition-colors ease-in-out duration-300"
              >
                <ArrowDownTrayIcon className="inline-block h-6 w-6 mr-2" />
                Descargar CV
              </a>
              <a
                href="https://github.com/JulianDX"
                target="_blank"
                type="button"
                className="text-gray-100 h-full bg-[#404954] hover:text-[#404954] hover:bg-gray-100 font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 transition-colors ease-in-out duration-300"
              >
                <svg
                  className="w-6 h-6 me-2"
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
                Ver Github
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 mx-auto">
          <img
            className="max-w-52 md:max-w-full h-auto mx-auto"
            src="img/memoicon.webp"
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
