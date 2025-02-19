import React from "react";
import style from "./style.module.css";
import GtoLogo from "@/components/atoms/GTO-logo";
import NavBarLinks from "@/components/molecules/NavBarLinks";
import EmeraldLogo from "@/components/atoms/Emerald-logo";

const HeaderNavigationOrganism = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <GtoLogo />
        <NavBarLinks />
      </div>
      <EmeraldLogo />
    </div>
  );
};

export default HeaderNavigationOrganism;
