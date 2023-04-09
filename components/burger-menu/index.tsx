import React from 'react';
import styles from './index.module.css';
interface BurgerMenuProps {
  
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ }) => {
  return (
    <div className={styles.burgerMenuParent}> 
        <div className={styles.burgerMenu}></div>
    </div>
  );
};

export default BurgerMenu;