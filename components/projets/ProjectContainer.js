import Card from "./ProjectCard";
import classes from "./ProjectContainer.module.css";

function ProjectContainer(props) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 className={classes.competence}>React</h2>
      </div>
      <div className={classes.projets}>
        <Card titre="" image="" description="" />
      </div>
      <div className={classes.header}>
        <h2 className={classes.competence}>Next.js</h2>
      </div>
      <div className={classes.projets}></div>
      <div className={classes.header}>
        <h2 className={classes.competence}>Node.js</h2>
      </div>
      <div className={classes.projets}></div>
      <div className={classes.header}>
        <h2 className={classes.competence}>React</h2>
      </div>
      <div className={classes.projets}></div>
      <div className={classes.header}>
        <h2 className={classes.competence}>API</h2>
      </div>
      <div className={classes.projets}></div>
    </div>
  );
}

export default ProjectContainer;
