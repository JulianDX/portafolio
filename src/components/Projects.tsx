import { projects } from "../data/data";

export const Projects = () => {
  return (
    <section
      id="proyectos"
      className="px-2 max-w-xl md:max-w-6xl mx-auto pb-10"
    >
      <hr
        hidden
        className="bg-emerald-700 text-emerald-100 shadow-emerald-400"
      />
      <hr hidden className="bg-violet-700 text-violet-100 shadow-violet-400" />
      <hr hidden className="bg-gray-700 text-gray-100 shadow-gray-400" />
      <hr hidden className="bg-sky-700 text-sky-100 shadow-sky-400" />
      <hr hidden className="bg-orange-700 text-orange-100 shadow-orange-400" />
      <h2 className="text-white text-4xl text-center my-5 pb-3">Proyectos</h2>
      <section className="pb-10 bg-white rounded-xl bg-opacity-15 border-solid p-4 border-white border-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-5 pt-12 space-y-10 md:space-y-0">
          {projects.map((project) => {
            return (
              <div
                key={project.url}
                className="bg-black bg-opacity-50 rounded-xl hover:scale-101 transition ease-linear"
              >
                <a href={project.url} target="_blank">
                  <img
                    className="rounded-xl max-w-80 w-full mx-auto -mt-5"
                    src={`/img/${project.nombre}.webp`}
                    alt={project.nombre}
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                </a>
                <h3 className="capitalize text-center text-white font-semibold pt-4">
                  {project.nombre}
                </h3>
                <p className="p-3 font-normal text-white">
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
                      className="text-left relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-purple-600 to-blue-500 hover:to-orange-400 hover:text-white dark:text-white"
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
                        Repositorio
                      </span>
                    </a>
                  </div>
                  {project.nombre !== "portafolio" && (
                    <a
                      href={project.url}
                      target="_blank"
                      className="text-left w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium text-white rounded-md bg-gradient-to-br from-purple-500 to-pink-500 hover:to-teal-300 hover:text-white"
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
