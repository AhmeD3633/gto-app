import React from "react";
import style from "./global.module.css";
const Global = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.text}>
          <h2>The Global Travel Organisation Membership</h2>
          <p>
            The Global Travel Organisation membership is the most generous and
            prestigious travel membership in the world. <br /> GTO offers its
            members very generous savings on the lowest prices they can find on
            major online websites and GTO covers all aspects of travel and
            lifestyle. Each GTO member enjoys a dedicated Personal Travel
            Assistant team that assists with all enquiries and make bookings
            seven days a week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Global;
