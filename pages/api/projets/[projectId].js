import { getProjectById } from "@/lib/db-util"

async function projectIdHandler (projectId){

const theProject = await getProjectById(projectId)

return theProject
}

export default  projectIdHandler