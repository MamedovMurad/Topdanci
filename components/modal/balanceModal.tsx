import React, { useState } from "react";
import styles from "./index.module.css";
import { CancelSVG } from "../../assets/svg/cancel";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import TopdanchiLogo from "../../assets/svg/Logo.svg";
import SuccessIcon from "../../assets/svg/success";
import { api } from "../../common/api";
import { useRouter } from "next/router";
import Circle from "../../assets/svg/circle.svg";
interface ModalProps {
  closeModal?: () => void;
}

const BalanceModal: React.FC<ModalProps> = ({ closeModal }) => {
  const router = useRouter();
  const [currentAmount, setcurrentAmount] = useState(0);
  async function handleSubmit(event: any) {
    event.preventDefault();
    api.setHeader("content-type", "application/json");
    api.setHeader("Accept", "application/json");
    const data = new FormData(event.target);
    const result = { ...Object.fromEntries(data.entries()) };

    console.log(result);

    const res = await api.post("user/add-balance", {
      ...result,
      amount: currentAmount,
      success_redirect_url: router.asPath + "#application-success",
      error_redirect_url: router.asPath + "#application-rejected",
    });

    return window.location.assign(res?.payment_url);
  }

  const amounts = [5, 10, 20];
  return (
    <section className={styles.modalParent} onClick={closeModal}>
      <div
        className={styles.balanceModal}
        onClick={(event: any) => event.stopPropagation()}
      >
        <h4>Şəxsi hesabı artır</h4>

        <form onSubmit={handleSubmit} className={styles.balanceModalForm}>
          <div>
            <label htmlFor="balance" className={styles.labelBalance}>
              Artırılacaq məbləği daxil edin.
            </label>

            <div>
              <div className={styles.amountSpan}>
                {amounts.map((item) => (
                  <span
                    key={item}
                    className={currentAmount == item ? styles.active : ""}
                    onClick={() => setcurrentAmount(item)}
                  >
                    {item} AZN
                  </span>
                ))}

                <input
                  type="number"
                  id="balance"
                  name="amount"
                  placeholder="Məbləğ. AZN"
                  onChange={(e: any) => setcurrentAmount(e.target.value)}
                />
              </div>
              <div className={styles.paymentTYpe}>
                <h5>Ödəniş üsulu</h5>
                <ul>
                  <li>
                    {" "}
                    <Image
                      src={Circle}
                      alt="bank karti "
                      width={16}
                      height={16}
                    />{" "}
                    Bank kartı
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button> Ödə</button>

          <p className={styles.bottomP}>
            “Ödə” düyməsini sıxdıqdan sonra siz Topdanchi.az-ın <br />{" "}
            istifadəçi razılaşmasını və ödəniş şərtlərini qəbul etmiş olursunuz
          </p>
        </form>

        {/*      <span className={styles.successModalCancel} onClick={closeModal}>
          <CancelSVG color="black" />
        </span> */}
      </div>
    </section>
  );
};

export default BalanceModal;
