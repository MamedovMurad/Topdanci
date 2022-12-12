import ProductCard from "../../components/card/product";
import PrimaryButton from "../../components/UI/button";
import styles from "./index.module.css";

type ProductsContainerProps = {};

const ProductsContainer: React.FC<ProductsContainerProps> = () => {
  return (
    <section className={styles.productContainer}>
      <header>
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
      <main>
        <header>
          <ul>
            <li>Premium elanlar</li>
            <li>Hamısını göstər</li>
          </ul>
        </header>
        <div className={styles.productmain}>
          <ProductCard
           
            data={{
              title: "Samsung televizorlarını topdan alıram",
              address: "Bakı",
              minNumber: 100,
              price: "150 AZN",
              date: "Bu gün, 18:50",
              photo:'../../assets/uploads/example.jpg',
              label:"buyer",
              type:"premium"
            }}
          />
                <ProductCard
           
           data={{
             title: "Samsung televizorlarını topdan alıram",
             address: "Bakı",
             minNumber: 100,
             price: "150 AZN",
             date: "Bu gün, 18:50",
             photo:'../../assets/uploads/example.jpg',
             label:"buyer",
             type:"premium"
           }}
         />
               <ProductCard
           
           data={{
             title: "Samsung televizorlarını topdan alıram",
             address: "Bakı",
             minNumber: 100,
             price: "150 AZN",
             date: "Bu gün, 18:50",
             photo:'../../assets/uploads/example.jpg',
             label:"buyer",
             type:"premium"
           }}
         />
                        <ProductCard
           
           data={{
             title: "Samsung televizorlarını topdan alıram",
             address: "Bakı",
             minNumber: 100,
             price: "150 AZN",
             date: "Bu gün, 18:50",
             photo:'../../assets/uploads/example.jpg',
             label:"buyer",
             type:"premium"
           }}
         />
                        <ProductCard
           
           data={{
             title: "Samsung televizorlarını topdan alıram",
             address: "Bakı",
             minNumber: 100,
             price: "150 AZN",
             date: "Bu gün, 18:50",
             photo:'../../assets/uploads/example.jpg',
             label:"buyer",
             type:"premium"
           }}
         />
                        <ProductCard
           
           data={{
             title: "Samsung televizorlarını topdan alıram",
             address: "Bakı",
             minNumber: 100,
             price: "150 AZN",
             date: "Bu gün, 18:50",
             photo:'../../assets/uploads/example.jpg',
             label:"buyer",
             type:"premium"
           }}
         />
               <ProductCard
           
           data={{
             title: "Samsung televizorlarını topdan alıram",
             address: "Bakı",
             minNumber: 100,
             price: "150 AZN",
             date: "Bu gün, 18:50",
             photo:'../../assets/uploads/example.jpg',
             label:"buyer",
             type:"premium"
           }}
         />
        </div>
        <div className={styles.buttonParent}><PrimaryButton text="Hamısını göstər" color="white" bg="#E61C23" size="9px 7%"/></div>
      </main>
    </section>
  );
};

export default ProductsContainer;
