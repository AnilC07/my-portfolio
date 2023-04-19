import Link from "next/link";

import classes from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={classes.navigation}>
      <ul className={classes["nav-items"]}>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      {/* <div className={classes["menu-burger"]}>
        <span className="trait-sup"></span>
        <span className="trait-mid"></span>
        <span className="trait-down"></span>
      </div> */}
    </nav>
  );
}

export default Navigation;
