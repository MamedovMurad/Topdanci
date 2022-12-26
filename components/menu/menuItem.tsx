import { BuilderSVG } from "../../assets/svg/buider";
import styles from './index.module.css'
type MenuItemProps = {}
 
const MenuItem:React.FC<MenuItemProps> = () => {
    return (
        <>
        <li className={styles.MenutItem}>
        <button>
          <BuilderSVG />
        </button>
        <article>Elektironika</article>
        <div className={styles.content}>
            <header>Bütün elanlar</header>
            <ul>
                <li><a href="#">Ehtiyyat hissələri və aksesuarlar</a></li>
                <li> <a href="">Avtomobillər</a></li>
                <li> <a href="">Motosikletlər və Mopedlər</a></li>
            </ul>
        </div>
      </li>
    </>
    );
}
 
 
export default MenuItem;