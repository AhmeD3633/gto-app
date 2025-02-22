import React from "react";
import style from "./style.module.css";
import { ModalHeader } from "@/components/molecules/ModalMolecules/ModalHeader";
import { EmailForm } from "@/components/molecules/ModalMolecules/EmailForm";
export const LoginModalOrganism = () => {
  return (
    <div className={style.container}>
      <ModalHeader />
      <EmailForm />
    </div>
  );
};
