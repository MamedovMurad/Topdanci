import { BuilderSVG } from "../../assets/svg/buider";
import styles from './index.module.css'
type MenuItemProps = {
  item:any
}
 
const MenuItem:React.FC<MenuItemProps> = ({item}) => {
    return (
        <>
        <li className={styles.MenutItem}>
        <button>
          <BuilderSVG />
        </button>
        <article>{item.name}</article>
        <div className={styles.content}>
            <header>Bütün elanlar</header>
            <ul>
              {
                item?.subcategories.map((sub:any)=>(
<li key={sub.icon}><a href="#">{sub.name}</a></li>
                ))
              }
                
                <li> <a href="">Avtomobillər</a></li>
                <li> <a href="">Motosikletlər və Mopedlər</a></li>
            </ul>
        </div>
      </li>
    </>
    );
}
 
 
export default MenuItem;