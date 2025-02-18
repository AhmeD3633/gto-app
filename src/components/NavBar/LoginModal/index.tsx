import React, { useEffect } from "react";
import style from "./style.module.css";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import OtpModal from "./OtpModal";
import NavBarState from "../index";
interface LoginModalProps {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (value: boolean) => void;
  handleLoginModal: () => void;
  setNavContent: (value: typeof NavBarState) => void;
}

enum ModalState {
  Email = "Email",
  Otp = "Otp",
  Loading = "Loading",
}

const LoginModal = ({
  isLoginModalOpen,
  setIsLoginModalOpen,
  handleLoginModal,
  setNavContent,
}: LoginModalProps) => {
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

  const handleModalClose = () => {
    setIsLoginModalOpen(false);
    setError("");
  };

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
    <div className={style.loginModalContainer}>
      <div className={style.loginModal}>
        {modalState === ModalState.Email && (
          <div className={style.loginModalContent}>
            <div className={style.buttonContainer}>
              <button className={style.close} onClick={handleModalClose}>
                &times;
              </button>
            </div>
            <h2>Log in</h2>
            <form className={style.loginForm} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className={style.error}>{error}</p>}
              <button className={style.Button}>Login</button>
            </form>
          </div>
        )}

        {modalState === ModalState.Otp && (
          <OtpModal
            handleModalClose={handleModalClose}
            email={email}
            setErrorMessage={setErrorMessage}
            setError={setError}
            handleLoginModal={handleLoginModal}
            setNavContent={setNavContent}
          />
        )}
      </div>
      {errorMessage && <ErrorMessage setErrorMessage={setErrorMessage} />}
    </div>
  );
};

export default LoginModal;
