"use client";
import React from "react";
import style from "./hero.module.css";
import swiperData from "./SwiperData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
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
import Link from "next/link";

const HeroSwiper = () => {
  const swiperModules = [
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
  ];

  const swiperSettings = {
    modules: swiperModules,
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: ".modifiedNext",
      prevEl: ".modifiedPrevious",
    },
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    effect: "fade",
    speed: 1200,
    loop: true,
  };

  return (
    <div className={style.swiperContainer}>
      <Swiper {...swiperSettings} className={style.swiper}>
        {swiperData.map(({ id, image, title, description }) => (
          <SwiperSlide key={id} className={style.swiperSlide}>
            <div className={style.container}>
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className={style.overlay}></div>
              <div className={style.textContainer}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.description}>{description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={style.blackOverlay}>
        <div className={style.overlayText}>
          <p>
            As a GTO member, you can enjoy up to 40% discount on the lowest
            online price you can find on major Websites for Resorts Worldwide.
          </p>
        </div>
        <div className={style.overlayButton}>
          <Link href="/join-now">
            <span>Join Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* CUSTOM_BUTTONS */}

      <div className={style.customButtons}>
        <div className={style.modifiedPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className={style.modifiedNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSwiper;
