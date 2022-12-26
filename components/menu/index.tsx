import { useState } from "react";
import { BuilderSVG } from "../../assets/svg/buider";

import TopSearch from "../topSearch";
import styles from "./index.module.css";
import MenuItem from "./menuItem";
type MenuProps = {};

const Menu: React.FC<MenuProps> = () => {
    const [collapse, setcollapse] = useState(false)
  return (
    <section className={styles.Menu}>
      <div className={styles.search}><TopSearch /></div>

   <div className="wrapper">
   <div className={styles.containermenu}  >
        <div onClick={()=>setcollapse(!collapse)}>
          <button style={collapse?{background:'#00A0E4'}:{}}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <article>Hamısı</article>
        </div>

        <ul>
          {
 collapse?[1,2,3,4,5,6,7,8,9,99,12,24].map(item=>(
  <MenuItem key={item}/>
 )):[1,2,3,4,5,6,7,8,9,99,12,24].slice(0,8).map(item=>(
  <MenuItem key={item}/>
 ))
          }
         
   
{/*        <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/> */}
    
        </ul>
      </div>
   </div>
    </section>
  );
};

export default Menu;
