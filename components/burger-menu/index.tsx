import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import { UserLoginSVG } from '../../assets/svg/userloginsvg';
import useModal from '../../hooks/useModal';
interface BurgerMenuProps {
  closeModal:()=>void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({closeModal }) => {
 
  return (
    <div className={styles.burgerMenuParent} onClick={closeModal}> 
        <div className={styles.burgerMenu}>
          <header></header>
          <main>
            <ul>
              <li><span><UserLoginSVG/></span> <Link href={''}>Giriş</Link></li>
              <li><span><UserLoginSVG/></span> <Link href={''}>Balans artımı</Link></li>
              <li><span><UserLoginSVG/></span> <Link href={''}>Dəstək</Link></li>
            </ul>
            <ul>
              <li> <Link href={''}>Layihə haqqında</Link></li>
              <li> <Link href={''}>Ödənişli xidmətlər</Link></li>
              <li> <Link href={''}>Paketlər</Link></li>
              <li> <Link href={''}>Saytda reklam</Link></li>
            </ul>
            <ul className={styles.links}>
              <li>Əlaqə</li>
              <li><span><UserLoginSVG/></span> <Link href={''}>Facebook</Link></li>
              <li><span><UserLoginSVG/></span> <Link href={''}>Instagram</Link></li>
              <li><span><UserLoginSVG/></span> <Link href={''}>Linkedin</Link></li>
              <li><span><UserLoginSVG/></span> <Link href={''}>Youtube</Link></li>
            </ul>
          </main>
        </div>
    </div>
  );
};

export default BurgerMenu;