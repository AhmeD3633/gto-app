import React from "react";
import style from "./style.module.css";
import { ModalHeader } from "@/components/molecules/ModalMolecules/ModalHeader";
import { EmailForm } from "@/components/molecules/ModalMolecules/EmailForm";

interface LoginModalOrganismProps {
  toggleLoginModal: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  email: string;
  setEmail: (value: string) => void;
  error: string;
}

export const LoginModalOrganism = ({
  toggleLoginModal,
  handleSubmit,
  email,
  setEmail,
  error,
}: LoginModalOrganismProps) => {
  return (
    <div className={style.container}>
      <ModalHeader toggleLoginModal={toggleLoginModal} />
      <EmailForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        error={error}
      />
    </div>
  );
};
