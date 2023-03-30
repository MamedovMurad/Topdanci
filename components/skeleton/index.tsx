import React from 'react';
import styles from './index.module.css';
interface SkeletonLoaderProps {
  
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ }) => {
  return (
    <>

  
  <div className={`${styles.card} ${styles.loading}`}>
    <div className={styles["image"]}>
      
    </div>
    <div className={styles["content"]}>
      <h4></h4>
      <div className={styles["description"]}>
        
      </div>
    </div>
  </div>
  </>
  );
};

export default SkeletonLoader;