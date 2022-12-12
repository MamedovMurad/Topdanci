import Image from "next/image";
import styles from "./index.module.css";
import images from "../../assets/uploads/example.jpg";

type SliderUIProps = {};

const SliderUI: React.FC<SliderUIProps> = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.bigImage}>
      <Image
             src={images}
            alt="Picture of the author"
           layout="fill"
          />
      </div>
      <ul>
        <li>
          <Image
            src={images}
            alt="Picture of the author"
            layout="fill"
          />
        </li>
        <li>
          <Image
            src={images}
            alt="Picture of the author"
            layout="fill"
          />
        </li>
        <li>
          <Image
            src={images}
            alt="Picture of the author"
            layout="fill"
          />
        </li>
        <li>
          <Image
            src={images}
            alt="Picture of the author"
            layout="fill"
          />
        </li>
            <li>
          <Image
            src={images}
            alt="Picture of the author"
            layout="fill"
          />
        </li>
      </ul>
    </div>
  );
};

export default SliderUI;
