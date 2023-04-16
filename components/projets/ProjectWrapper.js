import { useEffect, useState } from "react";
import Card from "./ProjectCard";
import classes from "./ProjectWrapper.module.css";

const filterProjects = (datas, techno) => {
  const arr = [];
  datas.find((el) => {
    if (el.technos === techno) {
      arr.push(el);
    }
  });

  return arr;
};

function ProjectWrapper({ projets, titreWrapper, filtre }) {
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setFilteredProjects(() => filterProjects(projets, filtre));
  }, [filterProjects]);

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
