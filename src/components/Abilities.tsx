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
    <>
      <section className="relative h-full w-full bg-blue-800">
        <div className="absolute inset-0 bg-sky-400 bg-[size:20px_20px] bg-opacity-15 mt-1"></div>
        <div>
          <div className="custom-shape-divider-top-1715363249">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          {/* Habilidades */}
          <div className="pb-12 -mt-10">
            <div
              id="habilidades"
              className="max-w-xl md:max-w-5xl mx-auto pt-10"
            >
              <div
                ref={titleAbilities}
                className={`flex justify-center gap-3 drop-shadow-[0_2.2px_2.2px_rgba(0,78,207,1)] opacity-0 ${
                  inViewTitle &&
                  " text-gray-100 text-4xl text-center opacity-100 md:animate-fade-down"
                }`}
              >
                <h2>{flagEs ? "Habilidades" : "Abilities"}</h2>
                <PuzzlePieceIcon className="inline-block h-10 w-10 text-gray-100" />
              </div>
              <div
                ref={contentA1}
                className={`md:opacity-0 grid md:grid-cols-2 p-8 items-center gap-8 ${
                  inViewContent1 &&
                  "opacity-100 md:animate-fade-right md:animate-delay-500"
                }`}
              >
                <div className="text-gray-200 text-4xl text-center">
                  <h2 className="bg-gradient-to-r font-normal  drop-shadow-[0_2.2px_2.2px_rgba(0,78,207,1)] text-center md:text-left">
                    {flagEs
                      ? "Valoro las habilidades técnicas tanto como las blandas"
                      : "I value soft skills as much as technical ones"}
                  </h2>
                </div>
                <div className="p-2">
                  {/* Blandas */}
                  <ul className="text-gray-100 grid lg:grid-cols-2 gap-4 font-semibold">
                    {data?.map((blanda) => {
                      return (
                        <li key={blanda.habilidad}>
                          <div className="mx-auto w-full items-center justify-center">
                            <div className="h-12 w-full rounded-md bg-transparent p-1">
                              <div className="flex h-full w-full items-center justify-center py-5 bg-sky-950 bg-opacity-25 rounded-lg hover:bg-sky-300 ease-linear hover:text-sky-950 transition-colors border-solid border-sky-300 border-2">
                                <p className="drop-shadow-[0_2.2px_2.2px_rgba(0,70,104,1)]">{blanda.habilidad}</p>
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
                className={`md:opacity-0 grid md:grid-cols-2 p-8 pb-0 items-center gap-8 ${
                  inViewContent2 &&
                  "opacity-100 md:animate-fade-left md:animate-delay-500"
                }`}
              >
                <div className="text-gray-100 text-4xl text-center md:order-2">
                <h2 className="bg-gradient-to-r font-normal  drop-shadow-[0_2.2px_2.2px_rgba(0,78,207,1)] text-center md:text-left">
                    {flagEs
                      ? "Tecnologías que he empleado en diversos proyectos"
                      : "Stack of technologies I've used over some projects"}
                  </h2>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 max-w-80 mx-auto sm:max-w-full justify-items-center items-center p-2 gap-5">
                  {duras.map((habilidad) => {
                    return (
                      <img
                        key={habilidad.tecnologia}
                        className="transition-all max-w-max-h-24 max-h-24 ease-linear bg-sky-950 p-3 bg-opacity-25 rounded-2xl hover:p-2 hover:animate-wiggle hover:animate-infinite border-solid border-sky-300 border-2"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
