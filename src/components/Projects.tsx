import { useInView } from "react-intersection-observer";
import { projectsEs, projectsEn } from "../data/data";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { flagProp, projectType } from "../types";
import { useEffect, useState } from "react";

export const Projects = ({ flagEs }: flagProp) => {
  const { ref: titleProjects, inView: inViewTitle } = useInView({
    triggerOnce: true,
  });
  const { ref: compProjects, inView: inViewProjects } = useInView({
    triggerOnce: true,
  });

  const [data, setData] = useState<projectType[]>();

  useEffect(() => {
    flagEs ? setData(projectsEs) : setData(projectsEn);
  }, [flagEs]);

  return (
    <section
      id="proyectos"
      className="pt-10 max-w-xl md:max-w-6xl mx-auto pb-10"
    >
      <hr
        hidden
        className="bg-emerald-700 text-emerald-100 shadow-emerald-400"
      />
      <hr hidden className="bg-violet-700 text-violet-100 shadow-violet-400" />
      <hr hidden className="bg-gray-700 text-gray-100 shadow-gray-400" />
      <hr hidden className="bg-sky-700 text-sky-100 shadow-sky-400" />
      <hr hidden className="bg-orange-700 text-orange-100 shadow-orange-400" />
      <div
        ref={titleProjects}
        className={`flex mb-8 justify-center gap-3 drop-shadow-[0_2.2px_2.2px_rgba(54,255,0,1)] opacity-0 ${
          inViewTitle &&
          " text-gray-100 text-4xl text-center opacity-100 md:animate-fade-down md:animate-delay-300"
        }`}
      >
        <h2>{flagEs ? "Proyectos" : "Projects"}</h2>
        <BriefcaseIcon className="inline-block h-10 w-10 text-gray-100" />
      </div>
      <section className="pb-10 bg-white rounded-xl bg-opacity-15 border-solid p-4 border-white border-2">
        <div
          ref={compProjects}
          className={`opacity-0 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-5 pt-12 space-y-10 md:space-y-0 md:gap-y-10 ${
            inViewProjects &&
            "opacity-100 md:animate-fade-down md:animate-delay-300"
          }`}
        >
          {data?.map((project) => {
            return (
              <div
                key={project.url}
                className="bg-black bg-opacity-50 rounded-xl hover:scale-101 transition ease-linear"
              >
                <a href={project.url} target="_blank">
                  <img
                    className="rounded-xl max-w-80 w-full mx-auto -mt-5 transition-transform duration-300"
                    src={`/img/${project.img}.webp`}
                    alt={project.nombre}
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                </a>
                <h3 className="capitalize text-center text-gray-100 font-semibold pt-4">
                  {project.nombre}
                </h3>
                <p className="p-3 font-normal text-gray-100">
                  {project.descripcion}
                </p>
                <div className="grid grid-cols-2 gap-4 p-3 pt-2">
                  {project.tecnologias.map((tecnologia) => {
                    return (
                      <span
                        key={tecnologia.nombre}
                        className={`capitalize font-semibold inline-flex items-center justify-items-center gap-1.5 py-1.5 px-3 rounded-full text-xs bg-${tecnologia.color}-700 text-${tecnologia.color}-100 shadow-md shadow-${tecnologia.color}-400`}
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
                <div className="grid md:grid-cols-2 gap-3 p-3">
                  <div>
                    <a
                      href={project.repositorio}
                      target="_blank"
                      className="text-left relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100 rounded-md group bg-gradient-to-br from-purple-600 to-blue-500 hover:to-orange-400 hover:text-gray-100 dark:text-gray-100"
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
                        className="text-left w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium text-gray-100 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 hover:to-teal-300 hover:text-gray-100"
                      >
                        <span className="font-bold w-full h-full px-5 py-2.5">
                          Demo
                        </span>
                      </a>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};
