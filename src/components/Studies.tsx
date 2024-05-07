import { useInView } from "react-intersection-observer";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export const Studies = () => {
  const { ref: titleStudies, inView: inViewTitle } = useInView({
    triggerOnce: true,
    initialInView: false,
  });
  const { ref: studyOne, inView: inViewLineStudyOne } = useInView({
    triggerOnce: true,
  });
  const { ref: studyTwo, inView: inViewLineStudyTwo } = useInView({
    triggerOnce: true,
  });
  const { ref: studyThree, inView: inViewLineStudyThree } = useInView({
    triggerOnce: true,
  });
  const { ref: studyFour, inView: inViewLineStudyFour } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="estudios"
      className="max-w-xl md:max-w-2xl mx-auto pt-10 text-gray-100 mb-8 px-8"
    >
      <div
        ref={titleStudies}
        className={`flex justify-center gap-3 drop-shadow-[0_2.2px_2.2px_rgba(0,78,207,1)] opacity-0 ${
          inViewTitle &&
          " text-gray-100 text-4xl text-center opacity-100 md:animate-fade-down"
        }`}
      >
        <h2>Estudios </h2>
        <AcademicCapIcon className="inline-block h-10 w-10 text-gray-100" />
      </div>
      <div className="mt-2 pb-0">
        <ul>
          <li
            ref={studyOne}
            className={`relative opacity-100 md:opacity-0 py-6 md:flex items-start gap-4 -ml-3 ${
              inViewLineStudyOne &&
              "animate-none md:animate-fade-right md:animate-delay-500"
            }`}
          >
            <span className="border-l-4 ml-2 border-l-white absolute h-full" />
            <span className="block bg-white h-5 w-5 rounded-full"></span>
            <div className="ml-8 -mt-6 md:-mt-0 md:ml-0">
              <p className="text-3xl font-bold mb-2 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
                Universidad del Quindío
              </p>
              <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Carrera:{" "}
                <span className="text-gray-100">
                  Ingeniería de Sistemas y Computación
                </span>
              </p>
              <p className="text-lg">2018-2024</p>
            </div>
          </li>
          <li
            ref={studyTwo}
            className={`relative opacity-100 md:opacity-0 py-6 md:flex items-start gap-4 -ml-3 ${
              inViewLineStudyTwo &&
              "animate-none md:animate-fade-right md:animate-delay-700"
            }`}
          >
            <span className="border-l-4 ml-2 border-l-white absolute h-full" />
            <span className="block bg-white h-5 w-5 rounded-full"></span>
            <div className="ml-8 -mt-6 md:-mt-0 md:ml-0">
              <p className="text-3xl font-bold mb-2 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
                Curso Desarrollo Web Completo
              </p>
              <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Instructor:{" "}
                <span className="text-gray-100">Juan Pablo de la Torre</span>
              </p>
              <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Plataforma: <span className="text-gray-100">Udemy</span>
              </p>
              <p className="text-lg">2023</p>
              <p className="text-lg max-w-lg mt-3 drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Descripción: <br />
                <span className="text-gray-100">
                  Fundamentos del Desarrollo en tecnologías como: HTML, CSS,
                  SASS, JavaScript, Fetch, PHP, POO, MVC, SQL, MySQL y API's.
                </span>
              </p>
            </div>
          </li>
          <li
            ref={studyThree}
            className={`relative opacity-100 md:opacity-0 py-6 md:flex items-start gap-4 -ml-3 ${
              inViewLineStudyThree &&
              "animate-none md:animate-fade-right md:animate-delay-700"
            }`}
          >
            <span className="border-l-4 ml-2 border-l-white absolute h-full" />
            <span className="block bg-white h-5 w-5 rounded-full"></span>
            <div className="ml-8 -mt-6 md:-mt-0 md:ml-0">
              <p className="text-3xl font-bold mb-2 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
                Curso JavaScript Moderno
              </p>
              <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Instructor:{" "}
                <span className="text-gray-100">Juan Pablo de la Torre</span>
              </p>
              <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Plataforma: <span className="text-gray-100">Udemy</span>
              </p>
              <p className="text-lg">2024</p>
              <p className="text-lg max-w-lg mt-3 drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Descripción: <br />
                <span className="text-gray-100">
                  Fundamentos de JavaScript y temas avanzados como Prototypes,
                  Delegation, Classes, Promises, Generadores, POO, Fetch API,
                  Async Await, Async JS, Objetos, REST API's, API's nativas.
                </span>
              </p>
            </div>
          </li>
          <li
            ref={studyFour}
            className={`relative opacity-100 md:opacity-0 py-6 md:flex items-start gap-4 -ml-3 ${
              inViewLineStudyFour &&
              "animate-none md:animate-fade-right md:animate-delay-700"
            }`}
          >
            <span className="border-l-4 ml-2 border-l-white absolute h-full" />
            <span className="block bg-white h-5 w-5 rounded-full"></span>
            <div className="ml-8 -mt-6 md:-mt-0 md:ml-0">
              <p className="text-3xl font-bold mb-2 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
                Curso React y Typescript
              </p>
              <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Instructor:{" "}
                <span className="text-gray-100">Juan Pablo de la Torre</span>
              </p>
              <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Plataforma: <span className="text-gray-100">Udemy</span>
              </p>
              <p className="text-lg">2024</p>
              <p className="text-lg max-w-lg mt-3 drop-shadow-[0_2.2px_2.2px_rgba(2,162,0,1)] text-green-400">
                Descripción: <br />
                <span className="text-gray-100">
                  Fundamentos de TypeScript y React: State, Hooks, State global
                  con Context y Zustand, componentes y eventos, consultar API's
                  externas y creación de API's propias.
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
