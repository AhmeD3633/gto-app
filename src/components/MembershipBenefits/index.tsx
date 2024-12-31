import React from "react";
import style from "./style.module.css";
import suite from "../../../public/assets/Images/suite.svg";
import benefits from "../../../public/assets/Images/test.svg";
import Image from "next/image";
const page = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Image src={suite} alt="suite" layout="responsive"/>
      </div>
      <div className={style.right}>
        <Image src={benefits} alt="benefits" layout="responsive"/>
      </div>
    </div>
  );
};

export default page;
