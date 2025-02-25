import React from "react";
import style from "./style.module.css";
import { SingleInputField } from "@/components/atoms/ModalAtoms/SingleInputFiled";
import { SubmitionButton } from "@/components/atoms/ModalAtoms/SubmitionButton";

interface EmailFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  email: string;
  setEmail: (value: string) => void;
  error: string;
}
export const EmailForm = ({
  handleSubmit,
  email,
  setEmail,
  error,
}: EmailFormProps) => {
  return (
    <form className={style.emailForm} onSubmit={handleSubmit}>
      <SingleInputField label="E-mail" setEmail={setEmail} />
      {error && <p className={style.error}>{error}</p>}
      <SubmitionButton title="Log in" />
    </form>
  );
};
