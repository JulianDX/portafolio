import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <>
      <div className="text-white max-w-7xl mx-auto md:p-20 md:grid grid-cols-2 md:grid-cols-3 flex flex-col gap-0 pt-10 pb-10 animate-fade-left animate-once animate-ease-in animate-normal">
        <div className="md:col-span-2 md:flex items-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">
              Hola, soy{" "}
              <span className="bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
                Julián Roa Palacio
              </span>
            </h1>
            <div className="text-4xl md:text-5xl mt-5 font-semibold text-center md:text-left h-32 leading-snug md:mt-4">
              <Typewriter
                options={{
                  strings: ["Ingeniero de Sistemas", "Desarrollador Web"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 mx-auto">
          <img
            src="img/memoicon.png"
            alt="Imagen perfil"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
