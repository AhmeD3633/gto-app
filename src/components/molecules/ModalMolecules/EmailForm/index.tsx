import React from "react";
import style from "./style.module.css";
import { SingleInputField } from "@/components/atoms/ModalAtoms/SingleInputFiled";
import { SubmitionButton } from "@/components/atoms/ModalAtoms/SubmitionButton";

interface EmailFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  email: string;
  setEmail: (value: string) => void;
}
export const EmailForm = ({
  handleSubmit,
  email,
  setEmail,
}: EmailFormProps) => {
  return (
    <form className={style.emailForm} onSubmit={handleSubmit}>
      <SingleInputField label="E-mail" setEmail={setEmail} />
      <SubmitionButton title="Log in" />
    </form>
  );
};
