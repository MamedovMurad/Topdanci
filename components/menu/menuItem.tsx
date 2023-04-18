import Router from "next/router";
import { BuilderSVG } from "../../assets/svg/buider";
import styles from './index.module.css'
import Link from "next/link";
type MenuItemProps = {
  item: any
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <>
      <li className={`${styles.MenutItem} ${item.subcategories.length <1 && styles.menuItemnosub}`}>
        <button onClick={() =>item.link? Router.push(item.link) :  Router.push('/?category=' + item.id)}>
          <BuilderSVG />
        </button>
        <article>{item.name}</article>
        {item.subcategories.length > 0 && <div className={styles.content}>
          <header>Bütün elanlar</header>
          <ul>
            {
              item?.subcategories.map((sub: any, index: number) => (
                <li key={index}> <Link href={'/?category=' + sub.id}>{sub.name}</Link></li>
              ))
            }


          </ul>
        </div>}

      </li>
    </>
  );
}


export default MenuItem;