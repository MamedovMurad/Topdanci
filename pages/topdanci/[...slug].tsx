import React from 'react';
import styles from './index.module.css';
interface TopdanciProps {
  
}

const Topdanci: React.FC<TopdanciProps> = ({ }) => {
  return (
    <div className={styles.topdanci}> 
        <div className={styles.banner}>

        </div>

        <div className="wrapper">
        <main>
            <h4>Topdançılar/EFOR MMC</h4>
            <div className={styles.bgImage}></div>
        </main>
        </div>
    </div>
  );
};

export default Topdanci;