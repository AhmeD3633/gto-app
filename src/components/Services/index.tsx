import React from "react";
import style from "./style.module.css";
import ServicesData from "./ServicesData";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          {ServicesData.map((item) => (
            <div className={style.item} key={item.id}>
              <Image src={item.image}
               layout="responsive"
               width={1024}
               height={768}
               alt={item.title} />
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
