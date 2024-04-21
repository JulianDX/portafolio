import { blandas } from "../data/data";
import { duras } from "../data/data";

export const Abilities = () => {
  return (
    <section id="habilidades" className="max-w-xl md:max-w-5xl mx-auto pt-10">
      <h2 className="text-white text-4xl text-center">Habilidades</h2>
      <div className="grid md:grid-cols-2 p-8 items-center gap-8">
        <div className="text-white text-4xl text-center">
          <h2 className="bg-gradient-to-r font-extrabold from-green-300 to-orange-400 text-transparent bg-clip-text text-center md:text-left">
            Valoro las habilidades blandas tanto como las técnicas
          </h2>
        </div>
        <div className="p-2">
          <ul className="text-white grid lg:grid-cols-2 gap-4 font-semibold">
            {blandas.map((blanda) => {
              return (
                <div key={blanda.habilidad} className="wrapper">
                  <div
                    className="mx-auto w-full items-center justify-center"
                  >
                    <div className="h-12 w-full rounded-md bg-transparent p-1">
                      <div className="flex h-full w-full items-center justify-center bg-gray-800 hover:bg-transparent transition-colors duration-100 back">
                        {blanda.habilidad}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 p-8 items-center gap-8">
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
