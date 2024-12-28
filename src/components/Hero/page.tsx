"use client";
import React from "react";
import style from "./hero.module.css";
import swiperData from "./SwiperData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import Image from "next/image";

const HeroSwiper = () => {
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={3000}
        // loop={true}
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={style.container}>
              <Image
                src={item.image}
                alt={item.title}
                layout="responsive"
                width={1536}
                height={1024}
                priority
              />
              <div className={style.textContainer}>
                <h2 className={style.title}>{item.title}</h2>
                <p className={style.description}>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
