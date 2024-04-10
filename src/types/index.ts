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
};