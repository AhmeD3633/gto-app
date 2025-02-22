import React from "react";
import style from "./style.module.css";
import { CloseButton } from "@/components/atoms/ModalAtoms/CloseButton";
import { ModalTitle } from "@/components/atoms/ModalAtoms/ModalTitle";
export const ModalHeader = () => {
  return (
    <div className={style.modalHeader}>
      <div className={style.closeButton}>
        <CloseButton />
      </div>
      <ModalTitle title="Log in" />
    </div>
  );
};
