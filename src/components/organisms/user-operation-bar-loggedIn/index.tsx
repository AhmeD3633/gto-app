import React from "react";
import style from "./style.module.css";
import { LoggedInAccOperations } from "@/components/molecules/Acc-operations-list-loggedIn";
import { UserOperationName } from "@/components/atoms/Acc-operations-name";

interface Props {
  handleMyWalletClick: () => void;
  handleProfileClick: () => void;
  handleLogoutClick: () => void;
}
export const UserOperationBarLoggedIn = ({
  handleMyWalletClick,
  handleProfileClick,
  handleLogoutClick,
}: Props) => {
  return (
    <div className={style.first}>
      <UserOperationName />
      <LoggedInAccOperations
        handleMyWalletClick={handleMyWalletClick}
        handleProfileClick={handleProfileClick}
        handleLogoutClick={handleLogoutClick}
      />
    </div>
  );
};
