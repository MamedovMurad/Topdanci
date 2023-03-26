import { useEffect, useState } from "react";
import ProductCard from "../../components/card/product";
import PrimaryButton from "../../components/UI/button";
import styles from "./index.module.css";
import { api } from "../../common/api";


type ProductsContainerProps = {
  style?: any
};

const ProductsContainer: React.FC<ProductsContainerProps> = ({ style = {} }) => {

  const [products, setproducts] = useState([])
  async function fetchProducts() {
    const response = await api.get('adverts')
    setproducts(response.data.adverts)
    console.log(response);

  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className={styles.productContainer} style={style}>
      {
        style?.transform && <header>
          <ul>
            <li>Elanlar</li>
            <li>
              <a href="">Alıcılar</a>
            </li>
            <li>
              <a href="">Satıcılar</a>
            </li>
            <li className={styles.TabActive}>
              <a href="">Hamısı</a>
            </li>
          </ul>
        </header>
      }
      <main>
        <header>
          <ul>
            <li>Premium elanlar</li>
            <li>Hamısını göstər</li>
          </ul>
        </header>
        <div className={styles.productmain}>
          {products.map((item: any, index: number) => (
            <ProductCard
              key={index}
              data={{
                id:item.id,
                title: item.title,
                address: "Bakı",
                minNumber: item.min_order,
                price: item.wholesale_price,
                date: item.date,
                photo: item.image?.src,
                label: item.advert_type?"buyer":'seller',
                type: "premium"
              }}
            />
          ))}



        </div>
        <div className={styles.buttonParent}><PrimaryButton text="Hamısını göstər" color="white" bg="#E61C23" size="9px 7%" /></div>
      </main>
    </section>
  );
};

export default ProductsContainer;
