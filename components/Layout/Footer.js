import Link from "next/link";
import classes from "./Footer.module.css";

import { GrMail, GrLinkedin } from "react-icons/gr";

function Footer(props) {
  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <Link href="/contact">
          <GrMail />
        </Link>
        <a href="https://www.linkedin.com/in/anil-celik-16067011a" target='_blank'>

          <GrLinkedin />
</a>
      </div>

      <div className={classes.copyright}>
        <p>&copy; {new Date().getFullYear()} Anil CELIK</p>
      </div>
    </footer>
  );
}

export default Footer;
