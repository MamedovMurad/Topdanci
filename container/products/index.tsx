import Link from "next/link";
import ProductCard from "../../components/card/product";
import PrimaryButton from "../../components/UI/button";
import styles from "./index.module.css";
import SkeletonLoader from "../../components/skeleton";



type ProductsContainerProps = {
  style?: any,
  list?: any,
  isproduct?: boolean,
  title?: string,
  seletedUrl?: string,
  isNotTop?: boolean,
  onClick?: any
};

const ProductsContainer: React.FC<ProductsContainerProps> = ({ style = {}, list, isproduct, title, seletedUrl, isNotTop, onClick }) => {
  const urls = [
    { link: '/alicilar', title: 'Alıcılar' },
    { link: '/saticilar', title: 'Satıcılar' },

  ]


  return (
    <section className={styles.productContainer} style={style}>
      {
        (style?.transform && isproduct && !isNotTop) && <header>
          <ul>
            <li>Elanlar</li>
            {
              urls.map(item => (
                <li key={item.title} className={item.link == seletedUrl ? styles.TabActive : ''}>
                  <Link href={item.link}>{item.title}</Link>

                </li>
              ))
            }

            <li className={!seletedUrl ? styles.TabActive : ''}>
              <Link href={'/'}>Hamısı</Link>

            </li>
          </ul>
        </header>
      }
      <main>
        {title && <header>
          <ul>
            <li>{title}</li>
            {isproduct && <li>Hamısını göstər</li>}
          </ul>
        </header>}
        <div className={styles.productmain}>
          {list || <div className={styles.skeletonArea}>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </div>}



        </div>
        {
          isNotTop && <div className={styles.buttonParent}><PrimaryButton text="Hamısını göstər" color="white" bg="#E61C23" size="9px 7%" onClick={onClick} /></div>
        }
      </main>
    </section>
  );
};

export default ProductsContainer;
