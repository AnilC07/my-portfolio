import Image from "next/image";
import classes from "../../styles/ProjectByID.module.css";
import Link from "next/link";
import { projectHandler } from "../api/projets";
import { getProjectById } from "@/lib/db-util";

function ProjetByID(props) {
    console.log(props)
  return (
    <>
      <div className={classes["project-title"]}>
        <h2>TITRE DU PROJET</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.image}>
          <Image
            src="/images/projets/Natours/Natours.webp"
            alt="Natours"
            width={550}
            height={350}
          />
        </div>
        <div className={classes["project-content"]}>
          <div className={classes.objectif}>
            <h3>Objectif :</h3>
            <p>objectif du projets</p>
          </div>
          <div className={classes.knowledge}>
            <h3>Connaissances acquisent :</h3>
            <ul>
              <li>lister les connaissances</li>
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
          <Link href="/">Se rendre sur le site de TITRE</Link>
        </div>
      </div>
    </>
  );
}

export default ProjetByID;

export async function getStaticPaths() {
  let projects = await projectHandler();
  projects = JSON.parse(projects);

  const paths = projects.map((project) => {
    return { params: { projectId: project.id } };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { projectId } = context.params;
  console.log(projectId);

  const theProject = await getProjectById(projectId)

  return {
    props: {
      data: theProject,
    }
  };
}
