import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import githublogo from "../../assets/github-logo.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.ownLinks}>
        <Link to="/about-us" className={styles.aboutUs}>
          About us
        </Link>
        <a
          className={styles.githubLink}
          href="https://github.com/MarianneH/Travel-memory-game"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githublogo} alt="github-logo" />
          Github Project
        </a>
      </div>

      <a
        className={styles.link}
        href="https://icons8.com/"
        target="_blank"
        rel="noreferrer"
      >
        Icons from Icons8.com
      </a>
    </div>
  );
}

export default Footer;
