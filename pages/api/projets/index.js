import { getAllProjets } from "@/lib/db-util";

export async function projectHandler() {
  const allProjects = await getAllProjets();
//   const parsedData = JSON.stringify(allProjects);

  return allProjects;
}
