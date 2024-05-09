import { useState, useEffect, useRef } from "react";
import { flagProps } from "../types";

const Header = ({ flagEs, setFlagEs }: flagProps) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [visibleNav, setVisibleNav] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Usa headerRef.current como HTMLHeadingElement
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setVisibleNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = scrollPos > 10 ? Math.min(scrollPos / 100, 0.95) : 0;

  const leer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Para prevenir la acción predeterminada del enlace
    const target = e.target as HTMLAnchorElement;
    const textoEnlace = target.dataset.id;
    const section = document.getElementById(textoEnlace!);

    if (section) {
      // Obtener la altura del nav
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;

      // Calcular la posición de desplazamiento teniendo en cuenta la altura del nav
      const offsetTop =
        section.getBoundingClientRect().top + window.pageYOffset - navHeight;

      // Hacer scroll hasta la posición corregida
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Ocultar la barra de navegación
      setVisibleNav(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`z-50 shadow-sky-600 sticky top-0 w-full lg:transition lg:duration-600 lg:ease-in-out md:animate-fade-down md:animate-once md:animate-normal ${
        scrollPos > 100 ? "shadow-md" : "bg-transparent"
      }`}
      style={{ backgroundColor: `rgba(0, 16, 50, ${opacity})` }}
    >
      <div className="grid grid-cols-3 md:grid-cols-12 items-center w-full flex-row lg:flex-row justify-between md:items-center max-w-6xl mx-auto px-2">
        {/* Logo */}
        <div className="p-4 col-span-2 md:col-span-12 lg:col-span-3 md:text-center">
          <p
            className="text-gray-100 text-2xl font-extrabold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {`<`}
            <span>Julián Dev</span> {`/>`}
          </p>
        </div>
        {/* Menu e Idioma */}
        <div className="flex items-center justify-end lg:justify-center md:justify-start gap-4 pr-3 md:order-2">
          <img
            className={`rounded-full cursor-pointer animate-rotate-y ${
              flagEs ? "visible" : "hidden"
            }`}
            src="https://kapowaz.github.io/square-flags/flags/es.svg"
            alt="spanish"
            width={36}
            height={36}
            onClick={() => setFlagEs(!flagEs)}
          />
          <img
            className={`rounded-full cursor-pointer animate-rotate-y ${
              flagEs ? "hidden" : "visible"
            }`}
            src="https://kapowaz.github.io/square-flags/flags/us.svg"
            alt="english"
            width={36}
            height={36}
            onClick={() => setFlagEs(!flagEs)}
          />
          <img
            className="max-w-9 md:hidden"
            src="/img/barras.svg"
            alt="menu desplegable"
            onClick={() => setVisibleNav(!visibleNav)}
            width={36}
            height={36}
          />
        </div>
        {/*Navegación*/}
        <div className="flex col-span-3 md:col-start-2 md:py-4 md:col-span-10 justify-center lg:justify-end lg:col-span-8 md:items-center flex-col md:flex-row items-end md:gap-3">
          <nav
            className={`flex order-4 items-end px-3 md:items-center gap-6 flex-col md:flex-row text-right lg:pb-0 transition-all duration-600 ease-in-out ${
              visibleNav
                ? "h-auto opacity-100 mt-3 mb-6 md:mb-0"
                : "h-0 opacity-0 md:h-auto md:opacity-100"
            }`}
          >
            <a
              href="#"
              className="group relative inline-block overflow-hidden text-gray-100 text-lg font-semibold"
              onClick={(e) => leer(e)}
              data-id="sobremi"
            >
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
              {flagEs ? "Sobre Mí" : "About Me"}
            </a>
            <a
              href="#"
              className="group relative inline-block overflow-hidden text-gray-100 text-lg font-semibold"
              onClick={(e) => leer(e)}
              data-id="estudios"
            >
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
              {flagEs ? "Estudios" : "Studies"}
            </a>
            <a
              href="#"
              className="group relative inline-block overflow-hidden text-gray-100 text-lg font-semibold"
              onClick={(e) => leer(e)}
              data-id="habilidades"
            >
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
              {flagEs ? "Habilidades" : "Abilities"}
            </a>
            <a
              href="#"
              className="group relative inline-block overflow-hidden text-gray-100 text-lg font-semibold"
              onClick={(e) => leer(e)}
              data-id="proyectos"
            >
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
              {flagEs ? "Proyectos" : "Projects"}
            </a>
            <a
              href="#"
              className="group relative inline-block overflow-hidden text-gray-100 text-lg font-semibold"
              onClick={(e) => leer(e)}
              data-id="contacto"
            >
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
              {flagEs ? "Contacto" : "Contact"}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
