import React from "react";
import style from "./style.module.css";
import { LoginModalOrganism } from "@/components/organisms/LoginModalOrganism";
import { OtpModalOrganism } from "@/components/organisms/OtpModalOrganism";

interface ModalProps {
  toggleLoginModal: () => void;
}

export const Modal = ({ toggleLoginModal }: ModalProps) => {
  return (
    <div className={style.modalOverLay}>
      <div className={style.modal}>
        <LoginModalOrganism toggleLoginModal={toggleLoginModal} />
        {/* <OtpModalOrganism /> */}
      </div>
    </div>
  );
};
