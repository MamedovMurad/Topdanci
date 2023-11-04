import { useEffect, useState } from "react";
import Menu from "../../components/menu";
import ProductsContainer from "../../container/products";
import { api } from "../../common/api";
import ProductCard from "../../components/card/product";
import { useRouter } from "next/router";

type SaticiPageProps = {};

const Satici: React.FC<SaticiPageProps> = () => {
  const router = useRouter();
  const search_text = router.query.search_text
    ? router?.query?.search_text + ""
    : "";
  const city = router.query.city ? router?.query?.city + "" : "";
  const category = router.query.category ? router?.query?.category + "" : "";

  const [products, setproducts] = useState([]);
  async function fetchProducts() {
    const response = await api.get(
      "adverts?" +
        new URLSearchParams({ advert_type: "0", search_text, city, category })
    );
    setproducts(
      response.data.adverts.map((item: any, index: number) => (
        <ProductCard
          key={index}
          data={{
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
  }, [router.query]);
  return (
    <div>
      <Menu />
      <div className="wrapper">
        {" "}
        <ProductsContainer
          seletedUrl="/saticilar"
          title="Satıcılar"
          isproduct
          style={{ transform: "translateY(-100px)" }}
          list={products}
        />
      </div>
    </div>
  );
};

export default Satici;
