import React from "react";
import style from "./style.module.css";
import { SingleInputField } from "@/components/atoms/ModalAtoms/SingleInputFiled";
import { SubmitionButton } from "@/components/atoms/ModalAtoms/SubmitionButton";

export const EmailForm = () => {
  return (
    <div className={style.emailForm}>
      <SingleInputField label="E-mail" setEmail={() => {}} />
      <SubmitionButton title="Log in" />
    </div>
  );
};
