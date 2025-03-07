import React from "react";
import style from "./style.module.css";
import SingleOperation from "../../atoms/single-operation/index";

interface Props {
  handleMyWalletClick: () => void;
  handleProfileClick: () => void;
  handleLogoutClick: () => void;
}

export const LoggedInAccOperations = ({
  handleMyWalletClick,
  handleProfileClick,
  handleLogoutClick,
}: Props) => {
  const accOperations = [
    {
      title: "My Wallet",
      icon: "/assets/Images/wallet-logo.7d8917e9.svg",
      action: handleMyWalletClick,
    },
    {
      title: "Profile",
      icon: "/assets/Images/join-now-icon.svg",
      action: handleProfileClick,
    },
    {
      title: "Logout",
      icon: "/assets/Images/login-icon.svg",
      action: handleLogoutClick,
    },
  ];

  return (
    <ul className={style.accountOperations}>
      {accOperations.map((operation, index) => (
        <SingleOperation
          key={index}
          title={operation.title}
          icon={operation.icon}
          action={operation.action}
        />
      ))}
    </ul>
  );
};
