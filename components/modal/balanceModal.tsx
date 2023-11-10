import React, { useState } from "react";
import styles from "./index.module.css";
import { CancelSVG } from "../../assets/svg/cancel";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import TopdanchiLogo from "../../assets/svg/Logo.svg";
import SuccessIcon from "../../assets/svg/success";
import { api } from "../../common/api";
import { useRouter } from "next/router";
interface ModalProps {
  closeModal?: () => void;
}

const BalanceModal: React.FC<ModalProps> = ({ closeModal }) => {
  const router = useRouter();
  async function handleSubmit(event: any) {
    event.preventDefault();
    api.setHeader("content-type", "application/json");
    api.setHeader("Accept", "application/json");
    const data = new FormData(event.target);
    const result = { ...Object.fromEntries(data.entries()) };

    console.log(result);

    const res = await api.post("user/add-balance", {
      ...result,
      amount: result.amount,
      success_redirect_url: router.asPath + "#application-success",
      error_redirect_url: router.asPath + "#application-rejected",
    });

    return window.location.assign(res?.payment_url);
  }

  return (
    <section className={styles.modalParent} onClick={closeModal}>
      <div
        className={styles.successModal}
        onClick={(event: any) => event.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className={styles.balanceModalForm}>
          <div>
            <label htmlFor="balance">Artırılacaq məbləği daxil edin.</label>

            <input
              type="number"
              id="balance"
              name="amount"
              placeholder="Məbləğ. AZN"
            />
          </div>

          <button> Ödə</button>
        </form>

        <span className={styles.successModalCancel} onClick={closeModal}>
          <CancelSVG color="black" />
        </span>
      </div>
    </section>
  );
};

export default BalanceModal;
