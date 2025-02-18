import React from "react";
import style from "./style.module.css";
import SingleOperation from "../../atoms/single-operation/index";

interface Props {
  setIsLoginModalOpen: (value: boolean) => void;
}
const AccOperations = ({ setIsLoginModalOpen }: Props) => {
  const handleLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const accOperations = [
    {
      title: "My Wallet",
      icon: "/assets/Images/wallet-logo.7d8917e9.svg",
    },
    {
      title: "Login",
      icon: "/assets/Images/login-icon.svg",
    },
    {
      title: "Join Now",
      icon: "/assets/Images/join-now-icon.svg",
    },
  ];
  return (
    <ul className={style.accountOperations}>
      {accOperations.map((operation, index) => (
        <SingleOperation
          key={index}
          title={operation.title}
          icon={operation.icon}
          action={operation.title === "Login" ? handleLoginModal : undefined}
        />
      ))}
    </ul>
  );
};

export default AccOperations;
