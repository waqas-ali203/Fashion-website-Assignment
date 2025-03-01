import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/Assets/Hero-background.jfif')] bg-cover bg-center h-[648px] w-full flex items-center">
      <div className="flex flex-col justify-center items-start pl-10">
        <h1 className="text-white font-extrabold text-4xl leading-relaxed">
          STYLISH PICKS BEATS
          <span>
            <br />
          </span>
          THE HEAT
        </h1>
        <button className="text-white hover:bg-black hover:text-white font-bold border text-2xl border-white border-spacing-6 px-5 py-3 mt-7">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
