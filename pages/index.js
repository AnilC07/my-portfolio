import Head from "next/head";
import classes from "../styles/Home.module.css";
import About from "@/components/sections/Abouts";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <About />
    </>
  );
}
