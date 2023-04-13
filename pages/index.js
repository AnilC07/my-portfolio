import Head from "next/head";
import classes from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Bienvenue</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="This is my portfolio" />
      </Head>
      <section className={classes.about}>
        <div className="section-title">
          <h2>Qui suis-je ?</h2>
        </div>
        <div className={classes.text}>
          <p>
            Tout d'abord, merci d'avoir pris le temps de visiter ce portfolio.
            <br></br>
            Je me prénomme Anil, j'ai 31 ans et c'est que récemment que j'ai
            découvert dans le développement web.
            <br></br>
            De formation en électronique, j'ai travaillé un peu plus de trois
            ans dans ce secteur d'activité.<br></br>
            Entre deux missions d'intérim, j'ai pris la décision de me former à
            un autre métier et ayant beaucoup d'intérêt pour le numérique et
            pour le web, je me suis intéressé au développement de celui-ci.
            <br></br>
            Commencé en autodidacte, j'ai appris les bases du langage HTML, CSS
            et JavaScript puis à la librairie React. C'est naturellement que
            j'ai suivi une formation de développeur web et web mobile durant
            l'année 2022. C'est suite à cette formation et au stage que j'ai pu
            effectuer au sein de l'association gaea21 (
            <a href="https://gaea21.org" target="_blank">
              gaea21.org
            </a>
            ) que j'ai pris la décision de devenir{" "}
            <b>developpeur full-stack JS.</b>
          </p>
        </div>
      </section>
    </>
  );
}
