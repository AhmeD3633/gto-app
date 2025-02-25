import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { LoginModalOrganism } from "@/components/organisms/LoginModalOrganism";
import { OtpModalOrganism } from "@/components/organisms/OtpModalOrganism";
import { ErrorMessageOrganism } from "@/components/organisms/ErrorMessageOrganism";

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
      } else {
        setModalState(ModalState.Otp);
      }
    } catch (error) {
      setError("Network error, please try again.");
      setErrorMessage(true);
    }
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
          <OtpModalOrganism toggleLoginModal={toggleLoginModal} />
        )}
      </div>
      {errorMessage && <ErrorMessageOrganism />}
    </div>
  );
};
