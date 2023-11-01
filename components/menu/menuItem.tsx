import Router from "next/router";
import {BuilderSVG} from "../../assets/svg/buider";
import styles from './index.module.css'
import Link from "next/link";
import {MyComponent} from "../../hooks/useResponsivenenessAdjuster";

type MenuItemProps = {
    item: any,
    setmenu?: any
}

const MenuItem: React.FC<MenuItemProps> = ({item, setmenu}) => {
    const responsive = MyComponent()

    return (
        <>
            <li className={`${styles.MenutItem} ${item.subcategories.length < 1 && styles.menuItemnosub}`}
                onClick={() => item.link ? Router.push(item.link) :
                    (setmenu ? setmenu(item.index) : Router.push('/?category=' + item.id))}>
                {(setmenu || responsive > 684) && <button

                    style={(Router.query?.category == item.id || item?.subcategories?.find((subi: any) => subi.id == Router?.query?.category)) ?
                        {background: '#FFC702'} : (item.link ? {background: '#00a0e4'} : {})}
                    onClick={() => item.link ? Router.push(item.link) :
                        (setmenu ? setmenu(item.index) : Router.push('/?category=' + item.id))
                    }>
                    <BuilderSVG/>
                </button>}
                <article>{item.name}</article>
                {item.subcategories.length > 0 && responsive > 900 && <div className={styles.content}>
                    <header>Bütün elanlar</header>
                    <ul>
                        {
                            item?.subcategories.map((sub: any, index: number) => (
                                <li key={index}><Link href={'/?category=' + sub.id}>{sub.name}</Link></li>
                            ))
                        }


                    </ul>
                </div>}

            </li>
        </>
    );
}


export default MenuItem;