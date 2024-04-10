import Typewriter from "../hooks/TypeWriter";

const Main = () => {
  return (
    <>
      <main className="text-white max-w-7xl mx-auto md:p-20 md:grid md:grid-cols-3 mt-5 gap-0 lg:animate-fade-left lg:animate-once lg:animate-ease-in lg:animate-normal">
        <div className="md:col-span-2 md:flex items-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">
              Hola, soy{" "}
              <span className="bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
                Julián Roa Palacio
              </span>
            </h1>
            <div className="text-4xl md:text-5xl mt-5 font-semibold text-center md:text-left h-28 leading-snug md:mt-4 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
              <Typewriter
                words={["Ingeniero de Sistemas", "Desarrollador Web"]}
                delay={80}
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 mx-auto">
          <img
            className="max-w-52 md:max-w-80 h-auto mx-auto"
            src="img/memoicon.webp"
            alt="Imagen perfil"
            width={351}
            height={251}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
