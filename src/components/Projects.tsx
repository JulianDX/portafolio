export const Projects = () => {
  return (
    <section className="px-2 max-w-xl md:max-w-6xl mx-auto pb-10">
      <section className="pb-10 bg-white rounded-xl bg-opacity-15 border-double p-4 border-white border-8">
        <h2 className="text-white text-4xl text-center my-5 pb-3">Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-5 py-6">
          {/* Card */}
          <div className="bg-black bg-opacity-40 rounded-xl hover:scale-101 transition ease-linear">
            <img
              className="rounded-xl max-w-80 w-full mx-auto -mt-5"
              src="/img/veterinaria.jpg"
              alt="proyecto veterinaria"
            />
            <h3 className="text-center text-white font-bold pt-4">
              Veterinaria
            </h3>
            <p className="p-3 font-normal text-white">
              Aplicación web para administrar pacientes de una veterinaria.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4 p-3 pt-2">
              <span className="bg-green-100 text-center text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Mongo
              </span>
              <span className="bg-gray-100 text-center text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Express
              </span>
              <span className="bg-blue-100 text-center text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-yellow-100 text-center text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                Node
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-3 p-3">
              <div>
                <a
                  href="https://github.com/stars/JulianDX/lists/veterinaria"
                  target="blank"
                  className="text-left relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-blue-600 hover:to-purple-500 hover:text-white dark:text-white"
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
              <a
                href="https://veterinaria-ashy.vercel.app/"
                target="blank"
                className="text-left relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 hover:text-white dark:text-white"
              >
                <span className="font-bold relative w-full h-full px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                  Demo
                </span>
              </a>
            </div>
          </div>
          {/* Fin Card */}
        </div>
      </section>
    </section>
  );
};
