import Card from "./ProjectCard";
import classes from "./ProjectContainer.module.css";
import ProjectWrapper from "./ProjectWrapper";

function ProjectContainer({ projets }) {
  // console.log(projets);

  return (
    <div className={classes.container}>
    <ProjectWrapper projets={projets} filtre='HTML/CSS' titreWrapper='HTML/CSS' />
    <ProjectWrapper projets={projets} filtre='nextjs' titreWrapper='Next.js' />
    </div>
  );
}

export default ProjectContainer;
