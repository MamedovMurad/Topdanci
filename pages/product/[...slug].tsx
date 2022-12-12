import SliderUI from "../../components/slider";
import styles from './index.module.css'
type ProductDetailProps = {}
 
const ProductDetail:React.FC<ProductDetailProps> = () => {
    return (
        <section className={styles.productPage}>
            <div><ul><li></li></ul></div>
          <SliderUI/>
        </section>
    );
}
 
 
export default ProductDetail;