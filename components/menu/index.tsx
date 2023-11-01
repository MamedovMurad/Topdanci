import { useEffect, useState } from "react";
import TopSearch from "../topSearch";
import styles from "./index.module.css";
import MenuItem from "./menuItem";
import { api } from "../../common/api";
import { MyComponent } from "../../hooks/useResponsivenenessAdjuster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CancelSVG } from "../../assets/svg/cancel";
import Router from "next/router";

type MenuProps = {};

const Menu: React.FC<MenuProps> = () => {

  const [collapse, setcollapse] = useState(false)
  const [menu, setMenu] = useState<any>([])
  const [subMenu, setSubMenu] = useState<any>(null)
  const responsive = MyComponent()
  async function fetchMenu(){
    const res = await api.get('categories')
console.log(res.data);
setMenu(res.data)

  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.75,
    slidesToScroll: 3
};


function handleSubmenu(index:number) {

  
  if (menu[index].subcategories.length<1) {
    setcollapse(false)
    return Router.push('/?category=' + menu[index].id)  
  }

  setSubMenu(index)

  setcollapse(true)
  console.log(index);
}

  useEffect(() => {
    fetchMenu()
  }, [])

  console.log(menu[subMenu])
  return (
    <section className={styles.Menu}>
      <div className={styles.search}><TopSearch /></div>

      <div className={styles.menuMobile+" wrapper"}>
        <div className={styles.containermenu}  >
          {
              (responsive>900||!collapse) &&
               <div onClick={() => setcollapse(!collapse)}>
              <button style={collapse ? { background: '#00A0E4' } : {}}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <article>Hamısı</article>
            </div>
          }
        

          <ul className={styles[collapse?'sliderParent':'']}>
            { !(responsive>900||!collapse) &&
              <div className={styles.mobileMenuHeader+" mobileMenuHeader"}>
                <span onClick={(event) => {
                  event.stopPropagation();
                  setcollapse(false);
                  setSubMenu(null)
                }}>
              <CancelSVG/>
            </span>
                <h3>
                  {menu[subMenu]?.name?? 'Kataloq'}
                </h3>
              </div>
            }
            {
              collapse ? 
              <>
              
              {(subMenu!==null? menu[subMenu]?.subcategories:menu).map((item:any,index:number) => (
                <MenuItem key={index} item={{...item,index}} setmenu={subMenu===null&&handleSubmenu} />
              ))}
             {subMenu===null && <MenuItem  item={{name:'Topdançılar',link:'/topdancilar',subcategories:[]}} setmenu={handleSubmenu}/> }
              </>
              
              
              : 
              responsive<686? 
                <Slider {...settings} arrows={false} className={styles.sliderMenu}>
                {  menu.slice(0, 8).map((item:any,index:number) => (
              <MenuItem  key={index}  item={{...item, index}} setmenu={handleSubmenu}/> ))}
              </Slider> :

              menu.slice(0, 8).map((item:any,index:number) => (
              <MenuItem  key={index}  item={item}/> )) }  
            




          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
