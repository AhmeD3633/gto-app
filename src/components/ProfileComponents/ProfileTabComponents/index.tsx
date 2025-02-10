import React from "react";
import style from "./style.module.css";
import Card from "../../../../public/assets/Images/silver-1.png";
import Image from "next/image";
import Table from "./Table";

const ProfileTabComponents = () => {
  return (
    <div className={style.container}>
      {/* UPPER_SECTION */}
      <div className={style.upperSection}>
        <Image src={Card} alt="card" width={350} height={200}></Image>
      </div>
      {/* LOWER_SECTION */}

      <Table />
    </div>
  );
};

export default ProfileTabComponents;
