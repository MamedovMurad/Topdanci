import React, { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { UserLoginSVG } from "../../assets/svg/userloginsvg";
import useModal from "../../hooks/useModal";

import { MobileLogo } from "../../assets/svg/mobilelogo";
import { ArrowSVG } from "../../assets/svg/Arrow";
import { CancelSVG } from "../../assets/svg/cancel";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { HelpCenterSVG } from "../../assets/svg/destek";
import { ValletSVG } from "../../assets/svg/vallet";
import { FacebookSVG } from "../../assets/svg/facebook";
import { InstagramSVG } from "../../assets/svg/instagram";
import { LinkedinSVG } from "../../assets/svg/linkedin";
import { YoutubeSVG } from "../../assets/svg/youtube";
import { stringify } from "querystring";
import { useRouter } from "next/router";
interface BurgerMenuProps {
  closeModal: () => void;
  user: null | { name: string; tel: string };
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ closeModal, user }) => {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(3);
  const [activeLang, setactiveLang] = useState("AZ");
  const router = useRouter();
  function setActiveLangHandle(param: string) {
    setIsOpen(false);
    setactiveLang(param);
  }
  return (
    <div className={styles.burgerMenuParent} onClick={closeModal}>
      <div
        className={styles.burgerMenu}
        onClick={(event) => event.stopPropagation()}
      >
        <header>
          <div>
            <div>
              <span {...buttonProps}>
                {activeLang} <ArrowSVG />
              </span>
            </div>
            <ul className={isOpen ? "visible" : "hidden"} role="menu">
              <li onClick={() => setActiveLangHandle("AZ")}>AZ </li>
              <li onClick={() => setActiveLangHandle("EN")}>EN </li>
            </ul>
          </div>
          <div>
            <MobileLogo />
          </div>
          <div onClick={closeModal}>
            <CancelSVG width={14} height={14} />
          </div>
        </header>
        <main>
          <ul>
            <li>
              <span>
                <UserLoginSVG />
              </span>{" "}
              <Link href={"/dashboard"}>
                {" "}
                {user?.name?.slice(0, 6) || user?.tel || "Giriş"}
              </Link>
            </li>
            <li>
              <span>
                <ValletSVG />
              </span>{" "}
              <Link href={""}>Balans artımı</Link>
            </li>
            <li>
              <span>
                <HelpCenterSVG />
              </span>{" "}
              <Link href={""}>Dəstək</Link>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <Link href={"/topdancilar"}>Topdançılar</Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/",
                  search: `?${stringify({ ...router.query, advert_type: 1 })}`,
                }}
              >
                Alıcılar
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/",
                  search: `?${stringify({ ...router.query, advert_type: 0 })}`,
                }}
              >
                Satıcılar
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <Link href={""}>Layihə haqqında</Link>
            </li>
            <li>
              {" "}
              <Link href={""}>Ödənişli xidmətlər</Link>
            </li>
            <li>
              {" "}
              <Link href={""}>Paketlər</Link>
            </li>
            <li>
              {" "}
              <Link href={""}>Saytda reklam</Link>
            </li>
          </ul>

          {/*         <ul className={styles.links}>
            <li>Əlaqə</li>
            <li><span><FacebookSVG /></span> <Link href={''}>Facebook</Link></li>
            <li><span><InstagramSVG /></span> <Link href={''}>Instagram</Link></li>
            <li><span><LinkedinSVG /></span> <Link href={''}>Linkedin</Link></li>
            <li><span><YoutubeSVG /></span> <Link href={''}>Youtube</Link></li>
          </ul> */}
        </main>
      </div>
    </div>
  );
};

export default BurgerMenu;
