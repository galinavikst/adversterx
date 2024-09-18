"use client";
import React from "react";
import Slider from "./Slider";
import { usePathname, useRouter } from "next/navigation";
import { useQueryString } from "@/static/hooks";

const Step2 = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useQueryString();

  return (
    <section className="h-full w-[95%] sm:w-[80%] flex flex-col justify-between gap-5 xl:gap-12 mx-auto">
      <div className="py-5 px-4">
        <h2
          className="headers text-2xl lg:text-6xl"
          data-text="Who Would You Choose as Your First Partner, if you play right now?"
        >
          Who Would You Choose as Your First Partner, if you play right now?
        </h2>
      </div>

      <Slider />
      <button
        onClick={() =>
          router.push(pathname + "?" + createQueryString("step", "3"))
        }
        className="btn btn-accent mx-auto md:w-[463px] w-[100%] mb-8 xl:mb-16"
      >
        next
      </button>
    </section>
  );
};

export default Step2;
