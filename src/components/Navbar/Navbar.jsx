import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src={logo} className={styles.logoImage} alt="logo" />
      </Link>
      <Link to="/">
        <h1 className={styles.headline}>Travel Memory</h1>
      </Link>

      <Link to="/rules" className={styles.rules}>
        Rules
      </Link>
    </div>
  );
}
export default Navbar;
