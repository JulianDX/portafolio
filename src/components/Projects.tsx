import { useInView } from "react-intersection-observer";
import { projectsEs, projectsEn } from "../data/data";
import {
  ArrowRightCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
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
    <>
      <div className="wrapper overflow-hidden">
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        <div className="bubble">
          <span className="dot"></span>
        </div>
        {/* Contenido */}
        <section>
          <div className="relative custom-shape-divider-top-1715369110">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <section className="px-3 mx-auto">
            <div
              id="proyectos"
              className="pt-10 max-w-xl md:max-w-6xl mx-auto pb-6"
            >
              <div
                ref={titleProjects}
                className={`flex justify-center text-sky-300 bg-black rounded-full w-auto md:w-96 mx-auto bg-opacity-40 py-3 gap-3 drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] opacity-0 ${
                  inViewTitle &&
                  " text-gray-100 text-4xl text-center opacity-100 md:animate-fade-down md:animate-delay-300"
                }`}
              >
                <h2>{flagEs ? "Proyectos" : "Projects"}</h2>
                <BriefcaseIcon className="inline-block h-10 w-10 text-sky-300" />
              </div>
              <section className="pb-10">
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
                        key={project.nombre}
                        className="z-20 max-w-sm bg-sky-950 border hover:scale-101 transition-transform duration-500 border-sky-500 rounded-lg shadow dark:bg-sky-950 bg-opacity-90 dark:border-sky-500"
                      >
                        <a href="#">
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
                          <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-gray-100 capitalize drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
                              {project.nombre}
                            </h5>
                          </a>
                          <p className="mb-3 text-sky-300 dark:text-sky-300 font-semibold">
                            {project.descripcion}
                          </p>
                          <div className="grid grid-cols-2 gap-4 pt-2">
                            {project.tecnologias.map((tecnologia) => {
                              return (
                                <span
                                  key={tecnologia.nombre}
                                  className={`capitalize border dark:border-sky-500 font-semibold w-full inline-flex items-center justify-items-center gap-1.5 py-1.5 px-3 rounded-full text-xs bg-slate-900 text-sky-100 shadow-md shadow-sky-700`}
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
                                className="text-left relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100 rounded-md group bg-gradient-to-br from-sky-800 to-blue-700 hover:to-sky-400 hover:text-gray-100 dark:text-gray-100"
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
                  })}
                </div>
              </section>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
