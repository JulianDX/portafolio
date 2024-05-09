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
    descripcion:
      "Aplicación Web para administrar pacientes de una veterinaria.",
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
    descripcion: "Aplicación Web para consultar API y almacenar favoritos.",
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
    descripcion: "Aplicación Web para llevar control de gastos y presupuesto.",
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
    descripcion: "Si te da curiosidad ver cómo está construido mi portafolio:",
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "express", color: "sky" },
    ],
    img: "portafolio",
  },
];

export const projectsEn: projectType[] = [
  {
    nombre: "veterinary",
    url: "https://veterinaria-ashy.vercel.app/",
    repositorio: "https://github.com/stars/JulianDX/lists/veterinaria",
    descripcion: "Web application to manage patients of a veterinary clinic.",
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
    descripcion: "Web application to fetch an API and store bookmarks.",
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
    descripcion:
      "Web application to keep an eye on expenses and budget control.",
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
    descripcion: "If you are curious about how my portfolio was built:",
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "express", color: "sky" },
    ],
    img: "portafolio",
  },
];
