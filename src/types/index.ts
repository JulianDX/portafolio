import { Dispatch, SetStateAction } from "react";

export type blandasType = {
  habilidad: string;
};

export type durasType = {
  tecnologia: string;
};

type tecnologiaType = {
  nombre: string;
  color: string;
};

export type projectType = {
  nombre: string;
  url: string;
  repositorio: string;
  descripcion: string;
  tecnologias: tecnologiaType[];
  img: string;
};

export type flagProps = {
  flagEs: boolean;
  setFlagEs: Dispatch<SetStateAction<boolean>>;
};

export type flagProp = Omit<flagProps, "setFlagEs">;
