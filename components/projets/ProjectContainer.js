import Card from "./ProjectCard";
import classes from "./ProjectContainer.module.css";

function ProjectContainer({ children }) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 className={classes.competence}>React</h2>
      </div>
      <div className={classes.projets}>
        <Card />
        <Card />
      </div>
      <div className={classes.header}>
        <h2 className={classes.competence}>Next.js</h2>
      </div>
      <div className={classes.projets}>
        <Card />
      </div>
      <div className={classes.header}>
        <h2 className={classes.competence}>Node.js</h2>
      </div>
      <div className={classes.projets}>
        <Card />
      </div>
      <div className={classes.header}>
        <h2 className={classes.competence}>React</h2>
      </div>
      <div className={classes.projets}>
        <Card />
      </div>
      <div className={classes.header}>
        <h2 className={classes.competence}>API</h2>
      </div>
      <div className={classes.projets}>
        <Card />
      </div>
    </div>
  );
}

export default ProjectContainer;
