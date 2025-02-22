import React from "react";
import style from "./style.module.css";
import { LoginModalOrganism } from "@/components/organisms/LoginModalOrganism";

export const Modal = () => {
  return (
    <div className={style.modalOverLay}>
      <div className={style.modal}>
        <LoginModalOrganism />
      </div>
    </div>
  );
};
