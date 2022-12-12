import PrimaryButton from "../UI/button";
import styles from "./index.module.css";
type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logo}>
          <a>topdancı.az</a> <p>Topdan Al/Topdan Sat</p>
        </li>
        <li className={styles.navbar}>
          <ul>
            <li>
              <a href="">Bütün elanlar</a>
            </li>
            <li>
              <a href="">Topdançılar</a>
            </li>
            <li>
              <a href="">Alıcılar</a>
            </li>
            <li>
              <a href="">Satıcılar</a>
            </li>
          </ul>
        </li>
        <li className={styles.rightButton}>
          <PrimaryButton text="YENİ ELAN" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
