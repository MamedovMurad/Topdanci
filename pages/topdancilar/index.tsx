import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import ProductsContainer from "../../container/products";
import CompanyItem from "../../components/companyItem";
import { api } from "../../common/api";
import InfiniteScroll from "react-infinite-scroll-component";
import SpinnerLoader from "../../components/loader/spinner";
interface TopdancilarProps {}

const Topdancilar: React.FC<TopdancilarProps> = ({}) => {
  const [data, setdata] = useState<any>(null);
  const [hasmore, sethasmore] = useState(false);
  const [end, setend] = useState(false);
  const [page, setpage] = useState(1);

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

  async function fetchApiDef() {
    const res = await api.get("wholesalers?page=" + page);
    setdata(
      res.data.data.map((item: any) => (
        <CompanyItem
          key={item.id}
          id={item.id}
          title={item.title}
          src={item.logo}
          desc={item.summary}
          tel={item.tel}
          count={item.adverts_count}
        />
      ))
    );
  }
  async function fetchApi() {
    const res = await api.get("wholesalers?page=" + page);
    console.log(res);

    console.log(res.data.data);

    if (res.data.data.length < 1 && page >= 2) {
      sethasmore(false);
      setend(true);
      return;
    } else {
      console.log("test");
      res.data.data.length && setpage((prev) => prev + 1);
      sethasmore(true);
      setdata([
        ...data,
        ...res.data.data.map((item: any) => (
          <CompanyItem
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.logo}
            desc={item.summary}
            tel={item.tel}
            count={item.adverts_count}
          />
        )),
      ]);
    }
  }
  useEffect(() => {
    fetchApiDef();
  }, []);

  return (
    <section className={styles.topdanci}>
      <div className={styles.banner}></div>
      <div className="wrapper">
        <div style={{ transform: "translateY(-100px)" }}>
          <InfiniteScroll
            dataLength={data?.length || 1}
            next={fetchApi}
            hasMore={hasmore}
            loader={<SpinnerLoader />}
          >
            <ProductsContainer
              list={data}
              title="Topdançılar"
              isNotTop={!end}
              onClick={handleScrollToBottom}
            />
          </InfiniteScroll>
        </div>
      </div>
    </section>

    /*     <section className={styles.topdanci}>
      <div className={styles.banner}></div>
      <div className="wrapper">
        <ProductsContainer
          style={{ transform: "translateY(-100px)" }}
          list={data}
          title="Topdançılar"
        />
      </div>
    </section> */
  );
};

export default Topdancilar;
