import styles from "./index.module.css";
import { UserLoginSVG } from "../assets/svg/userloginsvg";
import Link from "next/link";
import ReactSelectUI from "../components/r-select";
import Nav from "../components/nav";
import Footer from "../components/footer";
type LayoutProps = {
  children: any; //still
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <p>Dəstək: (+994) 200 10 30</p>
          <div className={styles.headerRIght}>
            <ReactSelectUI width="77px" />

            <div className={styles.headerRIghtChild}>
              <UserLoginSVG />
              <Link href={"/"}> Giriş</Link>
            </div>
          </div>
        </div>
      </header>
      <Nav/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
