import { blandasType } from "../types";
import { durasType } from "../types";
import { projectType } from "../types";

export const blandasEs: blandasType[] = [
  {
    habilidad: "Honestidad",
  },
  {
    habilidad: "Respeto",
  },
  {
    habilidad: "Adaptabilidad",
  },
  {
    habilidad: "Pensamiento Crítico",
  },
  {
    habilidad: "Trabajo en Equipo",
  },
  {
    habilidad: "Empatía",
  },
];

export const blandasEn: blandasType[] = [
  {
    habilidad: "Honesty",
  },
  {
    habilidad: "Respect",
  },
  {
    habilidad: "Adaptability",
  },
  {
    habilidad: "Critical Thinking",
  },
  {
    habilidad: "Teamwork",
  },
  {
    habilidad: "Empathy",
  },
];

export const duras: durasType[] = [
  {
    tecnologia: "html",
  },
  {
    tecnologia: "css",
  },
  {
    tecnologia: "sass",
  },
  {
    tecnologia: "tailwind",
  },
  {
    tecnologia: "java",
  },
  {
    tecnologia: "php",
  },
  {
    tecnologia: "javascript",
  },
  {
    tecnologia: "typescript",
  },
  {
    tecnologia: "react",
  },
  {
    tecnologia: "node",
  },
  {
    tecnologia: "mysql",
  },
  {
    tecnologia: "mongo",
  },
  {
    tecnologia: "postman",
  },
  {
    tecnologia: "github",
  },
  {
    tecnologia: "git",
  },
];

export const projectsEs: projectType[] = [
  {
    nombre: "veterinaria",
    url: "https://veterinaria-ashy.vercel.app/",
    repositorio: "https://github.com/stars/JulianDX/lists/veterinaria",
    descripcion: `Aplicación construida con el stack MERN para administrar pacientes 
      de una veterinaria, utiliza JWT para administrar la autenticación y 
      autorización, Mongoose para facilitar la interacción con la base de datos,
      Axios para realizar las peticiones HTTP y React Router para poder utilizar
      diferentes páginas.`,
    tecnologias: [
      { nombre: "mongo", color: "emerald" },
      { nombre: "express", color: "sky" },
      { nombre: "react", color: "gray" },
      { nombre: "node", color: "violet" },
    ],
    img: "veterinaria",
  },
  {
    nombre: "bebidas",
    url: "https://drinkapireact.netlify.app/",
    repositorio: "https://github.com/JulianDX/bebidas-api-zustand-zod",
    descripcion: `Aplicación Web que consulta las bebidas de TheCocktailDB API y
    permite tanto guardar como eliminar las bebidas que el usuario desee, hace uso
    de localStorage para persistir la información, Zustand para utilizar un state
    global y Zod para validar la obtención de los datos al hacer llamados a la API.`,
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "typescript", color: "emerald" },
    ],
    img: "bebidas",
  },
  {
    nombre: "gastos",
    url: "https://swipe-gastos.netlify.app/",
    repositorio: "https://github.com/JulianDX/control-gastos",
    descripcion: `Aplicación Web que funciona como planificador de presupuesto,
    permite llevar un control de los gastos utilzando Context API para utilizar
    un estado global.`,
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "typescript", color: "emerald" },
    ],
    img: "gastos",
  },
  {
    nombre: "portafolio",
    url: "#",
    repositorio: "https://github.com/JulianDX/portafolio",
    descripcion: `Es exagerado construir un portafolio con estas 
    tecnologías, sin embargo, lo veo como el lugar perfecto para poner en
    práctica los conocimientos que voy adquiriendo, por lo cual utilicé React como 
    librería de JS y desarrollé un pequeño servidor con Node junto a Express para gestionar
    el envío de correos.`,
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "node", color: "gray" },
      { nombre: "express", color: "sky" },
      { nombre: "tailwind", color: "violet" },
    ],
    img: "portafolio",
  },
];

export const projectsEn: projectType[] = [
  {
    nombre: "veterinary",
    url: "https://veterinaria-ashy.vercel.app/",
    repositorio: "https://github.com/stars/JulianDX/lists/veterinaria",
    descripcion: `Application built with the MERN stack to manage veterinary
     patients, uses JWT for authentication and authorization management, 
     Mongoose to facilitate interaction with the database, Axios for making HTTP 
     requests, and React Router to enable the use of different pages.`,
    tecnologias: [
      { nombre: "mongo", color: "emerald" },
      { nombre: "express", color: "sky" },
      { nombre: "react", color: "gray" },
      { nombre: "node", color: "violet" },
    ],
    img: "veterinaria",
  },
  {
    nombre: "drinks",
    url: "https://drinkapireact.netlify.app/",
    repositorio: "https://github.com/JulianDX/bebidas-api-zustand-zod",
    descripcion: `Web application that queries beverages from TheCocktailDB API
     and allows users to save and delete beverages as they wish. It uses localStorage
      to persist information, Zustand for global state management, and Zod to validate
       data retrieval when making API calls.`,
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "typescript", color: "emerald" },
    ],
    img: "bebidas",
  },
  {
    nombre: "Expenses",
    url: "https://swipe-gastos.netlify.app/",
    repositorio: "https://github.com/JulianDX/control-gastos",
    descripcion: `Web application that functions as a budget planner, allowing
       users to track expenses using Context API for global state management.`,
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "typescript", color: "emerald" },
    ],
    img: "gastos",
  },
  {
    nombre: "portfolio",
    url: "#",
    repositorio: "https://github.com/JulianDX/portafolio",
    descripcion: `It might be overkill to build a portfolio with these
     technologies, however, I see it as the perfect place to put into 
     practice the knowledge I'm acquiring. Therefore, I used React as 
     the JS library and developed a small server with Node and Express 
     to manage email sending.`,
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "express", color: "sky" },
    ],
    img: "portafolio",
  },
];
