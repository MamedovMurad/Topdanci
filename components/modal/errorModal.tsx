import React, { useState } from "react";
import styles from "./index.module.css";
import { CancelSVG } from "../../assets/svg/cancel";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import TopdanchiLogo from "../../assets/svg/Logo.svg";
import ErrorIcon from "../../assets/svg/errorIcon";
interface ModalProps {
  closeModal?: () => void;
  text?: string;
}

const ErrorModal: React.FC<ModalProps> = ({
  closeModal,
  text = "Ödənişin qeydə alınmadı!",
}) => {
  return (
    <section className={styles.modalParent} onClick={closeModal}>
      <div
        className={styles.successModal}
        onClick={(event: any) => event.stopPropagation()}
      >
        <div>
          <Image
            style={{ cursor: "pointer" }}
            src={TopdanchiLogo}
            alt={"Logo"}
          />
        </div>
        <div className={styles.successContent}>
          <ErrorIcon />
          <p>{text} </p>
        </div>
        <span className={styles.successModalCancel} onClick={closeModal}>
          <CancelSVG color="black" />
        </span>
      </div>
    </section>
  );
};

export default ErrorModal;
