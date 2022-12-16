import { useState } from "react";
import { BuilderSVG } from "../../assets/svg/builder";
import TopSearch from "../topSearch";
import styles from "./index.module.css";
type MenuProps = {};

const Menu: React.FC<MenuProps> = () => {
    const [collapse, setcollapse] = useState(false)
  return (
    <section className={styles.Menu}>
      <div className={styles.search}><TopSearch /></div>

   <div className="wrapper">
   <div className={styles.containermenu} style={collapse?{}:{overflow:'hidden',height:'66px'}} >
        <div onClick={()=>setcollapse(!collapse)}>
          <button style={collapse?{background:'#00A0E4'}:{}}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <article>Hamısı</article>
        </div>

        <ul>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Elektironika</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>İnşaat</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Nəqliyyat</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Elektironika</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>İnşaat</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Nəqliyyat</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Elektironika</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>İnşaat</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Nəqliyyat</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Elektironika</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>İnşaat</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Nəqliyyat</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Elektironika</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>İnşaat</article>
          </li>
          <li>
            <button>
              <BuilderSVG />
            </button>
            <article>Nəqliyyat</article>
          </li>
        </ul>
      </div>
   </div>
    </section>
  );
};

export default Menu;
