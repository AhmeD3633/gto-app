import React from "react";
import style from "./style.module.css";
import { ModalHeader } from "@/components/molecules/ModalMolecules/ModalHeader";
import { EmailForm } from "@/components/molecules/ModalMolecules/EmailForm";

interface LoginModalOrganismProps {
  toggleLoginModal: () => void;
}

export const LoginModalOrganism = ({
  toggleLoginModal,
}: LoginModalOrganismProps) => {
  return (
    <div className={style.container}>
      <ModalHeader toggleLoginModal={toggleLoginModal} />
      <EmailForm />
    </div>
  );
};
