import React from "react";
import style from "./style.module.css";

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2>GTO IN NUMBERS</h2>
        <p>
          More than <span style={{ color: "#d4a742" }}>1.2 </span>million happy
          members by the end of 2023
        </p>
        <p>
          More than<span style={{ color: "#d4a742" }}> £260 </span> million in
          bookings by the end of 2024
        </p>
      </div>
    </div>
  );
};

export default page;
