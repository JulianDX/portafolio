export const About = () => {
  return (
    <section className="px-2 animate-fade-up animate-once animate-ease-in animate-normal">
      <div className="rounded-lg bg-white bg-opacity-10 max-w-4xl mx-auto p-6 md:p-8 text-white gap-5">
        <div className="opacity-100">
          <h2 className="items-center text-3xl font-extrabold">
            Un Poco Sobre Mí
          </h2>
          <br />
        </div>
        <div className="col-span-2 text-xl font-semibold">
          <p>
            <span className="bg-gradient-to-r from-orange-300 to-pink-400 text-transparent bg-clip-text">Nombre Completo:</span> Julián Fernando Roa Palacio
          </p>
          <p className="mt-2">
            <span className="bg-gradient-to-r from-orange-300 to-pink-400 text-transparent bg-clip-text">País:</span> Colombia{" "}
            <span className="rounded fi fi-co"></span>
          </p>
          <br />
          <p className="md:text-justify">
            Estudiante de décimo semestre de{" "}
            <span className=" text-cyan-300 bg-clip-text">
              Ingeniería de Sistemas y Computación
            </span>{" "}
            con un gran interés en el{" "}
            <span className=" text-sky-400 bg-clip-text">Desarrollo Web</span>.
            Apasionado por el aprendizaje y el crecimiento en el campo de la
            tecnología. Activamente en busca de oportunidades para aplicar y
            expandir mis conocimientos. Soy una persona trabajadora,
            comunicativa y comprometida, deseando encontrar una oportunidad para
            adquirir experiencia profesional.
          </p>
        </div>
      </div>
    </section>
  );
};
