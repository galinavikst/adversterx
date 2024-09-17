import React from "react";

const Step1 = () => {
  return (
    <section className="py-5 px-4 w-full h-full min-h-screen flex flex-col justify-between gap-10 sm:justify-center items-center">
      <div className="max-w-[1000px] mx-auto flex sm:gap-10 gap-3 flex-col justify-center items-center">
        <div className="text-white bg-white bg-opacity-20 text-center backdrop-blur-sm w-fit sm:max-w-full max-w-64 border-white border rounded-[40px] md:py-4 md:px-8 py-1 px-2 bg-blur-sm">
          <p className="text-shadow-black">
            Stop spending time on mediocre online stuff!
          </p>
        </div>
        <h1 className="headers" data-text="Explore our intriguing 3D game">
          Explore our intriguing 3D game
        </h1>
        <p className="font-medium sm:text-2xl text-xs tracking-widest uppercase text-yellow-light text-center">
          instead and experience unparalleled pleasure like you've never seen
          before.
        </p>
      </div>

      <div className="flex justify-center gap-3 md:gap-12 flex-col-reverse sm:flex-row w-full">
        <button className="btn btn-default">No, thanks</button>
        <button className="btn btn-accent">Continue</button>
      </div>
    </section>
  );
};

export default Step1;
