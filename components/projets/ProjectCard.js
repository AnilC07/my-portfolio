import Image from "next/image";
import classes from "./ProjectCard.module.css";
import Link from "next/link";

function Card(props) {
  return (
    
    <div className={classes.card}>
    <Link href="/">
      <div className={classes.vignette}>
        <Image src="/images/trillo.png" alt="" width="170" height="130" />
      </div>
      </Link>
      <div className={classes.contenue}>
        <h3>Titre</h3>
        <p>description</p>
      </div>
      
    </div>
    
  );
}

export default Card;
