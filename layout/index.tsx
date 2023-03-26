import styles from "./index.module.css";
import { UserLoginSVG } from "../assets/svg/userloginsvg";
import Link from "next/link";
import ReactSelectUI from "../components/r-select";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useRouter } from 'next/router'
import { HttpClient } from "../common/api";
import { useEffect, useState } from "react";
type LayoutProps = {
  children: any; //still
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [user, setuser] = useState<null|{name:string, tel:string}>(null)
  const api =  new HttpClient( {headers:{['content-type']:'application/json',Accept:'application/json'}})

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
  if (router.pathname=='/login') {
    return <>{children}</>
  }
  return (
    <>
      <header className={styles.header+' wrapper'}>
        
        <div >
          <p>Dəstək: (+994) 200 10 30</p>
          <div className={styles.headerRIght}>
            <ReactSelectUI width="77px" />

            <div className={styles.headerRIghtChild}>
              <UserLoginSVG />
              <Link href={user?.tel?'/dashboard':"/"}>{user?.tel||'Giriş'} </Link>
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
