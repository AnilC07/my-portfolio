import Image from "next/image";
import classes from "./ProjectCard.module.css";
import Link from "next/link";

function Card(props) {
  console.log(props)
  const {titre, image, description} = props
  return (
    
    <div className={classes.card}>
    <Link href="/">
      <div className={classes.vignette}>
        <Image src={`/images/projets/${titre}/${image}`} alt={`vignette du projet ${titre}`} width="170" height="130" />
      </div>
      </Link>
      <div className={classes.contenue}>
        <h3>{titre}</h3>
        <p>{description}</p>
      </div>
      
    </div>
    
  );
}

export default Card;
