import Router, { useRouter } from "next/router";
import { stringify } from 'querystring';
import PrimaryButton from "../UI/button";
import styles from "./index.module.css";
import Link from "next/link";
import { BurgerSVG } from "../../assets/svg/burger";
import BurgerMenu from "../burger-menu";
import useModal from "../../hooks/useModal";
type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const router = useRouter()
  const { isOpen,
    openModal,
    closeModal } = useModal()

  return (
    <>
    {isOpen&&  <BurgerMenu  closeModal={closeModal}/>}
      <nav className={styles.nav}>

        <div className="wrapper">
          <ul>
            <li className={styles.burgerMenu} onClick={openModal}>
              <div>
                <BurgerSVG />
              </div>
            </li>
            <li className={styles.logo} onClick={() => Router.push('/')}>
              <a>topdancı.az</a> <p>Topdan Al/Topdan Sat</p>
            </li>
            <li className={styles.navbar}>
              <ul>
                <li>
                  <Link href={"/"}>Bütün elanlar</Link>
                </li>
                <li>
                  <Link href={"/topdancilar/"}>Topdançılar</Link>

                </li>
                <li>
                  <Link href={{ pathname: router.pathname, search: `?${stringify({ ...router.query, advert_type: 1 })}` }}>Alıcılar</Link>

                </li>
                <li>
                  <Link href={{ pathname: router.pathname, search: `?${stringify({ ...router.query, advert_type: 0 })}` }} >Satıcılar</Link>

                </li>
              </ul>
            </li>
            <li className={styles.rightButton}>
              <PrimaryButton text="YENİ ELAN" onClick={() => Router.push('yeni-elan')} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
