import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { CancelSVG } from "../../assets/svg/cancel";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import Time from "../../assets/svg/time.svg";
import Wallet from "../../assets/svg/wallet.svg";

import { PremiumIcon } from "../../assets/svg/premium";
import { api } from "../../common/api";
import { useRouter } from "next/router";
interface ModalProps {
  closeModal?: () => void;
  id: string | number;
  callBackMessage: (paaram: { status: number; text: string }) => void;
}

const PremiumModal: React.FC<ModalProps> = ({
  closeModal,
  id,
  callBackMessage,
}) => {
  const [priceList, setpriceList] = useState<
    null | { price: number; description: string }[]
  >(null);
  const [errors, serErrors] = useState<any>({});
  const fetchPriceList = async () => {
    const response = await api.get("prices-info");
    setpriceList(response.premium_price_info);
  };
  function validate(value: any) {
    const emptyProps = Object.entries(value)
      .filter(([key, value]) => !value)
      .map(([key]) => key);
    const newObj = Object.fromEntries(
      emptyProps.map((key) => [key, "məcburidir!"])
    );
    serErrors(newObj);
    return newObj;
  }
  const router = useRouter();

  useEffect(() => {
    fetchPriceList();
  }, []);

  async function handleSubmit(event: any) {
    event.preventDefault();
    api.setHeader("content-type", "application/json");
    api.setHeader("Accept", "application/json");
    const data = new FormData(event.target);
    const result = { ...Object.fromEntries(data.entries()) };
    const exam = validate(Object.fromEntries(data.entries()));
    if (Object.keys(exam).length === 0) {
      const res = await api.post("make-it-premium", {
        ...result,
        advert_id: id,
        success_redirect_url: router.asPath + "#application-success",
        error_redirect_url: router.asPath + "#application-rejected",
      });

      if (typeof res == "number") {
        return callBackMessage({ status: 1, text: "Hesaba daxil olun" });
      }

      return window.location.assign(res?.payment_url);
    }
  }
  return (
    <section className={styles.modalParent} onClick={closeModal}>
      <div
        className={styles.premiumModal}
        onClick={(event: any) => event.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <div className={styles.premiumContent}>
            <h4 className={styles.PremumTitle}>
              <PremiumIcon />
              Premium et
            </h4>
            <p>
              Elanınız ana səhifədəki axtarış nəticələrində Premium elanlar
              bölməsində təsadüfi qaydada görünəcək
            </p>
            <h4>
              <Image src={Time} alt="test" width={17} height={17} />
              Xidmətin müddəti
            </h4>
            <ul>
              {priceList?.map((item, index: number) => (
                <li key={index}>
                  <div>
                    <input
                      type="radio"
                      name="price_id"
                      id={"firstTIme" + index}
                      value={item.price}
                      defaultChecked={index === 0}
                    />
                    <label htmlFor={"firstTIme" + index}>
                      {item.description}
                    </label>
                  </div>
                  <div></div>
                </li>
              ))}
            </ul>
            <h4>
              <Image src={Wallet} alt="test" width={17} height={17} />
              Ödəniş üsulu
            </h4>
            <ul>
              <li>
                <div>
                  <input
                    type="radio"
                    name="payment_type"
                    id="firstTImebank1"
                    value={2}
                    defaultChecked
                  />
                  <label htmlFor="firstTImebank1">Bank kartı</label>
                </div>
                <div></div>
              </li>

              <li>
                <div>
                  <input
                    type="radio"
                    name="payment_type"
                    id="firstTImebank"
                    value={1}
                  />
                  <label htmlFor="firstTImebank">
                    Şəxsi balans hesabından(0,00 AZN){" "}
                  </label>
                </div>
                <div></div>
              </li>
            </ul>
            <button>Ödə</button>
            <div>
              <p>
                “Ödə” düyməsini sıxdıqdan sonra siz Topdanchi.az-ın istifadəçi
                razılaşmasını və ödəniş şərtlərini qəbul etmiş olursunuz
              </p>
            </div>
          </div>
        </form>
        <span className={styles.successModalCancel} onClick={closeModal}>
          <CancelSVG color="black" />
        </span>
      </div>
    </section>
  );
};

export default PremiumModal;
