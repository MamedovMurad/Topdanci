import styles from "./index.module.css";
import { UserLoginSVG } from "../assets/svg/userloginsvg";
import Link from "next/link";
import ReactSelectUI from "../components/r-select";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useRouter } from 'next/router'

import { useEffect, useState } from "react";
import { api } from "../common/api";
import { MyComponent } from "../hooks/useResponsivenenessAdjuster";
type LayoutProps = {
  children: any; //still
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [user, setuser] = useState<null|{name:string, tel:string}>(null)


  async function  fetchUser(){
const respose  = await api.get('user/info')
setuser(respose)
  }
  useEffect(() => {
    if (typeof window !== 'undefined'&&localStorage.getItem('agent')) {
   
      fetchUser()
    }
  }, [])
  
  const router = useRouter()
  if (router.pathname==='/login') {
    return <>{children}</>
  }
  return (
    <>
      <header className={styles.header+' wrapper'}>
        
        <div >
          <a href="tel:+9942001030">Dəstək: (+994) 200 10 30</a>
          <div className={styles.headerRIght}>
            <ReactSelectUI width="77px" />

            <div className={styles.headerRIghtChild}>
              <UserLoginSVG />
              <Link href={user?.tel?'/dashboard':"/login"}>{ (user?.name?.slice(0,6)||user?.tel)||'Giriş'} </Link>
            </div>
          </div>
        </div>
      </header>
      <Nav/>
      <main >{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
