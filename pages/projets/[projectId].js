import Image from "next/image";
import classes from "../../styles/ProjectByID.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import projectIdHandler from "../api/projets/[projectId]";
import { projectHandler } from "../api/projets";

function ProjetByID(props) {
  const [projectData, setProjectData] = useState();
  console.log(props)

  useEffect(() => {
    setProjectData(props.data);
  }, []);

  if (!projectData) {
    return <p>Loading...</p>;
  }
  console.log({ projectData });
  return (
    <>
      {projectData && (
        <>
          <div className={classes["project-title"]}>
            <h2>{projectData[0].titre}</h2>
          </div>
          <div className={classes.container}>
            <div className={classes.image}>
              <Image
                src={`/images/projets/${projectData[0].titre}/${projectData[0].img_vignette}`}
                alt="Natours"
                width={550}
                height={350}
              />
            </div>
            <div className={classes["project-content"]}>
              <div className={classes.objectif}>
                <h3>Objectif :</h3>
                {projectData[0].objectif}
              </div>
              <div className={classes.knowledge}>
                <h3>Connaissances acquisent :</h3>
                <ul>
                {projectData[0].acquis.map((acquis,idx)=>{
                  return <li key={idx}>- {acquis}</li>
                })}
                  
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.actions}>
            <div className={classes["read-comment"]}>
              <p>Voir les commentaires</p>
            </div>
            <div className={classes["write-comment"]}>
              <p>Laisser un commentaire</p>
            </div>
            <div className={classes.link}>
              <a href={projectData[0].site} target='_blank'>Acceder a l'application {projectData[0].titre}</a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProjetByID;

export async function getStaticPaths() {
  let projects = await projectHandler();

    const paths = projects.map((project) => {
      return { params: { projectId: project.id } };
    });

  return {
    paths: paths,
    // paths: [{ params: { projectId: "p1" } }, { params: { projectId: "p2" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const projectId = context.params.projectId;

  const theProject = await projectIdHandler(projectId);

  console.log({theProject})

  return {
    props: {
      data: theProject,
    },
  };
}
