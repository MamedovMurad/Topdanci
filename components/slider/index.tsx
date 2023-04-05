import Image from "next/image";
import styles from "./index.module.css";
import images from "../../assets/uploads/example.jpg";
import useModal from "../../hooks/useModal";
import { useState } from "react";
import Modal from "../modal";

type SliderUIProps = {
  photos: { src: string, alt: string }[]
};

const SliderUI: React.FC<SliderUIProps> = ({ photos }) => {
  const { isOpen, openModal, closeModal } = useModal();

  const [index, setindex] = useState(0)
  function handleModal(index: number) {
    openModal();
    setindex(index)
  }

  return (
    <>
      {(isOpen) && (
        <Modal closeModal={closeModal} pathes={photos} index={index} />
      )}
    <div className={styles.slider}>

   
      <div className={styles.bigImage}>
        <Image
          onClick={() => handleModal(0)}
          src={photos?.length && photos[0].src || ''}
          alt={photos?.length && photos[0].alt || ''}
          layout="fill"
        />
      </div>
      <ul>
        {
          photos?.map((item, index) => (
            <li key={item.src}>
              <Image
                onClick={() => handleModal(index)}
                src={item.src}
                alt={item.alt}
                layout="fill"
              />
            </li>
          ))
        }


      </ul>
    </div>
    </>
  );
};

export default SliderUI;
