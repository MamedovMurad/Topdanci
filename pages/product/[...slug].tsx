import { useEffect, useState } from "react";
import { TelIconSVG } from "../../assets/svg/tel";
import { UserLoginSVG } from "../../assets/svg/userloginsvg";
import { api } from "../../common/api";
import Overlay from "../../components/overlay";
import SliderUI from "../../components/slider";
import PrimaryButton from "../../components/UI/button";
import ProductsContainer from "../../container/products";

import styles from "./index.module.css";
import Router, { useRouter } from "next/router";
import { ShareButton } from "../../hooks/shareButton";
import { MyComponent } from "../../hooks/useResponsivenenessAdjuster";
import MultiSlider from "../../components/slider/multiSlider";
import ProductCard from "../../components/card/product";
import SuccessModal from "../../components/modal/successModal";
import ErrorModal from "../../components/modal/errorModal";
import PremiumModal from "../../components/modal/premiumModal";
import ForwardModal from "../../components/modal/forwardModal";
type ProductDetailProps = {
  res: any;
  id: string | number;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ res, id }) => {
  const [forward_premium, setmakePremium] = useState<number | boolean>(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const router = useRouter();

  const { data, similar_adverts } = res;
  const similar_data = similar_adverts.map((similar: any) => (
    <ProductCard
      key={similar.id}
      data={{
        slug: similar.slug,
        id: similar.id,
        title: similar.title,
        address: similar.city,
        minNumber: similar.min_order,
        price: similar.wholesale_price,
        date: similar.date,
        photo: similar.image?.src,
        label: similar.advert_type ? "buyer" : "seller",
        type: similar.premium == 1 ? "premium" : "ordinary",
        wholersalers: similar.official_wholesaler,
      }}
    />
  ));
  const { handleClick, isSupported } = ShareButton({
    title: "test",
    text: "test",
    url: "test",
  });
  const responsive = MyComponent();

  const callBackMessage = (param: { status: number; text: string }) => {
    if (param.status) {
      return seterrorMessage(param.text);
    }
    return setsuccessMessage(param.text);
  };

  useEffect(() => {
    if (
      router.asPath
        ?.split("#")
        .filter((item) => item === "application-success")
        ?.join("")
    ) {
      return setsuccessMessage("true");
    }
    if (
      router.asPath
        ?.split("#")
        .filter((item) => item === "application-rejected")
        ?.join("")
    ) {
      return seterrorMessage("true");
    }
  }, []);

  return (
    <section className={styles.productPage}>
      <div
        className={styles.alert}
        style={
          data.status.color_code
            ? { backgroundColor: data.status.color_code }
            : { padding: "0.1px" }
        }
      >
        <h4>{data.status.title}</h4>
        {/*      <p></p> */}
      </div>
      <Overlay />
      <div className="wrapper full">
        <div className={styles.productPagearea}>
          <ul className={styles.links}>
            <li onClick={() => Router.push("/")}>Bütün elanlar</li>
            <li
              onClick={() =>
                Router.push("/?category_id=" + data.parent_category.id)
              }
            >
              {data?.parent_category?.name}
            </li>
            <li
              onClick={() => Router.push("/?category_id=" + data.category.id)}
            >
              {data?.category?.name}
            </li>
          </ul>

          {responsive > 900 ? (
            <SliderUI photos={data.images} />
          ) : (
            <MultiSlider photos={data.images} />
          )}

          <div className={styles.contentTop}>
            <>
              <div className={styles.info}>
                <PrimaryButton
                  text="Satıcı"
                  size="3px 10px"
                  font="14px"
                  color="white"
                  bg="#E61C23"
                  boxShadow={"none"}
                />
                <h5>{data.title}</h5>
                <div className={styles.infocontent}>
                  <div className={styles.leftSide}>
                    <div className={styles.bottomcontent}>
                      <p>Minimum sifariş</p> <p>Topdan qiymət</p>
                    </div>
                    <div>
                      <p className={styles.productPrice}>5 Ədəd</p>{" "}
                      <p>100 AZN</p>
                    </div>
                  </div>
                  {responsive < 900 && (
                    <div className={styles.rightSide}>
                      <article>Məhsul kateqoriyası:</article>
                      <p>{data.category?.name}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
            {responsive > 900 && (
              <div className={styles.content}>
                <article>Şəhər: Bakı</article>
                <article>
                  Məhsul kateqoriyası: <span>{data.category?.name}</span>
                </article>
              </div>
            )}
            <div className={styles.buttons}>
              {responsive > 900 && (
                <>
                  <PrimaryButton
                    text="Elanı irəli çək.  1 AZN"
                    size="3px 10px"
                    font="14px"
                    onClick={() => setmakePremium(2)}
                  />
                  <PrimaryButton
                    text="Premium et.  5 AZN"
                    size="3px 10px"
                    color="white"
                    bg="#E61C23"
                    font="14px"
                    onClick={() => setmakePremium(1)}
                  />
                </>
              )}
              <div>
                <h5>Pərakəndə satış mümkündür</h5>
                <div>
                  <div className={styles.active}>
                    <span>Bəli</span> <span></span>
                  </div>
                  <div>
                    <span>Xeyr</span> <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.personalInfo}>
              <div>
                <div>
                  <label>
                    <UserLoginSVG />
                    {data.name}
                  </label>
                  <p>
                    <TelIconSVG />
                    <a href={"tel:" + data.tel}>{data.tel}</a>
                  </p>
                </div>
                <ul>
                  <li> Elanın nömrəsi:35537250</li>
                  <li>Baxışların sayı: {data.views_count}</li>
                  <li>Yeniləndi: Bugün, 09:55</li>
                </ul>
              </div>
              <div className={styles.buttons}>
                {responsive < 900 && (
                  <div className={styles.responsiveButton}>
                    <PrimaryButton
                      width="100%"
                      text="Elanı irəli çək.  1 AZN"
                      size="3px 10px"
                      font="14px"
                      onClick={() => setmakePremium(2)}
                    />
                    <PrimaryButton
                      text="Premium et.  5 AZN"
                      width="100%"
                      size="3px 10px"
                      color="white"
                      bg="#E61C23"
                      font="14px"
                      onClick={() => setmakePremium(1)}
                    />
                  </div>
                )}
                {responsive < 900 && (
                  <PrimaryButton
                    text="Paylaş"
                    size="7px"
                    boxShadow={"none"}
                    onClick={isSupported && handleClick}
                  />
                )}
              </div>
            </div>

            <div className={styles.moreDetail}>
              <h6>Ətraflı</h6>
              <p>{data.detail}</p>
              {responsive > 900 && (
                <PrimaryButton
                  text="Paylaş"
                  size="7px"
                  onClick={isSupported && handleClick}
                />
              )}
            </div>
          </div>

          <div>
            <ProductsContainer title="Bənzər elanlar" list={similar_data} />
          </div>
          {/*  <ProductsContainer  /> */}
        </div>
      </div>

      {/* modal */}
      {forward_premium &&
        (forward_premium === 1 ? (
          <PremiumModal
            closeModal={() => setmakePremium(false)}
            id={id}
            callBackMessage={callBackMessage}
          />
        ) : (
          <ForwardModal
            closeModal={() => setmakePremium(false)}
            id={id}
            callBackMessage={callBackMessage}
          />
        ))}

      {errorMessage && (
        <ErrorModal
          closeModal={() => seterrorMessage("")}
          text={errorMessage}
        />
      )}
      {successMessage && (
        <SuccessModal closeModal={() => setsuccessMessage("")} />
      )}
    </section>
  );
};

export default ProductDetail;

export async function getServerSideProps({ params: { slug } }: any) {
  // Fetch data from external API

  const res = await api.get("advert/" + slug[slug.length - 1]);
  console.log(slug);
  // Pass data to the page via props
  return { props: { res, id: slug[slug.length - 1] } };
}
