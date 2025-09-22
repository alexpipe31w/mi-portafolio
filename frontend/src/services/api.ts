// src/services/api.ts
export interface Project {
  id: number;
  name: string;
  tech: string;
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:4000/api/projects");
  if (!res.ok) throw new Error("Error al obtener proyectos");
  return res.json();
}
