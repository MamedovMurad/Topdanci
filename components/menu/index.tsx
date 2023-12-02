import { useEffect, useRef, useState } from "react";
import TopSearch from "../topSearch";
import styles from "./index.module.css";
import MenuItem from "./menuItem";
import { api } from "../../common/api";
import { MyComponent } from "../../hooks/useResponsivenenessAdjuster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CancelSVG } from "../../assets/svg/cancel";
import Router, { useRouter } from "next/router";
import Link from "next/link";

type MenuProps = {
  setisActiveMenu?: (param: boolean) => void;
  isActiveMenu?: boolean;
};

const Menu: React.FC<MenuProps> = ({ setisActiveMenu, isActiveMenu }) => {
  const [collapse, setcollapse] = useState(false);
  const [activeItem, setactiveItem] = useState<any>(null);
  const [menu, setMenu] = useState<any>([]);
  const [subMenu, setSubMenu] = useState<any>(null);
  const responsive = MyComponent();
  async function fetchMenu() {
    const res = await api.get("categories");
    console.log(res.data);
    setMenu(res.data);
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.75,
    slidesToScroll: 3,
  };

  const router = useRouter();
  function handleSubmenu(index: number) {
    if (menu[index].subcategories.length < 1) {
      setcollapse(false);
      return Router.push("/?category=" + menu[index].id);
    }

    setSubMenu(index);

    setcollapse(true);
    console.log(index);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
    setcollapse(false);
  }, [router]);

  const menuRef = useRef<any>(null);

  const callBakForExpandMenu = (param: number) => {
    if (param === -1) {
      menuRef.current.paddingBottom = "0";
    } else {
      menuRef.current.paddingBottom = "150px";
    }
  };

  function splitArray(inputArray: any, chunkSize: any) {
    var resultArray = [];
    for (var i = 0; i < inputArray.length; i += chunkSize) {
      resultArray.push(inputArray.slice(i, i + chunkSize));
    }
    return resultArray;
  }

  console.log(activeItem, "jj");

  return (
    <section
      className={styles.Menu}
      ref={menuRef}
      style={isActiveMenu ? { paddingBottom: "600px" } : {}}
    >
      <div className={styles.search}>
        <TopSearch />
      </div>

      <div className={styles.menuMobile + " wrapper"}>
        <div className={styles.containermenu}>
          {(responsive > 900 || !collapse) && (
            <div onClick={() => setcollapse(!collapse)}>
              <button style={collapse ? { background: "#00A0E4" } : {}}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <article>Hamısı</article>
            </div>
          )}

          <ul className={styles[collapse ? "sliderParent" : ""]}>
            {!(responsive > 900 || !collapse) && (
              <div className={styles.mobileMenuHeader + " mobileMenuHeader"}>
                <span
                  onClick={(event) => {
                    event.stopPropagation();
                    setcollapse(false);
                    setSubMenu(null);
                  }}
                >
                  <CancelSVG />
                </span>
                <h3>{menu[subMenu]?.name ?? "Kataloq"}</h3>
              </div>
            )}
            {collapse ? (
              <>
                {(subMenu !== null ? menu[subMenu]?.subcategories : menu).map(
                  (item: any, index: number) => (
                    <MenuItem
                      key={index}
                      item={{ ...item, index }}
                      setActiveMenu={setactiveItem}
                      activeItem={activeItem}
                      collapse={collapse}
                    />
                  )
                )}
                {subMenu === null && (
                  <MenuItem
                    item={{
                      name: "Topdançılar",
                      link: "/topdancilar",
                      subcategories: [],
                    }}
                    setActiveMenu={setactiveItem}
                    activeItem={activeItem}
                    collapse={collapse}
                  />
                )}
              </>
            ) : responsive < 686 ? (
              <Slider
                {...settings}
                arrows={false}
                className={styles.sliderMenu}
              >
                {menu.slice(0, 8).map((item: any, index: number) => (
                  <MenuItem
                    key={index}
                    item={{ ...item, index }}
                    setmenu={handleSubmenu}
                  />
                ))}
              </Slider>
            ) : (
              menu
                .slice(0, 8)
                .map((item: any, index: number) => (
                  <MenuItem
                    key={index}
                    item={{ ...item, index }}
                    setActiveMenu={setactiveItem}
                    activeItem={activeItem}
                    collapse={collapse}
                  />
                ))
            )}
          </ul>
        </div>
      </div>
      {activeItem && responsive > 900 && (
        <div className={"wrapper "}>
          <div className={styles.outsideCollapse}>
            <header>Bütün elanlar</header>
            <hr />
            <ul
              style={
                activeItem?.subcategories?.length / 9 > 1
                  ? {
                      height:
                        (activeItem?.subcategories?.length / 9) * 60 + "px",
                    }
                  : {}
              }
            >
              {activeItem?.subcategories?.map((item: any) => (
                <li key={item.id}>
                  <Link href={"/?category=" + item.id}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
