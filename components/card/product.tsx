import styles from "./index.module.css";
import Image from "next/image";
import images from "../../assets/uploads/example.jpg";
import Link from "next/link";
type ProductCardProps = {
  data: {
    title: string;
    address: string;
    date: string;
    minNumber: number;
    price: string;
    photo: string;
    type: "ordinary" | "premium";
    label: "buyer" | "seller";
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <Image
          src={images}
          alt="Picture of the author"
         layout="fill"
        />
      </div>
      <span className={`${styles.label} ${styles[data.label]}`}>
        {data.label === "buyer" ? "Alıcı" : "Satıcı"}
      </span>
      <span>{data.type === "premium"}</span>
      <div className={styles.content}>
        <div>
          <h6>  <Link href="/product/ll">{data.title}</Link></h6>
          <article>
            {data.address} <br /> {data.date}
          </article>
        </div>
        <div>
          <div className={styles.bottomcontent}>
            <p>Minimum sifariş</p> <p>Topdan qiymət</p>
          </div>
          <div>
            <p className={styles.productPrice}>100 Ədəd</p> <p>150 AZN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
