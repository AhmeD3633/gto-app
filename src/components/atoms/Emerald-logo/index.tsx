import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import emerald from "../../../../public/assets/Images/emerlad.svg";
import etisalat from "../../../../public/assets/Images/etisalat-logo.png";

const EmeraldLogo = () => {
  return (
    <div className={style.container}>
      <Image src={emerald} alt="emerald" />
      <Image src={etisalat} alt="etisalat" />
    </div>
  );
};

export default EmeraldLogo;
