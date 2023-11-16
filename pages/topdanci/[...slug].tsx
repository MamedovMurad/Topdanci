import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { WholesaleDetail } from "../../common/model/wholesale";
import { api } from "../../common/api";
import { TelIconSVG } from "../../assets/svg/tel";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsContainer from "../../container/products";
import ProductCard from "../../components/card/product";
import SpinnerLoader from "../../components/loader/spinner";
import { LocationSVG } from "../../assets/svg/location";

interface TopdanciProps {
  data: WholesaleDetail & { slug: string };
}

const Topdanci: React.FC<TopdanciProps> = ({ data }) => {
  const [hasmore, sethasmore] = useState(false);
  const [end, setend] = useState(false);
  const [page, setpage] = useState(1);
  const [products, setproducts] = useState<any>(null);
  console.log(products, "products");
  async function fetchProducts(param?: boolean) {
    sethasmore(false);

    const response = await api.get(`wholesaler/${data.slug}?page=` + page);

    if (response.data.adverts.adverts.length < 1 && page >= 2 && !param) {
      sethasmore(false);
      setend(true);
      return;
    }

    response.data.adverts.adverts.length && setpage((prev) => prev + 1);
    sethasmore(true);
    setproducts([
      ...products,
      response.data.adverts.adverts.map((item: any, index: number) => (
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
    if (data.adverts.adverts.length < 1) {
      setend(true);
      sethasmore(false);
    }
    setproducts(
      data.adverts.adverts?.map((item: any, index: number) => (
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
  }, []);

  return (
    <div className={styles.topdanci}>
      <div className={styles.banner}></div>

      <div className="wrapper">
        <main>
          <h4>Topdançılar/{data.title}</h4>
          <div
            className={styles.bgImage}
            style={{ backgroundImage: "url(" + data.cover_photo + ")" }}
          ></div>
        </main>
        <section className={styles.topSection}>
          <div className={styles.leftBox}>
            <div className={styles.logoarea}>
              <img src={data.logo} alt="photo" />
            </div>
            <div className={styles.content}>
              <h5>{data.title}</h5>
              <p>{data.summary} </p>

              <div className={styles.leftboxBottom}>
                <article>Sloqan </article>
                <article>{data.slogan}</article>
              </div>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.address}>
              <span>
                {" "}
                <LocationSVG />
              </span>
              <p> {data.address}</p>
            </div>

            <div className={styles.rightTelArea}>
              <span>
                <TelIconSVG width={19} height={19} />
              </span>
              <div>
                <a href={"tel:" + data.tel}>{data.tel}</a>
                {/*   <a href="">055 973 63 13</a> */}
              </div>
            </div>
            <div className={styles.rightBottom}>
              <p>Pərakəndə satış mümkündür</p>
              <div>
                <span className={data?.retail_sales === 1 ? styles.active : ""}>
                  Bəli
                </span>
                <span className={data?.retail_sales !== 1 ? styles.active : ""}>
                  Xeyr
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.time}>
          <p>{data.work_date}</p>
          <label>{data.adverts.paginate.total} Elan</label>
        </div>

        <InfiniteScroll
          dataLength={products?.length || 1}
          next={fetchProducts}
          hasMore={hasmore}
          loader={<SpinnerLoader />}
          style={{ transform: "translateY(-80px)" }}
        >
          <div>
            {" "}
            <ProductsContainer
              title="Elanlar"
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

export default Topdanci;

export async function getServerSideProps({ params: { slug } }: any) {
  // Fetch data from external API

  const res = await api.get("wholesaler/" + slug[slug.length - 1]);

  console.log(res.data);

  // Pass data to the page via props
  return { props: { data: { ...res.data, slug: slug[slug.length - 1] } } };
}
