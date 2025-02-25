import React from "react";
import style from "./style.module.css";
import { ModalHeader } from "@/components/molecules/ModalMolecules/ModalHeader";
import { SubText } from "@/components/atoms/ModalAtoms/SubText";
import { OtpForm } from "@/components/molecules/ModalMolecules/OtpForm";

interface OtpModalOrganismProps {
  toggleLoginModal: () => void;
  setOtp: (otp: string) => void;
  otp: string;
  otpInputsRef: React.RefObject<(HTMLInputElement | null)[]>;
  handleOtpSubmit: (e: React.FormEvent) => void;
}
export const OtpModalOrganism = ({
  toggleLoginModal,
  setOtp,
  otpInputsRef,
  otp,
  handleOtpSubmit,
}: OtpModalOrganismProps) => {
  return (
    <div className={style.container}>
      <ModalHeader toggleLoginModal={toggleLoginModal} />
      <SubText text="Kindly enter the OTP sent to email" />
      <OtpForm
        setOtp={setOtp}
        otpInputsRef={otpInputsRef}
        otp={otp}
        handleOtpSubmit={handleOtpSubmit}
      />
    </div>
  );
};
