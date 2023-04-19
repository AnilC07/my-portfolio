import Link from "next/link";
import classes from "./Footer.module.css";

import { GrMail, GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <div className={classes["contact-action"]}>
          <Link href="/contact">
            <GrMail />
          </Link>
        </div>
        <div className={classes["contact-action"]}>
          {" "}
          <a
            href="https://www.linkedin.com/in/anil-celik-16067011a"
            target="_blank"
          >
            <GrLinkedin />
          </a>
        </div>
      </div>

      <div className={classes.copyright}>
        <p>&copy; {new Date().getFullYear()} Anil CELIK</p>
      </div>
    </footer>
  );
}

export default Footer;
