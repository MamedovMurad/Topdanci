import { TelIconSVG } from "../../assets/svg/tel";
import { UserLoginSVG } from "../../assets/svg/userloginsvg";
import Overlay from "../../components/overlay";
import SliderUI from "../../components/slider";
import PrimaryButton from "../../components/UI/button";
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
              <li>Bütün elanlar</li>
              <li>Elektronika</li>
              <li>Televizor</li>
            </ul>
          </div>
          <SliderUI />
          <div className={styles.contentTop}>
            <div>
              <div className={styles.info}>
                <PrimaryButton
                  text="Satıcı"
                  size="3px 10px"
                  font="14px"
                  color="white"
                />
                <h5>Samsung televizorlarını topdan alıram</h5>
                <div className={styles.infocontent}>
                  <div className={styles.bottomcontent}>
                    <p>Minimum sifariş</p> <p>Topdan qiymət</p>
                  </div>
                  <div>
                    <p className={styles.productPrice}>5 Ədəd</p> <p>100 AZN</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <article>Şəhər: Bakı</article>
              <article>
                Məhsul kateqoriyası: <span>Elektronika</span>
              </article>
            </div>
            <div className={styles.buttons}>
              <PrimaryButton
                text="Elanı irəli çək.  1 AZN"
                size="3px 10px"
                font="14px"
              />
              <PrimaryButton
                text="Premium et.  5 AZN"
                size="3px 10px"
                color="white"
                bg="#E61C23"
                font="14px"
              />
              <div>
                <h5>Pərakəndə satış mümkündür</h5>
                <div>
                  <div className={styles.active}>
                    <span>Bəli</span> <span></span>
                  </div>
                  <div>
                    <span>Xeyr</span> <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div>
              <div>
                <label ><UserLoginSVG/>Fəqan</label>
                <p><TelIconSVG/><a href="tel:055 973 63 13">055 973 63 13</a></p>
              </div>
              <ul>
                <li>    Elanın nömrəsi:35537250</li>
                <li>Baxışların sayı: 75</li>
                <li>Yeniləndi: Bugün, 09:55</li>
              </ul>
            </div>
        




            <div className={styles.moreDetail}>
              <h6>Ətraflı</h6>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry`s standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <ProductsContainer />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
