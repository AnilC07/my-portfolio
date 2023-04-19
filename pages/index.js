import Head from "next/head";

import About from "@/components/sections/Abouts";
import ProjectContainer from "@/components/projets/ProjectContainer";
import { projectHandler } from "./api/projets";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <About />
      <ProjectContainer projets={props.data} />
    </>
  );
}

export async function getStaticProps() {
  let projects = await projectHandler();

  return {
    props: {
      data: projects,
    },
  };
}
