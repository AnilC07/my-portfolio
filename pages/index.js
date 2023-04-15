import Head from "next/head";
import classes from "../styles/Home.module.css";
import About from "@/components/sections/Abouts";
import ProjectContainer from "@/components/projets/ProjectContainer";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <About />
      <ProjectContainer />
    </>
  );
}


export async function getStaticProps(){


return {
  props: {
    status:"message",
    data : 'fetchedData'   
  },
  revalidate:60
 }
}