import { useEffect, useState } from "react";
import { BuilderSVG } from "../../assets/svg/buider";

import TopSearch from "../topSearch";
import styles from "./index.module.css";
import MenuItem from "./menuItem";
import { api } from "../../common/api";
import { MyComponent } from "../../hooks/useResponsivenenessAdjuster";


type MenuProps = {};

const Menu: React.FC<MenuProps> = () => {

  const [collapse, setcollapse] = useState(false)
  const [menu, setMenu] = useState([])
  const responsive = MyComponent()
  async function fetchMenu(){
    const res = await api.get('categories')
console.log(res.data);
setMenu(res.data)

  }
  useEffect(() => {
    fetchMenu()
  }, [])
  

  
  return (
    <section className={styles.Menu}>
      <div className={styles.search}><TopSearch /></div>

      <div className={styles.menuMobile+" wrapper"}>
        <div className={styles.containermenu}  >
          <div onClick={() => setcollapse(!collapse)}>
            <button style={collapse ? { background: '#00A0E4' } : {}}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <article>Hamısı</article>
          </div>

          <ul>
            {
              collapse ? menu.map((item,index) => (
                <MenuItem key={index} item={item}/>
              )) :  <> {menu.slice(0, responsive>900?7:3).map((item,index) => (
                <MenuItem  key={index}  item={item}/>
              )) }  <MenuItem  item={{name:'Topdançılar',link:'/topdancilar',subcategories:[],}}/> </>
            }




          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
