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

const PremiumPage: React.FC<HomePageProps> = () => {
  const router = useRouter();

  const [products, setproducts] = useState<any>(null);
  const [premiumProducts, setpremiumProducts] = useState<any>(null);
  const [hasmore, sethasmore] = useState(false);
  const [end, setend] = useState(false);
  const [page, setpage] = useState(1);
  const [isActiveMenu, setisActiveMenu] = useState(false);

  const responsive = MyComponent();

  async function fetchProducts(param?: boolean) {
    sethasmore(false);

    const response = await api.get(
      "adverts?premium=1&page=" +
        page +
        "&search_text=" +
        (router.query.search_text || "") +
        "&city=" +
        (router.query.city || "") +
        "&category=" +
        (router.query.category || "") +
        "&advert_type=" +
        (router.query.advert_type || "")
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
              slug: item.slug,
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
              slug: item.slug,
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
    fetchProducts(true);
  }, [router.query]);

  return (
    <div>
      <Menu setisActiveMenu={setisActiveMenu} isActiveMenu={isActiveMenu} />
      <div className="wrapper">
        <InfiniteScroll
          dataLength={products?.length || 1}
          next={fetchProducts}
          hasMore={hasmore}
          loader={<SpinnerLoader />}
          style={
            responsive > 500
              ? { transform: "translateY(-100px)" }
              : { transform: "translateY(-30px)" }
          }
        >
          <div>
            {" "}
            <ProductsContainer
              title="Premium elanlar"
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

export default PremiumPage;
