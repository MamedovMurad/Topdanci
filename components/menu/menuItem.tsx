import Router from "next/router";
import { BuilderSVG } from "../../assets/svg/buider";
import styles from "./index.module.css";
import Link from "next/link";
import { MyComponent } from "../../hooks/useResponsivenenessAdjuster";
import { useEffect, useState } from "react";
import { OutsideClickDetector } from "../../hooks/OutsideClickDetector";
import { json } from "stream/consumers";

type MenuItemProps = {
  item: any;
  callBack?: any;
  setmenu?: any;
  setisActiveMenu: (param: boolean) => void;
};

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  setmenu,
  callBack,
  setisActiveMenu,
}) => {
  const responsive = MyComponent();
  const [activeItem, setactiveItem] = useState(-1);

  function handleClick() {
    setisActiveMenu(true);
    setactiveItem(item.id);
  }

  useEffect(() => {
    callBack && callBack(activeItem);
    setisActiveMenu && setisActiveMenu(activeItem === -1 ? false : true);
  }, [activeItem]);

  const position: any = {
    0: { left: "-95px" },
    6: { right: "-110px" },
    7: { right: "-10px" },
  };

  return (
    <>
      <li
        className={`${styles.MenutItem} ${
          item.subcategories.length < 1 && styles.menuItemnosub
        } ${activeItem === item.id && styles.active}`}
        onClick={handleClick}
      >
        {(setmenu || responsive > 684) && (
          <OutsideClickDetector
            onOutsideClick={() => {
              setactiveItem(-1);
            }}
          >
            <button
              style={
                Router.query?.category == item.id ||
                item?.subcategories?.find(
                  (subi: any) => subi.id == Router?.query?.category
                )
                  ? { background: "#FFC702" }
                  : item.link
                  ? { background: "#00a0e4" }
                  : {}
              }
              onClick={() =>
                item.link
                  ? Router.push(item.link)
                  : setmenu
                  ? setmenu(item.index)
                  : Router.push("/?category=" + item.id)
              }
            >
              <BuilderSVG />
            </button>
          </OutsideClickDetector>
        )}
        <article>{item.name}</article>
        {item.subcategories.length > 0 && responsive > 900 && (
          <div className={styles.content} style={position[item.index]}>
            <header>Bütün elanlar</header>

            <ul>
              {item?.subcategories.map((sub: any, index: number) => (
                <li key={index}>
                  <Link href={"/?category=" + sub.id}>
                    {sub.name + item.index}
                  </Link>
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
