import Head from "next/head";
import classes from "../styles/Home.module.css";
import About from "@/components/sections/Abouts";
import ProjectContainer from "@/components/projets/ProjectContainer";
import { projectHandler } from "./api/projets";

export default function Home(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <About />
      <ProjectContainer projets= {props.data}/>
    </>
  );
}


export async function getStaticProps(){

  let projects = await projectHandler();
  projects = JSON.parse(projects)

return {
  props: {
    status:"message",
    data : projects   
  },
  revalidate:60
 }
}