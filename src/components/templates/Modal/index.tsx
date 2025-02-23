import React from "react";
import style from "./style.module.css";
import { LoginModalOrganism } from "@/components/organisms/LoginModalOrganism";
import { OtpModalOrganism } from "@/components/organisms/OtpModalOrganism";

export const Modal = () => {
  return (
    <div className={style.modalOverLay}>
      <div className={style.modal}>
        <LoginModalOrganism />
        {/* <OtpModalOrganism /> */}
      </div>
    </div>
  );
};
