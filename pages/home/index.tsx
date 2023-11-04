import { useEffect, useState } from "react";
import Menu from "../../components/menu";
import ProductsContainer from "../../container/products";
import { api } from "../../common/api";
import ProductCard from "../../components/card/product";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import SpinnerLoader from "../../components/loader/spinner";
import { MyComponent } from "../../hooks/useResponsivenenessAdjuster";
type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  const router = useRouter();

  const [products, setproducts] = useState<any>(null);
  const [premiumProducts, setpremiumProducts] = useState<any>(null);
  const [hasmore, sethasmore] = useState(false);
  const [end, setend] = useState(false);
  const [page, setpage] = useState(1);

  const responsive = MyComponent();

  async function fetchPremiumProducts() {
    setpremiumProducts(null);
    const response = await api.get(
      "adverts?premium=1&search_text=" +
        (router.query.search_text || "") +
        "&city=" +
        (router.query.city || "") +
        "&category=" +
        (router.query.category || "") +
        "&advert_type=" +
        (router.query.advert_type === "buyers"
          ? 0
          : router.query.advert_type === "salers"
          ? 1
          : router.query.advert_type === "wholersalers"
          ? 2
          : "")
    );
    setpremiumProducts(
      response.data.adverts.map((item: any, index: number) => (
        <ProductCard
          key={item.id}
          data={{
            id: item.id,
            title: item.title,
            address: item.city,
            minNumber: item.min_order,
            price: item.wholesale_price,
            date: item.date,
            photo: item.image?.src,
            label: item.advert_type ? "buyer" : "seller",
            type: "premium",
            wholersalers: item.official_wholesaler,
          }}
        />
      ))
    );
  }

  async function fetchProducts(param?: boolean) {
    sethasmore(false);

    const response = await api.get(
      "adverts?page=" +
        page +
        "&search_text=" +
        (router.query.search_text || "") +
        "&city=" +
        (router.query.city || "") +
        "&category=" +
        (router.query.category || "") +
        "&advert_type=" +
        (router.query.advert_type === "buyers"
          ? 0
          : router.query.advert_type === "salers"
          ? 1
          : router.query.advert_type === "wholersalers"
          ? 2
          : "")
    );

    if (response.data.adverts.length < 1 && page >= 2 && !param) {
      sethasmore(false);
      setend(true);
      return;
    }
    if (page < 2 || param) {
      setproducts(null);
      setpage(1);
      setend(false);
      setproducts(
        response.data.adverts.map((item: any, index: number) => (
          <ProductCard
            key={item.id}
            data={{
              id: item.id,
              title: item.title,
              address: item.city,
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
    } else {
      response.data.adverts.length && setpage((prev) => prev + 1);
      sethasmore(true);
      setproducts([
        ...products,
        response.data.adverts.map((item: any, index: number) => (
          <ProductCard
            key={item.id}
            data={{
              id: item.id,
              title: item.title,
              address: item.city,
              minNumber: item.min_order,
              price: item.wholesale_price,
              date: item.date,
              photo: item.image?.src,
              label: item.advert_type ? "buyer" : "seller",
              type: item.premium == 1 ? "premium" : "ordinary",
              wholersalers: item.official_wholesaler,
            }}
          />
        )),
      ]);
    }
  }

  function handleScrollToBottom() {
    setpage((prev) => prev + 1);
    sethasmore(true);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }

  useEffect(() => {
    fetchPremiumProducts();
    fetchProducts(true);
  }, [router.query]);

  return (
    <div>
      <Menu />
      <div className="wrapper">
        <ProductsContainer
          title="Premium elanlar"
          isproduct
          style={
            responsive > 1026
              ? { transform: "translateY(-100px)" }
              : { transform: "translateY(-31px)" }
          }
          list={premiumProducts}
        />

        <InfiniteScroll
          dataLength={products?.length || 1}
          next={fetchProducts}
          hasMore={hasmore}
          loader={<SpinnerLoader />}
          style={
            responsive > 1026
              ? { transform: "translateY(-100px)" }
              : { transform: "translateY(-30px)" }
          }
        >
          <div>
            <ProductsContainer
              title="Son elanlar"
              list={products}
              isNotTop={!end}
              onClick={handleScrollToBottom}
            />
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default HomePage;
