import classes from "./ProjectContainer.module.css";
import ProjectWrapper from "./ProjectWrapper";

function ProjectContainer({ projets }) {
  return (
    <>
      <div className="section-title">
        <h2>Projets</h2>
      </div>
      <div className={classes.container}>
        <ProjectWrapper
          projets={projets}
          filtre="HTML/CSS"
          titreWrapper="HTML/CSS"
        />
        <ProjectWrapper
          projets={projets}
          filtre="nextjs"
          titreWrapper="Next.js"
        />
        <ProjectWrapper
          projets={projets}
          filtre="reactjs"
          titreWrapper="React.js"
        />
      </div>
    </>
  );
}

export default ProjectContainer;
