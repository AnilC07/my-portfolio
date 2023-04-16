import Card from "./ProjectCard";
import classes from "./ProjectWrapper.module.css";

function ProjectWrapper({ projets, titreWrapper, filtre }) {
  //   console.log("projet wrapper ");
  //   console.log({ projets });
  const filteredProjects = projets.filter((el) => el.technos === filtre);
  //   console.log({ filteredProjects });
  return (
    <>
      <div className={classes.header}>
        <h2 className={classes.competence}>{titreWrapper}</h2>
      </div>
      <div className={classes.projets}>
        {filteredProjects.length > 0 ? (
          <>
            {filteredProjects.map((projet) => {
              return (
                <Card
                  key={projet._id}
                  titre={projet.titre}
                  image={projet.img_vignette}
                  description={projet.description}
                  techno={projet.technos}
                />
              );
            })}
          </>
        ) : (
          <p>Aucun projet</p>
        )}
      </div>
    </>
  );
}

export default ProjectWrapper;
