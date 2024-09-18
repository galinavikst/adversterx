"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useQueryString } from "@/static/hooks";

const Step3 = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useQueryString();

  return (
    <section className="py-5 px-4 w-full h-full min-h-screen flex flex-col justify-between gap-10 sm:justify-center items-center">
      <div className="max-w-[800px] mx-auto flex sm:gap-10 gap-3 flex-col justify-center items-center">
        <p
          className="headers md:text-[120px] text-[48px] md:leading-none leading-10"
          data-text="Warning"
        >
          Warning
        </p>
        <p className="text-lg lg:text-3xl text-center text-white">
          You must be at least 18 years old and comfortable with mature topics
          to play the game.
        </p>
      </div>

      <div className="flex justify-center gap-3 md:gap-12 flex-col-reverse sm:flex-row w-full">
        <button
          onClick={() =>
            router.push(pathname + "?" + createQueryString("step", "1"))
          }
          className="btn btn-accent"
        >
          Ok, Continue
        </button>
      </div>
    </section>
  );
};

export default Step3;
