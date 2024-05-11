import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { flagProp } from "../types";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const About = ({ flagEs }: flagProp) => {
  return (
    <>
    
      <div className="relative h-full w-full bg-neutral-900">
        <div className="absolute inset-0 bg-sky-500 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <section
        id="sobremi"
        className="px-2 md:animate-fade-up md:animate-once md:animate-ease-in md:animate-normal pt-10 md:pt-16 p-10"
      >
        <div className="rounded-lg bg-black bg-opacity-40 max-w-4xl mx-auto p-6 md:p-8 text-gray-100 gap-5 md:shadow-[5px_5px_0px_0px_rgba(96,165,250)] border-2 border-blue-400">
          <div className="opacity-100">
            <div className="flex items-center gap-3 justify-center md:justify-start">
            <h2 className="items-center text-3xl font-extrabold drop-shadow-[0_3.2px_3.2px_rgba(0,78,207,1)]">
              {flagEs ? "Sobre Mí" : "About Me"}
            </h2>
            <FingerPrintIcon className="inline-block h-10 w-10 text-gray-100 drop-shadow-[0_3.2px_3.2px_rgba(0,78,207,1)]" />
            </div>
            <br />
          </div>
          <div className="col-span-2 text-xl font-semibold">
            <p>
              <span className="bg-gradient-to-l from-cyan-200 to-blue-400 text-transparent bg-clip-text">
                {flagEs ? "Nombre Completo" : "Full Name"}:
              </span>{" "}
              Julián Fernando Roa Palacio
            </p>
            <p className="mt-2">
              <span className="bg-gradient-to-l from-cyan-200 to-blue-400 text-transparent bg-clip-text">
                {flagEs ? "País" : "Country"}
              </span>{" "}
              Colombia <span className="rounded fi fi-co"></span>
            </p>
            <br />
            <p className="md:text-justify">
              {flagEs
                ? "Estudiante de décimo semestre de"
                : "Tenth semester student of"}{" "}
              <span className=" text-cyan-300 bg-clip-text">
                {flagEs
                  ? "Ingeniería de Sistemas y Computación"
                  : "Systems Engineering and Computer Science"}
              </span>{" "}
              {flagEs
                ? "con un gran interés en el"
                : "with a great interest in"}{" "}
              <span className=" text-sky-400 bg-clip-text">
                {flagEs ? "Desarrollo Web" : "Web Development"}
              </span>
              .{" "}
              {flagEs
                ? `Apasionado por el aprendizaje y el crecimiento en el campo de la
            tecnología. Activamente en busca de oportunidades para aplicar y
            expandir mis conocimientos. Soy una persona trabajadora,
            comunicativa y comprometida, deseando encontrar una oportunidad para
            adquirir experiencia profesional.`
                : `Passionate about learning and growing in the field of technology. 
              Actively seeking opportunities to apply and expand my knowledge. I am 
              a hardworking, communicative, and committed person, eager to find an 
              opportunity to gain professional experience.`}
            </p>
          </div>
        </div>
      </section>
      </div>
    
    </>
  );
};
