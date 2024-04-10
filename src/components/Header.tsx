import { useState, useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

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

  const opacity = scrollPos > 10 ? Math.min(scrollPos / 100, 0.95) : 0;

  const leer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Para prevenir la acción predeterminada del enlace
    const target = e.target as HTMLAnchorElement;
    const textoEnlace = target.dataset.id;
    const section = document.getElementById(textoEnlace!);
  
    if (section) {
      // Obtener la altura del nav
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
  
      // Calcular la posición de desplazamiento teniendo en cuenta la altura del nav
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
  
      // Hacer scroll hasta la posición corregida
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
  
      // Ocultar la barra de navegación
      setVisibleNav(false);
    }
  };
  

  return (
    <header
      className={`z-50 shadow-sky-600 sticky top-0 w-full lg:transition lg:duration-600 lg:ease-in-out lg:animate-fade-down lg:animate-once lg:animate-normal ${
        scrollPos > 100 ? "shadow-md" : "bg-transparent"
      }`}
      style={{ backgroundColor: `rgba(0, 16, 50, ${opacity})` }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-end md:items-center max-w-6xl mx-auto px-2">
        {/* Logo */}
        <div className="flex justify-between w-full md:w-auto items-center p-4">
          <h1
            className="text-white text-2xl font-extrabold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {`<`}
            <span>Julián Dev</span> {`/>`}
          </h1>
          <img
            className="max-w-9 md:hidden"
            src="/img/barras.svg"
            alt="menu desplegable"
            onClick={() => setVisibleNav(!visibleNav)}
            width={40}
            height={40}
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
            className="group relative inline-block overflow-hidden text-white text-lg font-semibold pr-4"
            onClick={(e) => leer(e)}
            data-id="sobremi"
          >
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
            Sobre Mí
          </a>
          <a
            href="#"
            className="group relative inline-block overflow-hidden text-white text-lg font-semibold pr-4"
            onClick={(e) => leer(e)}
            data-id="habilidades"
          >
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
            Habilidades
          </a>
          <a
            href="#"
            className="group relative inline-block overflow-hidden text-white text-lg font-semibold pr-4"
            onClick={(e) => leer(e)}
            data-id="proyectos"
          >
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
            Proyectos
          </a>
          <a
            href="#"
            className="group relative inline-block overflow-hidden text-white text-lg font-semibold pr-4"
            onClick={(e) => leer(e)}
            data-id="contacto"
          >
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
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
