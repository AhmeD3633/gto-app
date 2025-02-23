import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { LoginModalOrganism } from "@/components/organisms/LoginModalOrganism";
import { OtpModalOrganism } from "@/components/organisms/OtpModalOrganism";

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
    setModalState(ModalState.Otp);

    if (!email.trim()) {
      setError("Email is required");
      setErrorMessage(true);
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
        setError(data.message || "Failed to login");
        setErrorMessage(true);
      } else {
        console.log("Success:", data);
      }
    } catch (error) {
      setError("Network error, please try again.");
      setErrorMessage(true);
    }
  };
  return (
    <div className={style.modalOverLay}>
      <div className={style.modal}>
        <LoginModalOrganism
          toggleLoginModal={toggleLoginModal}
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
        />
        {/* <OtpModalOrganism /> */}
      </div>
    </div>
  );
};
