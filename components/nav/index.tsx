import Router from "next/router";
import PrimaryButton from "../UI/button";
import styles from "./index.module.css";
import Link from "next/link";
type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <nav className={styles.nav}>
<div className="wrapper">
<ul>
        <li className={styles.logo} onClick={()=>Router.push('/')}>
          <a>topdancı.az</a> <p>Topdan Al/Topdan Sat</p>
        </li>
        <li className={styles.navbar}>
          <ul>
            <li>
              <a href="">Bütün elanlar</a>
            </li>
            <li>
              <Link href={"/topdancilar/"}>Topdançılar</Link>
              
            </li>
            <li>
            <Link href={"/alicilar"}>Alıcılar</Link>
           
            </li>
            <li>
            <Link href={"/saticilar/"}>Satıcılar</Link>
          
            </li>
          </ul>
        </li>
        <li className={styles.rightButton}>
          <PrimaryButton text="YENİ ELAN" onClick={()=>Router.push('yeni-elan')} />
        </li>
      </ul>
</div>
    </nav>
  );
};

export default Nav;
