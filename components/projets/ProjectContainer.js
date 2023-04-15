import Card from "./ProjectCard";
import classes from "./ProjectContainer.module.css";

function ProjectContainer({ projets }) {
  console.log(projets);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 className={classes.competence}>React</h2>
      </div>
      <div className={classes.projets}>
        {projets.map((projet) => {
          return (
            <Card
              key={projet._id}
              titre={projet.titre}
              image={projet.img_vignette}
              description={projet.description}
            />
          );
          return;
        })}
      </div>
    </div>
  );
}

export default ProjectContainer;
