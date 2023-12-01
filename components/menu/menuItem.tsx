import Router from "next/router";
import { BuilderSVG } from "../../assets/svg/buider";
import styles from "./index.module.css";
import Link from "next/link";
import { MyComponent } from "../../hooks/useResponsivenenessAdjuster";

type MenuItemProps = {
  item: any;
  setmenu?: any;
  setActiveMenu?: (param: any) => void;
  activeItem?: any;
};

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  setmenu,
  setActiveMenu,
  activeItem,
}) => {
  const responsive = MyComponent();

  const handleClick = () => {
    if (responsive < 900) {
      item.link
        ? Router.push(item.link)
        : setmenu
        ? setmenu(item.index)
        : Router.push("/?category=" + item.id);
    }
    setmenu && setmenu(item.index);
    if (setActiveMenu) {
      if (activeItem?.id === item.id) {
        return setActiveMenu(null);
      }
      return setActiveMenu(item);
    }
  };

  return (
    <>
      <li
        className={`${
          styles.MenutItem +
          " " +
          (activeItem?.id == item.id ? styles.MenutItemActive : "")
        } ${item.subcategories.length < 1 && styles.menuItemnosub}`}
        onClick={handleClick}
      >
        {(setmenu || responsive > 684) && (
          <button
            style={
              (item?.subcategories?.find(
                (subi: any) => subi.id == Router?.query?.category
              ) &&
                activeItem === null) ||
              activeItem?.id === item.id
                ? { background: "#FFC702" }
                : {}
            }
            /*            onClick={() =>
              item.link
                ? Router.push(item.link)
                : setmenu
                ? setmenu(item.index)
                : Router.push("/?category=" + item.id)
            } */
          >
            <BuilderSVG />
          </button>
        )}
        <article>{item.name}</article>
        {item.subcategories.length > 0 && responsive > 900 && (
          <div className={styles.content}>
            <header>Bütün elanlar</header>
            <ul>
              {item?.subcategories.map((sub: any, index: number) => (
                <li key={index}>
                  <Link href={"/?category=" + sub.id}>{sub.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default MenuItem;
