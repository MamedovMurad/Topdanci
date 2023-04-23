import React, { useState } from 'react';
import styles from './index.module.css';
import { CancelSVG } from '../../assets/svg/cancel';
import { useSwipeable } from 'react-swipeable';
interface ModalProps {
  closeModal?: () => void,
  pathes: { src: string, alt: string }[],
  index: number
}


const Modal: React.FC<ModalProps> = ({ closeModal, pathes, index }) => {
  const [selected, setselected] = useState(index)
  
  function handleClick(event?: any) {
    event&& event.stopPropagation();
    if (selected > 0) {
      setselected(selected - 1)
    } else {
      setselected(pathes.length - 1)
    }
  }
  function handleClickRight(event?: any) {
    event&& event.stopPropagation();
    if (pathes.length - 1 > selected) {
      setselected(selected + 1)
    } else {
      setselected(index)
    }
  }
  const handlers = useSwipeable({
    onSwiped: (eventData) =>{
     if (eventData.dir==='Right') {
      return handleClickRight()
     }
     return handleClick()
    },

  });

  return (
    <section className={styles.modalParent} onClick={closeModal}>
      <div className={styles.modal} onClick={(event: any) => event.stopPropagation()}>
        <span className={styles.modalCancel} onClick={closeModal}><CancelSVG color='white'/></span>
        <div className={styles.leftArrow} onClick={handleClick}></div>
        <img src={pathes[selected].src} alt="" {...handlers}/>
        <div className={styles.rightArrow} onClick={handleClickRight}></div>
      </div>
    </section>
  );
};

export default Modal;