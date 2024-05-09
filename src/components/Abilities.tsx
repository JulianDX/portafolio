import { useInView } from "react-intersection-observer";
import { blandasEs, blandasEn } from "../data/data";
import { duras } from "../data/data";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";
import { blandasType, flagProp } from "../types";
import { useEffect, useState } from "react";

export const Abilities = ({ flagEs }: flagProp) => {
  const { ref: titleAbilities, inView: inViewTitle } = useInView({
    triggerOnce: true,
  });
  const { ref: contentA1, inView: inViewContent1 } = useInView({
    triggerOnce: true,
  });
  const { ref: contentA2, inView: inViewContent2 } = useInView({
    triggerOnce: true,
  });

  const [data, setData] = useState<blandasType[]>();

  useEffect(() => {
    flagEs ? setData(blandasEs) : setData(blandasEn);
  }, [flagEs]);

  return (
    <section id="habilidades" className="max-w-xl md:max-w-5xl mx-auto pt-10">
      <div
        ref={titleAbilities}
        className={`flex justify-center gap-3 drop-shadow-[0_2.2px_2.2px_rgba(255,151,0,1)] opacity-0 ${
          inViewTitle &&
          " text-gray-100 text-4xl text-center opacity-100 md:animate-fade-down"
        }`}
      >
        <h2>{flagEs ? "Habilidades" : "Abilities"}</h2>
        <PuzzlePieceIcon className="inline-block h-10 w-10 text-gray-100" />
      </div>
      <div
        ref={contentA1}
        className={`opacity-0 grid md:grid-cols-2 p-8 items-center gap-8 ${
          inViewContent1 &&
          "opacity-100 md:animate-fade-right md:animate-delay-500"
        }`}
      >
        <div className="text-gray-100 text-4xl text-center">
          <h2 className="bg-gradient-to-r font-extrabold from-green-300 to-orange-400 text-transparent bg-clip-text text-center md:text-left">
            {flagEs
              ? "Valoro las habilidades técnicas tanto como las blandas"
              : "I value soft skills as much as technical ones"}
          </h2>
        </div>
        <div className="p-2">
          <ul className="text-gray-100 grid lg:grid-cols-2 gap-4 font-semibold">
            {data?.map((blanda) => {
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
        className={`opacity-0 grid md:grid-cols-2 p-8 pb-0 items-center gap-8 ${
          inViewContent2 &&
          "opacity-100 md:animate-fade-left md:animate-delay-500"
        }`}
      >
        <div className="text-gray-100 text-4xl text-center md:order-2">
          <h2 className="bg-gradient-to-r font-extrabold from-purple-300 to-pink-400 text-transparent bg-clip-text text-center md:text-left">
            {flagEs
              ? "Tecnologías que he empleado en diversos proyectos"
              : "Stack of technologies I've used over some projects"}
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
