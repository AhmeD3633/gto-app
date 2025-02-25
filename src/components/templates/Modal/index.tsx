import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { LoginModalOrganism } from "@/components/organisms/LoginModalOrganism";
import { OtpModalOrganism } from "@/components/organisms/OtpModalOrganism";
import { ErrorMessageOrganism } from "@/components/organisms/ErrorMessageOrganism";
import { LoadingComponent } from "@/components/organisms/LoadingOrganism";
import { useRouter } from "next/navigation";

interface ModalProps {
  toggleLoginModal: () => void;
}

enum ModalState {
  Email = "Email",
  Otp = "Otp",
  Loading = "Loading",
}

export const Modal = ({ toggleLoginModal }: ModalProps) => {
  const [modalState, setModalState] = useState<ModalState>(ModalState.Email);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const otpInputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [otp, setOtp] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Invalid Email");
      return;
    }

    setModalState(ModalState.Loading);

    try {
      const response = await fetch(
        "https://backend-gto.bit68.com/en/api/users/customer_otp/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone_or_email: email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(true);
        setModalState(ModalState.Email);
      } else {
        setModalState(ModalState.Otp);
      }
    } catch (error) {
      setError("Network error, please try again.");
      setErrorMessage(true);
      setModalState(ModalState.Email);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setModalState(ModalState.Loading);

    try {
      const response = await fetch(
        "https://backend-gto.bit68.com/en/api/users/customer_login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone_or_email: email, otp: otp }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to login");
        setErrorMessage(true);
        setModalState(ModalState.Otp);
      } else {
        router.push("/profile");
        toggleLoginModal();
      }
    } catch (error) {
      setError("Network error, please try again.");
      setErrorMessage(true);
      setModalState(ModalState.Otp);
    }

    setError("");
  };

  return (
    <div className={style.modalOverLay}>
      <div className={style.modal}>
        {modalState === ModalState.Email && (
          <LoginModalOrganism
            toggleLoginModal={toggleLoginModal}
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            error={error}
          />
        )}

        {modalState === ModalState.Otp && (
          <OtpModalOrganism
            toggleLoginModal={toggleLoginModal}
            setOtp={setOtp}
            otp={otp}
            otpInputsRef={otpInputsRef}
            handleOtpSubmit={handleOtpSubmit}
          />
        )}

        {modalState === ModalState.Loading && <LoadingComponent />}
      </div>
      {errorMessage && <ErrorMessageOrganism />}
    </div>
  );
};
