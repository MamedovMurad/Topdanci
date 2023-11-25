import { useEffect, useState } from "react";
import Menu from "../../components/menu";
import ProductsContainer from "../../container/products";
import { api } from "../../common/api";
import ProductCard from "../../components/card/product";

type AliciPageProps = {};

const Alici: React.FC<AliciPageProps> = () => {
  const [products, setproducts] = useState([]);
  const [isActiveMenu, setisActiveMenu] = useState(false);

  async function fetchProducts() {
    const response = await api.get("adverts?advert_type=1");
    setproducts(
      response.data.adverts.map((item: any, index: number) => (
        <ProductCard
          key={index}
          data={{
            slug: item.slug,
            id: item.id,
            title: item.title,
            address: "Bakı",
            minNumber: item.min_order,
            price: item.wholesale_price,
            date: item.date,
            photo: item.image?.src,
            label: item.advert_type ? "buyer" : "seller",
            type: item.premium == 1 ? "premium" : "ordinary",
            wholersalers: item.official_wholesaler,
          }}
        />
      ))
    );
    console.log(response);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Menu setisActiveMenu={setisActiveMenu} isActiveMenu={isActiveMenu} />
      <div className="wrapper">
        {" "}
        <ProductsContainer
          seletedUrl="/alicilar"
          title="Alıcılar"
          isproduct
          style={{ transform: "translateY(-100px)" }}
          list={products}
        />
      </div>
    </div>
  );
};

export default Alici;
