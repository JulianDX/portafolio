import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { projectType } from "../types";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

type CardProps = {
  project: projectType;
  flagEs: boolean;
  index: number;
};

const delay: { [key: number]: number } = {
  0: 200,
  1: 400,
  2: 600,
  3: 800,
  4: 1000,
};

export const Card = ({ project, flagEs, index }: CardProps) => {
  const [hiddenDescription, setHiddenDescription] = useState(true);

  const { ref: card, inView: inViewCard } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={card}
      key={project.nombre}
      className={`project-${delay[index]} md:opacity-0 ${
        inViewCard && "opacity-100 md:animate-fade-down"
      } z-20 max-w-sm mx-auto bg-blue-950 border hover:scale-101 transition-transform duration-500 border-blue-500 rounded-lg shadow dark:bg-blue-950 bg-opacity-90 dark:border-blue-500}
      `}
    >
      <a target="_blank" href={`${project.url}`}>
        <div className="overflow-hidden rounded-lg w-80 mx-auto -mt-6">
          <img
            className="rounded-lg hover:scale-105 transition-transform duration-500"
            src={`/img/${project.img}.webp`}
            alt={project.nombre}
            loading="lazy"
            width={320}
            height={320}
          />
        </div>
      </a>
      <div className="p-5">
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-gray-100 capitalize drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
          {project.nombre}
        </p>
        <p className="mb-3 text-blue-300 dark:text-blue-300 font-semibold">
          {hiddenDescription
            ? `${project.descripcion.slice(0, 55)}...`
            : project.descripcion}
        </p>
        <p
          onClick={() => setHiddenDescription(!hiddenDescription)}
          className="mb-3 text-gray-100 cursor-pointer inline-block font-semibold hover:text-gray-200"
        >
          {hiddenDescription
            ? flagEs
              ? "Ver más"
              : "View more"
            : flagEs
            ? "Ver menos"
            : "View less"}
        </p>
        <div className="grid grid-cols-2 gap-4 pt-2">
          {project.tecnologias.map((tecnologia) => {
            return (
              <span
                key={tecnologia.nombre}
                className={`capitalize border dark:border-blue-500 font-semibold w-full inline-flex items-center justify-items-center gap-1.5 py-1.5 px-3 rounded-full text-xs bg-slate-900 text-blue-100 shadow-md shadow-blue-700`}
              >
                <img
                  className="h-5 w-5"
                  loading="lazy"
                  src={`img/${tecnologia.nombre}.svg`}
                  alt={tecnologia.nombre}
                  width={300}
                  height={300}
                />
                {tecnologia.nombre}
              </span>
            );
          })}
        </div>
        <div className="grid md:grid-cols-2 gap-3 mt-6">
          <div>
            <a
              href={project.repositorio}
              target="_blank"
              className="text-left relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100 rounded-md group bg-gradient-to-br from-blue-800 to-blue-700 hover:to-blue-400 hover:text-gray-100 dark:text-gray-100"
            >
              <svg
                className="w-7 h-7 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 22"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-bold relative w-full px-3 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                {flagEs ? "Repositorio" : "Repository"}
              </span>
            </a>
          </div>
          {project.nombre !== "portafolio" &&
            project.nombre !== "portfolio" && (
              <a
                href={project.url}
                target="_blank"
                className="text-left transico w-full inline-flex items-center justify-left p-0.5 mb-2 me-2 text-sm font-medium text-gray-100 rounded-md bg-gradient-to-br from-cyan-600 to-teal-700 hover:to-teal-500 hover:text-gray-100"
              >
                <ArrowRightCircleIcon className="ml-2 w-8 h-8"></ArrowRightCircleIcon>
                <span className="font-bold w-full h-full px-2 py-2.5">
                  Demo
                </span>
              </a>
            )}
        </div>
      </div>
    </div>
  );
};
