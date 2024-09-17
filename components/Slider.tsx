"use client";
import React from "react";
import Image from "next/image";
import ARROW from "@/assets/arrow.svg";
import { sliderData } from "@/static/data";

const Slider = () => {
  return (
    <div className="md:w-[85%] w-full mx-auto flex justify-between items-center gap-1">
      <button className="btn-accent shadow-none lg:w-[88px] lg:h-[88px] w-[50px] h-[50px] rounded-full bg-white">
        <Image
          src={ARROW}
          alt="arrow"
          className="lg:translate-x-1/2 translate-x-3/4 lg:w-auto w-8"
        />
      </button>
      <div className="lg:h-[525px] lg:w-[463px] w-[225px] h-[278px] flex flex-col justify-center items-center 3xl:py-10 3xl:px-16 py-4 px-5 bg-white bg-opacity-20 border border-white border-opacity-40 rounded-[20px]">
        <Image src={sliderData[0].img} alt="hero" className="h-auto w-auto" />
        <p className="text-white text-center uppercase">
          {sliderData[0].title}
        </p>
      </div>
      <button className="btn-accent rotate-180 shadow-none lg:w-[88px] lg:h-[88px] w-[50px] h-[50px] rounded-full bg-white">
        <Image
          src={ARROW}
          alt="arrow"
          className="lg:translate-x-1/2 translate-x-3/4 lg:w-auto w-8"
        />
      </button>
    </div>
  );
};

export default Slider;
