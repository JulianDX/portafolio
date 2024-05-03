import { useInView } from "react-intersection-observer";
import { blandas } from "../data/data";
import { duras } from "../data/data";

export const Abilities = () => {
  const { ref: titleAbilities, inView: inViewTitle } = useInView({
    triggerOnce: true,
  });
  const { ref: contentA1, inView: inViewContent1 } = useInView({
    triggerOnce: true,
  });
  const { ref: contentA2, inView: inViewContent2 } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="habilidades" className="max-w-xl md:max-w-5xl mx-auto pt-10">
      <h2
        ref={titleAbilities}
        className={` ${
          inViewTitle && "md:animate-fade-up text-white text-4xl text-center drop-shadow-[0_2.2px_2.2px_rgba(255,151,0,1)]"
        }`}
      >
        Habilidades
      </h2>
      <div
        ref={contentA1}
        className={`opacity-0 grid md:grid-cols-2 p-8 items-center gap-8 ${
          inViewContent1 && "opacity-100 md:animate-fade-right md:animate-delay-300"
        }`}
      >
        <div className="text-white text-4xl text-center">
          <h2 className="bg-gradient-to-r font-extrabold from-green-300 to-orange-400 text-transparent bg-clip-text text-center md:text-left">
            Valoro las habilidades blandas tanto como las técnicas
          </h2>
        </div>
        <div className="p-2">
          <ul className="text-white grid lg:grid-cols-2 gap-4 font-semibold">
            {blandas.map((blanda) => {
              return (
                <li key={blanda.habilidad} className="wrapper">
                  <div className="mx-auto w-full items-center justify-center">
                    <div className="h-12 w-full rounded-md bg-transparent p-1">
                      <div className="flex h-full w-full items-center justify-center bg-gray-800 hover:bg-transparent transition-colors duration-100 back">
                        {blanda.habilidad}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        ref={contentA2}
        className={`opacity-0 grid md:grid-cols-2 p-8 items-center gap-8 ${
          inViewContent2 && "opacity-100 md:animate-fade-left md:animate-delay-500"
        }`}
      >
        <div className="text-white text-4xl text-center md:order-2">
          <h2 className="bg-gradient-to-r font-extrabold from-purple-300 to-pink-400 text-transparent bg-clip-text text-center md:text-left">
            Tecnologías que he empleado en diversos proyectos
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center p-2 gap-5">
          {duras.map((habilidad) => {
            return (
              <img
                key={habilidad.tecnologia}
                className="transition-all ease-linear bg-gray-300 bg-opacity-25 p-3 md:bg-opacity-25 h-20 w-20 rounded-2xl hover:p-2 hover:animate-wiggle hover:animate-infinite"
                src={`img/${habilidad.tecnologia}.svg`}
                alt={habilidad.tecnologia}
                loading="lazy"
                width={80}
                height={80}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
