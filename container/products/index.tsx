import Link from "next/link";
import ProductCard from "../../components/card/product";
import PrimaryButton from "../../components/UI/button";
import styles from "./index.module.css";
import SkeletonLoader from "../../components/skeleton";
import { stringify } from "querystring";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductsContainerProps = {
  style?: any;
  list?: any;
  isproduct?: boolean;
  title?: string;
  seletedUrl?: string;
  isNotTop?: boolean;
  onClick?: any;
};

const ProductsContainer: React.FC<ProductsContainerProps> = ({
  style = {},
  list,
  isproduct,
  title,
  seletedUrl,
  isNotTop,
  onClick,
}) => {
  const [active, setactive] = useState(2);
  const router = useRouter();
  const urls = [
    {
      link: {
        pathname: router.pathname,
        search: `?${stringify({ ...router.query, advert_type: "buyers" })}`,
      },
      title: "Satıcılar",
    },
    {
      link: {
        pathname: router.pathname,
        search: `?${stringify({ ...router.query, advert_type: "salers" })}`,
      },
      title: "Alıcılar",
    },
    {
      link: {
        pathname: router.pathname,
        search: `?${stringify({
          ...router.query,
          advert_type: "wholersalers",
        })}`,
      },
      title: "Topdancılar",
    },
  ];
  useEffect(() => {
    setactive(
      router.query.advert_type
        ? router.query.advert_type === "buyers"
          ? 0
          : router.query.advert_type === "salers"
          ? 1
          : router.query.advert_type === "wholersalers"
          ? 2
          : 3
        : 3
    );
  }, [router.query.advert_type]);

  return (
    <section className={styles.productContainer} style={style}>
      {style?.transform && isproduct && !isNotTop && (
        <header>
          <ul>
            <li>Elanlar</li>
            {urls.map((item, index) => (
              <li
                key={item.title}
                className={index == active ? styles.TabActive : ""}
                onClick={() => setactive(index)}
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}

            <li
              className={active == 3 ? styles.TabActive : ""}
              onClick={() => setactive(3)}
            >
              <Link
                href={{
                  pathname: router.pathname,
                  search: `?${stringify({ ...router.query, advert_type: "" })}`,
                }}
              >
                Hamısı
              </Link>
            </li>
          </ul>
        </header>
      )}
      <main>
        {title && (
          <header>
            <ul>
              <li>{title}</li>
              {isproduct && (
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => Router.push("premium-elanlar")}
                >
                  Hamısını göstər
                </li>
              )}
            </ul>
          </header>
        )}
        <div className={styles.productmain}>
          {list || (
            <div className={styles.skeletonArea}>
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </div>
          )}
        </div>
        {isNotTop && (
          <div className={styles.buttonParent}>
            <PrimaryButton
              text="Hamısını göstər"
              color="white"
              bg="#E61C23"
              size="9px 7%"
              onClick={onClick}
            />
          </div>
        )}
      </main>
    </section>
  );
};

export default ProductsContainer;
