import { useInView } from "react-intersection-observer";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { flagProp } from "../types";

export const Studies = ({ flagEs }: flagProp) => {
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
    <>
      <section className="studies">
        <div>
          <svg
            className="separator -mt-1"
            width="100%"
            height="50"
            viewBox="0.1 0.1 180 40"
            preserveAspectRatio="none"
          >
            <g transform="translate(-18.298844,-77.973964)">
              <path
                style={{ fill: "#4280cc" }}
                d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"
              />
              <path
                style={{ fill: "#60A5FA" }}
                d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z"
              />
            </g>
          </svg>
        </div>
        <div className="relative overflow-hidden">
          <div className="container">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <section
              id="estudios"
              className="-mt-5 pt-10 text-gray-100 pb-20 px-8"
            >
              <div
                ref={titleStudies}
                className={`flex justify-center gap-3 drop-shadow-[0_2.2px_2.2px_rgba(0,78,207,1)] opacity-0 ${
                  inViewTitle &&
                  " text-gray-100 text-4xl text-center opacity-100 md:animate-fade-down"
                }`}
              >
                <h2 className="text-gray-100">
                  {flagEs ? "Estudios" : "Studies"}
                </h2>
                <AcademicCapIcon className="inline-block h-10 w-10 text-gray-100" />
              </div>
              <div className="mt-2 pb-0 max-w-xl md:max-w-2xl mx-auto">
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
                    <div className="ml-8 -mt-6 md:-mt-0 md:ml-0 bg-slate-950 p-6 rounded-xl bg-opacity-80 border border-gray-700 border-solid">
                      <p className="text-3xl font-bold mb-2 drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
                        Universidad del Quindío
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        {flagEs ? "Carrera" : "Career"}:{" "}
                        <span className="text-gray-100">
                          {flagEs
                            ? "Ingeniería de Sistemas y Computación"
                            : "Systems Engineering and Computer Science"}
                        </span>
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        Duración:{" "}
                        <span className="text-gray-100">
                          {flagEs ? "10 Semestres" : "10 Semesters"}
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
                    <div className="ml-8 -mt-6 md:-mt-0 md:ml-0 bg-slate-950 p-6 rounded-xl bg-opacity-80 border border-gray-700 border-solid">
                      <p className="text-3xl font-bold mb-2 drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
                        {flagEs ? "Curso" : "Course"} Desarrollo Web Completo
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        Instructor:{" "}
                        <span className="text-gray-100">
                          Juan Pablo de la Torre
                        </span>
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        {flagEs ? "Plataforma" : "Platform"}:{" "}
                        <span className="text-gray-100">Udemy</span>
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        Duración:{" "}
                        <span className="text-gray-100">
                          {flagEs ? "83 Horas" : "83 Hours"}
                        </span>
                      </p>
                      <p className="text-lg">2023</p>
                      <p className="text-lg max-w-lg mt-3 drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        {flagEs ? "Descripción" : "Description"}: <br />
                        <span className="text-gray-100">
                          {flagEs
                            ? "Fundamentos del Desarrollo Web en tecnologías como"
                            : "Fundamentals of Web Development in technologies such as"}
                          : HTML, CSS, SASS, JavaScript, Fetch, PHP, POO, MVC,
                          SQL, MySQL y API's.
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
                    <div className="ml-8 -mt-6 md:-mt-0 md:ml-0 bg-slate-950 p-6 rounded-xl bg-opacity-80 border border-gray-700 border-solid">
                      <p className="text-3xl font-bold mb-2 bg-gradient-to-l drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
                        {flagEs ? "Curso" : "Course"} JavaScript Moderno
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        Instructor:{" "}
                        <span className="text-gray-100">
                          Juan Pablo de la Torre
                        </span>
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        {flagEs ? "Curso" : "Course"}:{" "}
                        <span className="text-gray-100">Udemy</span>
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        Duración:{" "}
                        <span className="text-gray-100">
                          {flagEs ? "53 Horas" : "53 Hours"}
                        </span>
                      </p>
                      <p className="text-lg">2024</p>
                      <p className="text-lg max-w-lg mt-3 drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        {flagEs ? "Descripción" : "Description"}: <br />
                        <span className="text-gray-100">
                          {flagEs
                            ? "Fundamentos de JavaScript y temas más avanzados como"
                            : "Fundamentals of JavaScript and more advanced topics such as"}{" "}
                          Prototypes, Delegation, Classes, Promises,{" "}
                          {flagEs ? "Generadores" : "Generators"},{" "}
                          {flagEs ? "POO" : "OOP"}, Fetch API, Async Await,
                          Async JS, {flagEs ? "Objetos" : "Objects"}, REST
                          API's, {flagEs ? "API's nativas" : "native API's"}.
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
                    <div className="ml-8 -mt-6 md:-mt-0 md:ml-0 bg-slate-950 p-6 rounded-xl bg-opacity-80 border border-gray-700 border-solid">
                      <p className="text-3xl font-bold mb-2 bg-gradient-to-l drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)]">
                        {flagEs ? "Curso" : "Course"} React y Typescript
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        Instructor:{" "}
                        <span className="text-gray-100">
                          Juan Pablo de la Torre
                        </span>
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        {flagEs ? "Curso" : "Course"}:{" "}
                        <span className="text-gray-100">Udemy</span>
                      </p>
                      <p className="text-lg drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        Duración:{" "}
                        <span className="text-gray-100">
                          {flagEs ? "57 Horas" : "57 Hours"}
                        </span>
                      </p>
                      <p className="text-lg">2024</p>
                      <p className="text-lg max-w-lg mt-3 drop-shadow-[0_2.2px_2.2px_rgba(1,58,172,1)] text-cyan-300">
                        {flagEs ? "Descripción" : "Description"}: <br />
                        <span className="text-gray-100">
                          {flagEs ? "Fundamentos de" : "Fundamentals of"}{" "}
                          TypeScript {flagEs ? "y" : "and"} React: State, Hooks,{" "}
                          {flagEs
                            ? "State Global con Context y Zustand"
                            : "Global State with Context and Zustand"}
                          ,{" "}
                          {flagEs
                            ? "componentes y eventos"
                            : "components and events"}
                          ,{" "}
                          {flagEs
                            ? "consultar API's externas y creación de API's propias"
                            : "fetching API's and creation of own API's"}
                          .
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
