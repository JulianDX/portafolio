import { useInView } from "react-intersection-observer";
import { projectsEs, projectsEn } from "../data/data";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { flagProp, projectType } from "../types";
import { useEffect, useState } from "react";
import { Card } from "./Card";

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
                  className={`opacity-0 grid md:grid-cols-2 lg:grid-cols-3 items-start gap-5 pt-12 space-y-10 md:space-y-0 md:gap-y-10 ${
                    inViewProjects &&
                    "opacity-100 md:animate-fade-down md:animate-delay-300"
                  }`}
                >
                  {data?.map((project) => (
                    <Card key={project.nombre} project={project} flagEs={flagEs} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
