import React from "react";
import style from "./style.module.css";
import { CloseButton } from "@/components/atoms/ModalAtoms/CloseButton";
import { ModalTitle } from "@/components/atoms/ModalAtoms/ModalTitle";

interface ModalHeaderProps {
  toggleLoginModal: () => void;
}

export const ModalHeader = ({ toggleLoginModal }: ModalHeaderProps) => {
  return (
    <div className={style.modalHeader}>
      <div className={style.closeButton}>
        <CloseButton toggleLoginModal={toggleLoginModal} bgColor="#d4a742" />
      </div>
      <ModalTitle title="Log in" />
    </div>
  );
};
