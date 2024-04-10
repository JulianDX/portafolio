import { blandasType } from "../types";
import { durasType } from "../types";
import { projectType } from "../types";

export const blandas: blandasType[] = [
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
    tecnologia: "javascript",
  },
  {
    tecnologia: "typescript",
  },
  {
    tecnologia: "react",
  },
  {
    tecnologia: "mysql",
  },
  {
    tecnologia: "mongo",
  },
  {
    tecnologia: "php",
  },
  {
    tecnologia: "node",
  },
  {
    tecnologia: "pug",
  },
  {
    tecnologia: "github",
  },
  {
    tecnologia: "git",
  },
];

export const projects: projectType[] = [
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
  },
  {
    nombre: "agencia",
    url: "https://agenciaviajes-3dq7.onrender.com/",
    repositorio: "https://github.com/JulianDX/agenciaviajes",
    descripcion:
      "Aplicación Web para consultar viajes y agregar testimoniales.",
    tecnologias: [
      { nombre: "node", color: "violet" },
      { nombre: "express", color: "sky" },
      { nombre: "pug", color: "orange" },
    ],
  },
  {
    nombre: "portafolio",
    url: "#",
    repositorio: "https://github.com/JulianDX/portafolio",
    descripcion:
      "Si te da curiosidad ver cómo está construido mi portafolio:",
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "express", color: "sky" },
    ],
  },
];
