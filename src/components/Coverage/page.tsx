import React from "react";
import style from "./coverage.module.css";
import coverage from "../../../public/assets/Images/our-coverage.svg";
import Image from "next/image";
const page = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.top}>
          <h2>HIGHLIGHTS OF OUR COVERAGE</h2>
        </div>
        <div className={style.bottom}>
          <Image src={coverage} alt="coverage" layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default page;
