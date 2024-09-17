"use client";
import React, { useState } from "react";
import Image from "next/image";
import ON from "@/assets/soundon.svg";
import OFF from "@/assets/soundoff.svg";

const Sound = () => {
  const [sound, setSound] = useState<boolean>(true);
  return (
    <button
      className="absolute w-7 md:w-12 mx-3 md:mx-16 my-6 md:my-12 top-0 right-0"
      onClick={() => setSound((state) => !state)}
    >
      <Image src={sound ? ON : OFF} alt="sound" className="w-auto h-auto" />
    </button>
  );
};

export default Sound;
