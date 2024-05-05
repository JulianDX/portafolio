import { useInView } from "react-intersection-observer";

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
      <h2
        ref={titleStudies}
        className={`opacity-0 ${
          inViewTitle &&
          "md:animate-fade-down text-gray-100 text-4xl text-center drop-shadow-[0_2.2px_2.2px_rgba(0,78,207,1)] opacity-100"
        }`}
      >
        Estudios
      </h2>
      <div className="mt-2 pb-0">
        <ul>
          <li
            ref={studyOne}
            className={`relative opacity-100 md:opacity-0 py-6 md:flex items-start gap-4 -ml-3 ${
              inViewLineStudyOne && "animate-none md:animate-fade-right md:animate-delay-500"
            }`}
          >
            <span className="border-l-4 ml-2 border-l-white absolute h-full" />
            <span className="block bg-white h-5 w-5 rounded-full"></span>
            <div className="ml-8 -mt-6 md:-mt-0 md:ml-0">
              <p className="text-3xl font-bold mb-2 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
                Universidad del Quindío
              </p>
              <p className="text-lg">
                Carrera: Ingeniería de Sistemas y Computación
              </p>
              <p className="text-lg">2018-2024</p>
            </div>
          </li>
          <li
            ref={studyTwo}
            className={`relative opacity-100 md:opacity-0 py-6 md:flex items-start gap-4 -ml-3 ${
              inViewLineStudyTwo && "animate-none md:animate-fade-right md:animate-delay-700"
            }`}
          >
            <span className="border-l-4 ml-2 border-l-white absolute h-full" />
            <span className="block bg-white h-5 w-5 rounded-full"></span>
            <div className="ml-8 -mt-6 md:-mt-0 md:ml-0">
              <p className="text-3xl font-bold mb-2 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
                Curso Desarrollo Web Completo
              </p>
              <p className="text-lg">Instructor: Juan Pablo de la Torre</p>
              <p className="text-lg">Plataforma: Udemy</p>
              <p className="text-lg">2023</p>
            </div>
          </li>
          <li
            ref={studyThree}
            className={`relative opacity-100 md:opacity-0 py-6 md:flex items-start gap-4 -ml-3 ${
              inViewLineStudyThree && "animate-none md:animate-fade-right md:animate-delay-700"
            }`}
          >
            <span className="border-l-4 ml-2 border-l-white absolute h-full" />
            <span className="block bg-white h-5 w-5 rounded-full"></span>
            <div className="ml-8 -mt-6 md:-mt-0 md:ml-0">
              <p className="text-3xl font-bold mb-2 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
                Curso JavaScript Moderno
              </p>
              <p className="text-lg">Instructor: Juan Pablo de la Torre</p>
              <p className="text-lg">Plataforma: Udemy</p>
              <p className="text-lg">2024</p>
            </div>
          </li>
          <li
            ref={studyFour}
            className={`relative opacity-100 md:opacity-0 py-6 md:flex items-start gap-4 -ml-3 ${
              inViewLineStudyFour && "animate-none md:animate-fade-right md:animate-delay-700"
            }`}
          >
            <span className="border-l-4 ml-2 border-l-white absolute h-full" />
            <span className="block bg-white h-5 w-5 rounded-full"></span>
            <div className="ml-8 -mt-6 md:-mt-0 md:ml-0">
              <p className="text-3xl font-bold mb-2 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
                Curso React y Typescript
              </p>
              <p className="text-lg">Instructor: Juan Pablo de la Torre</p>
              <p className="text-lg">Plataforma: Udemy</p>
              <p className="text-lg">2024</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
