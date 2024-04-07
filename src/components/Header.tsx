import { useState, useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [visibleNav, setVisibleNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = scrollPos > 10 ? Math.min(scrollPos / 100, 1) : 0;

  return (
    <header
      className={`z-50 sticky top-0 w-full transition duration-600 ease-in-out animate-fade-down animate-once animate-normal ${
        scrollPos > 100 ? "bg-black" : "bg-transparent"
      }`}
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-end md:items-center max-w-6xl mx-auto px-2">
        {/* Logo */}
        <div className="flex justify-between w-full md:w-auto items-center p-4">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <h1 className="text-white text-2xl font-bold">
              {`<`}
              <span
                className={`${
                  opacity === 1
                    ? "bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text font-extrabold"
                    : "text-white"
                }`}
              >
                Julián Roa Palacio
              </span>{" "}
              {`/>`}
            </h1>
          </Link>
          <img
            className="max-w-9 md:hidden"
            src="/img/barras.svg"
            alt="menu desplegable"
            onClick={() => setVisibleNav(!visibleNav)}
          />
        </div>
        {/* Navigation */}
        <nav
          className={`flex md:items-center gap-4 flex-col md:flex-row text-right md:pb-8 lg:pb-0 transition-all duration-600 ease-in-out ${
            visibleNav
              ? "h-auto opacity-100 mb-6 md:mb-0"
              : "h-0 opacity-0 md:h-auto md:opacity-100"
          }`}
        >
          <a
            href="#"
            className="group relative inline-block overflow-hidden text-white text-lg hover:text-sky-200 font-semibold pr-4"
          >
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-sky-500 transition-all duration-300 group-hover:w-full"></span>
            Sobre Mí
          </a>
          <a
            href="#"
            className="group relative inline-block overflow-hidden text-white text-lg hover:text-sky-200 font-semibold pr-4"
          >
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-sky-500 transition-all duration-300 group-hover:w-full"></span>
            Habilidades
          </a>
          <a
            href="#"
            className="group relative inline-block overflow-hidden text-white text-lg hover:text-sky-200 font-semibold pr-4"
          >
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-sky-500 transition-all duration-300 group-hover:w-full"></span>
            Proyectos
          </a>
          <a
            href="#"
            className="group relative inline-block overflow-hidden text-white text-lg hover:text-sky-200 font-semibold pr-4"
          >
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-sky-500 transition-all duration-300 group-hover:w-full"></span>
            Contacto
          </a>
          <a
            href="files/CV.pdf"
            download="CV_Julian_Roa.pdf"
            className="flex group gap-2 items-center relative overflow-hidden bg-white text-center hover:scale-105 text-black hover:bg-gray-200 text-lg font-semibold rounded px-2 h-10 transition ease-linear mr-4 lg:mr-0 md:mr-0"
          >
            Descargar CV
            <ArrowDownTrayIcon className="h-6 w-6" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
