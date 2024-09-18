import React, { useState } from "react";
import Image from "next/image";
import ARROW from "@/assets/arrow.svg";
import { sliderData } from "@/static/data";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slide = (direction: string) => {
    if (direction === "next") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    } else if (direction === "prev") {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
      );
    }
  };

  const slideBtnClasses =
    "btn-accent shadow-none focus:shadow-full-inner-shadow hover:shadow-full-inner-shadow lg:w-[88px] lg:h-[88px] w-[50px] h-[50px] rounded-full bg-white";

  return (
    <div className="md:w-[85%] w-full mx-auto flex justify-between items-center gap-1">
      <button onClick={() => slide("prev")} className={slideBtnClasses}>
        <Image
          src={ARROW}
          alt="arrow"
          className={`lg:translate-x-1/2 translate-x-3/4 lg:w-auto w-8`}
        />
      </button>
      <div className="lg:h-[525px] lg:w-[463px] w-[225px] h-[278px] flex flex-col justify-center items-center 3xl:py-10 3xl:px-16 py-4 px-5 bg-white bg-opacity-20 border border-white border-opacity-40 rounded-[20px]">
        {sliderData.map((el, i) => (
          <div
            key={el.id}
            className={`${
              i === activeIndex ? "block" : "hidden"
            } flex justify-center flex-col items-center lg:gap-8 gap-3`}
          >
            <div
              style={{ backgroundImage: `url(${el.img})` }}
              className="animate-appear h-[199px] w-[171px] lg:w-[321px] lg:h-[374px] bg-120% bg-center overflow-hidden rounded-[20px]"
            ></div>
            <p className="text-nowrap text-white text-center uppercase text-xl lg:text-3xl font-semibold">
              {el.title}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => slide("next")}
        className={`${slideBtnClasses} rotate-180`}
      >
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
