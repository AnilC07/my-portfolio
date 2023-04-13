import Image from "next/image";
import classes from "./Header.module.css";
import Navigation from "../UI/Navigation";

function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.titre}>
          <h1>ANIL CELIK</h1>
          <h2>Dev Full-Stack JS</h2>
        </div>
        <div className={classes.image}>
          <Image
            src="/images/anil.jpg"
            alt="image du developpeur"
            width={100}
            height={100}
          />
        </div>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
