import Overlay from "../../components/overlay";
import SliderUI from "../../components/slider";
import ProductsContainer from "../../container/products";
import styles from "./index.module.css";
type ProductDetailProps = {};

const ProductDetail: React.FC<ProductDetailProps> = () => {
  return (
    <section className={styles.productPage}>
      <Overlay />
      <div className="wrapper">
        <div className={styles.productPagearea}>
          <div>
            <ul className={styles.links}>
              <li>Bütün  elanlar</li>
              <li>Elektronika</li>
              <li>Televizor</li>
            </ul>
          </div>
          <SliderUI />
          <ProductsContainer/>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
