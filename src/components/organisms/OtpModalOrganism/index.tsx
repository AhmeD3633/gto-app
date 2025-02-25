import React from "react";
import style from "./style.module.css";
import { ModalHeader } from "@/components/molecules/ModalMolecules/ModalHeader";
import { SubText } from "@/components/atoms/ModalAtoms/SubText";
import { OtpForm } from "@/components/molecules/ModalMolecules/OtpForm";

interface OtpModalOrganismProps {
  toggleLoginModal: () => void;
}
export const OtpModalOrganism = ({
  toggleLoginModal,
}: OtpModalOrganismProps) => {
  return (
    <div className={style.container}>
      <ModalHeader toggleLoginModal={toggleLoginModal} />
      <SubText text="Kindly enter the OTP sent to email" />
      <OtpForm />
    </div>
  );
};
