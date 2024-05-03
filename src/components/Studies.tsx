import { useInView } from "react-intersection-observer";

export const Studies = () => {
  const { ref: titleStudies, inView: inViewTitle } = useInView({
    triggerOnce: true,
    initialInView: false,
  });
  const { ref: contentStudies, inView: inViewContentStudies } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="estudios"
      className="max-w-xl md:max-w-2xl mx-auto pt-10 text-white"
    >
      <h2
        ref={titleStudies}
        className={`${
          inViewTitle &&
          "lg:animate-fade-down text-white text-4xl text-center drop-shadow-[0_2.2px_2.2px_rgba(0,78,207,1)] "
        }`}
      >
        Estudios
      </h2>
      <div
        ref={contentStudies}
        className={`p-8 ${
          inViewContentStudies && "lg:animate-fade-right lg:animate-delay-500"
        }`}
      >
        <ul
          className={`opacity-0 ${
            inViewContentStudies && "border-l-4 border-l-white space-y-10 opacity-100"
          } `}
        >
          <li className="md:flex items-start gap-4 -ml-3">
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
          <li className="md:flex items-start gap-4 -ml-3">
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
          <li className="md:flex items-start gap-4 -ml-3">
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
          <li className="md:flex items-start gap-4 -ml-3">
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
