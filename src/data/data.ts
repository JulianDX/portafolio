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
    nombre: "bebidas",
    url: "https://drinkapireact.netlify.app/",
    repositorio: "https://github.com/JulianDX/bebidas-api-zustand-zod",
    descripcion:
      "Aplicación Web para consultar API y almacenar favoritos.",
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "typescript", color: "emerald" },
    ],
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
  },
];
