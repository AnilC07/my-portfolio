import classes from "./About.module.css";

function About(props) {
  return (
    <section className={classes.about}>
      <div className="section-title">
        <h2>Qui suis-je ?</h2>
      </div>
      <div className={classes.text}>
        <p>
          Je me prénomme Anil, j'ai 31 ans et je pratique le developpement
          depuis un peu plus d'un an.
        </p>

        <p>
          De formation électronique, j'ai travaillé un peu plus de trois ans
          dans ce secteur.
        </p>

        <p>
          Interesser par le numerique (le web et les jeux videos
          principalement), j'ai commencé a m'interesser aux divers langages
          informatiques qui permettent de leur donner vies (HTML/CSS,
          JavaScript, C#). J'ai rapidement pris gout au developpement web et
          pris la decision de tout lacher pour me lancer dans une carriere de
          developpeur web.
        </p>

        <p>
          C'est naturellement que j'ai suivi une formation de développeur web et
          web mobile de 9 mois (1 mois d'integration numerique / 3 mois de
          Bootcamp / 1 mois d'approfondissement de Node.js et ReactJS / 3 mois
          de stages + 1 mois de benevolat) durant l'année 2022. C'est suite à ce
          stage formation et au stage que j'ai pu effectuer au sein de
          l'association gaea21 (
          <a href="https://gaea21.org" target="_blank">
            gaea21.org
          </a>
          ) que j'ai pris la décision de devenir{" "}
          <b>developpeurfull-stack JS.</b>
        </p>
      </div>
    </section>
  );
}

export default About;
