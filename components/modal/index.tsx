import React, { useState } from 'react';
import styles from './index.module.css';
interface ModalProps {
  closeModal?: () => void,
  pathes: { src: string, alt: string }[],
  index: number
}


const Modal: React.FC<ModalProps> = ({ closeModal, pathes, index }) => {
  const [selected, setselected] = useState(index)
  function handleClick(event: any) {
    event.stopPropagation();
    if (selected > 0) {
      setselected(selected - 1)
    } else {
      setselected(pathes.length - 1)
    }
  }
  function handleClickRight(event: any) {
    event.stopPropagation();
    if (pathes.length - 1 > selected) {
      setselected(selected + 1)
    } else {
      setselected(index)
    }
  }
  console.log(selected, 'index');

  return (
    <section className={styles.modalParent} onClick={closeModal}>
      <div className={styles.modal} onClick={(event: any) => event.stopPropagation()}>
        <div className={styles.leftArrow} onClick={handleClick}></div>
        <img src={pathes[selected].src} alt="" />
        <div className={styles.rightArrow} onClick={handleClickRight}></div>
      </div>
    </section>
  );
};

export default Modal;