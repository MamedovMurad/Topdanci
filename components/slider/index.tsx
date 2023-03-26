import Image from "next/image";
import styles from "./index.module.css";
import images from "../../assets/uploads/example.jpg";

type SliderUIProps = {
  photos?:{src:string,alt:string}[]
};

const SliderUI: React.FC<SliderUIProps> = ({photos}) => {
  return (
    <div className={styles.slider}>
      <div className={styles.bigImage}>
      <Image
             src={photos?.length&&photos[0].src||''}
            alt={photos?.length&&photos[0].alt||''}
           layout="fill"
          />
      </div>
      <ul>
        {
          photos?.map(item=>(
            <li key={item.src}>
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
            />
          </li>
          ))
        }
 
     
      </ul>
    </div>
  );
};

export default SliderUI;
