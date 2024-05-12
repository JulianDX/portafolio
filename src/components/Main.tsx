import Typewriter from "../hooks/useTypeWriter";
import { ArrowDownTrayIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { flagProp } from "../types";
import { useEffect, useState } from "react";

const Main = ({ flagEs }: flagProp) => {
  const [test, setTest] = useState(["", ""]);
  const [key, setKey] = useState(0); // Clave única para el componente Typewriter

  useEffect(() => {
    flagEs
      ? setTest([
          (test[0] = "Ingeniero de Sistemas"),
          (test[1] = "Desarrollador Web"),
        ])
      : setTest([(test[0] = "Systems Engineer"), (test[1] = "Web Developer")]);
  }, [flagEs]);

  useEffect(() => {
    // Cada vez que flagEs cambia, actualizamos la clave única
    setKey((prevKey) => prevKey + 1);
  }, [flagEs]);

  return (
    <>
      <div className="relative h-full w-full bg-slate-950 -mt-96 md:-mt-0">
        <div className="absolute bottom-0 right-0 h-screen w-full rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,134,192,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 h-full w-full rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,134,192,.15),rgba(255,255,255,0))]"></div>
        <main className="text-gray-100 bg-transparent pt-72 md:pt-6 -mt-24 md:-mt-32 md:pb-10 gap-0">
          <div className="max-w-6xl mx-auto md:px-4 pt-32 md:pt-36 md:grid md:grid-cols-3 md:animate-fade-left md:animate-once md:animate-ease-in md:animate-normal">
            <div className="md:col-span-2 md:flex items-center px-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left drop-shadow-[0_3.2px_3.2px_rgba(0,78,207,1)]">
                  {flagEs ? "Hola, soy" : "Hi, I'm"}{" "}
                  <span className="bg-gradient-to-l from-gray-100 to-blue-400 text-transparent bg-clip-text drop-shadow-none">
                    Julián Roa Palacio
                  </span>
                </h1>
                <div className="text-4xl px-2 drop-shadow-[0_3.2px_3.2px_rgba(0,78,207,1)] md:text-5xl mt-5 mb-3 font-semibold text-center md:text-left h-28 lg:h-20 leading-snug md:mt-4 bg-gradient-to-l from-cyan-100 to-blue-400 text-transparent bg-clip-text">
                  <Typewriter key={key} words={test} delay={80} />
                </div>
                <div className="flex flex-col justify-center sm:grid sm:grid-cols-2 gap-4 mx-automt-5">
                  <a
                    href="files/CVJulianRoaPalacio.pdf"
                    download="CVJulianRoaPalacio.pdf"
                    className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
                  >
                    <ArrowDownTrayIcon className="inline-block text-gray-900 h-6 w-6 mr-2 group-hover:text-gray-100 z-20" />
                    <span className="w-32 h-32 rotate-45 translate-x-60 -translate-y-2 absolute left-0 top-0 bg-white opacity-[20%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-0 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-96"></span>
                    <span className="relative w-full text-left text-gray-900 transition-colors duration-200 ease-in-out group-hover:text-gray-100">
                      {flagEs ? "Descargar CV" : "Download CV"}
                    </span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                  </a>
                  <a
                    href="https://github.com/JulianDX"
                    target="_blank"
                    className="relative inline-flex items-center justify-start p-4 px-5 py-3 overflow-hidden font-semibold text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-blue-500"
                  >
                    <svg
                      className="w-6 h-6 me-2 z-10 text-gray-100"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-500"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-12 translate-x-24 bg-blue-500 rounded-full opacity-30 group-hover:rotate-45 ease"></span>
                    <span className="relative text-gray-100">
                      {flagEs ? "Ver GitHub" : "View GitHub"}
                    </span>
                  </a>
                </div>
                <div className="flex items-end justify-center md:justify-normal my-8 gap-2">
                  <MapPinIcon className="inline-block h-10 w-10 md:animate-bounce text-sky-500 drop-shadow-[0_3.2px_3.2px_rgba(6,44,171,1)]" />
                  <p className="font-bold text-sky-300 drop-shadow-[0_3.2px_3.2px_rgba(6,44,171,1)]">
                    {flagEs ? "Disponible en" : "Available in"}:{" "}
                    <span className="font-normal text-gray-100">
                      Bogotá | Armenia
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-5 justify-start items-center py-3 overflow-hidden">
              <img
                className="max-w-52 md:max-w-full h-auto rounded-full box rotate-12 hidden sm:block"
                src="img/julian.webp"
                alt="Imagen perfil"
                width={321}
                height={251}
              />
              <div className="flex gap-4 mt-1">
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/julian-fernando-roa-palacio-101840253/"
                  target="_blank"
                  className="w-10 h-10 flex -mt-4 items-center justify-center relative overflow-hidden rounded-full bg-sky-800 shadow-md shadow-sky-500 group transition-all duration-300"
                >
                  <svg
                    className="fill-gray-100 relative z-10 transition-all duration-300 group-hover:fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <path
                      d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                      fill=""
                    />
                  </svg>
                  <div className="absolute top-full left-0 w-full h-full rounded-full bg-sky-200 z-0 transition-all duration-500 group-hover:top-0"></div>
                </a>
                <a
                  aria-label="LinkedIn"
                  href="mailto:jfroap@uqvirtual.edu.co"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-purple-900 shadow-md shadow-purple-500 group transition-all duration-300"
                >
                  <svg
                    className="rounded-md transition-all duration-300 group-hover:scale-110 z-20"
                    width="28"
                    height="28"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0065 56.1236H21.4893V35.5227L9.37109 26.4341V52.4881C9.37109 54.4997 11.001 56.1236 13.0065 56.1236Z"
                      fill="#4285F4"
                      className="group-hover:fill-black"
                    />
                    <path
                      d="M50.5732 56.1236H59.056C61.0676 56.1236 62.6914 54.4937 62.6914 52.4881V26.4341L50.5732 35.5227"
                      fill="#34A853"
                      className="group-hover:fill-gray-600"
                    />
                    <path
                      d="M50.5732 19.7693V35.5229L62.6914 26.4343V21.587C62.6914 17.0912 57.5594 14.5282 53.9663 17.2245"
                      fill="#FBBC04"
                      className="group-hover:fill-black"
                    />
                    <path
                      d="M21.4893 35.5227V19.769L36.0311 30.6754L50.5729 19.769V35.5227L36.0311 46.429"
                      fill="#EA4335"
                      className="group-hover:fill-gray-500"
                    />
                    <path
                      d="M9.37109 21.587V26.4343L21.4893 35.5229V19.7693L18.0962 17.2245C14.4971 14.5282 9.37109 17.0912 9.37109 21.587Z"
                      fill="#C5221F"
                      className="group-hover:fill-gray-700"
                    />
                  </svg>
                  <div className="absolute top-full left-0 w-full h-full rounded-full bg-purple-200 z-0 transition-all duration-500 group-hover:top-0"></div>
                </a>
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/profile.php?id=100008319888002"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-blue-600 shadow-md shadow-blue-400 group transition-all duration-300"
                >
                  <svg
                    className="relative z-10 fill-gray-100 transition-all duration-300 group-hover:fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <path
                      d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                      fill=""
                    />
                  </svg>
                  <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-200 z-0 transition-all duration-500 group-hover:top-0"></div>
                </a>
                <a
                  aria-label="Whatsapp"
                  href="https://wa.me/573224250426"
                  target="_blank"
                  className="w-10 h-10 flex -mt-4 items-center justify-center relative overflow-hidden rounded-full bg-green-600 shadow-md shadow-green-400 group transition-all duration-300"
                >
                  <svg
                    className="fill-gray-100 relative z-10 transition-all duration-300 group-hover:fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 71 72"
                    fill="none"
                  >
                    <path
                      d="M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z"
                      fill=""
                    />
                  </svg>
                  <div className="absolute top-full left-0 w-full h-full rounded-full bg-green-200 z-0 transition-all duration-500 group-hover:top-0"></div>
                </a>
              </div>
            </div>
          </div>
          <svg
            className="editorial"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 
                    58-18 88-18s
                    58 18 88 18 
                    58-18 88-18 
                    58 18 88 18
                    v44h-352z"
              />
            </defs>
            <g className="parallax1">
              <use xlinkHref="#gentle-wave" x="50" y="3" fill="#8FE6FF" />
            </g>
            <g className="parallax2">
              <use xlinkHref="#gentle-wave" x="50" y="0" fill="#005F87" />
            </g>
            <g className="parallax3">
              <use xlinkHref="#gentle-wave" x="50" y="9" fill="#368AAD" />
            </g>
            <g className="parallax4">
              <use xlinkHref="#gentle-wave" x="50" y="6" fill="#4AC9FF" />
            </g>
          </svg>
        </main>
      </div>
    </>
  );
};

export default Main;
