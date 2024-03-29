import React from "react";
import HeroBtn from "./HeroBtn";
import { RiSearchLine } from "react-icons/ri";

const Hero = () => {
  const buttons = [
    { title: "BUY", underline: "bg-[#e20112]" },
    { title: "RENT" },
    { title: "SELL" },
    { title: "PRE-APPROVAL" },
    { title: "JUST SOLD", css: "hidden sm:flex" },
    { title: "HOME VALUE", css: "hidden sm:flex" },
  ];
  return (
    <div className="h-[25rem] sm:h-[27rem] flex  overflow-hidden">
      <div className="absolute  w-full z-20     ">
        <div className="bg-gray-900/10 absolute z-10 w-full h-[25rem]  "></div>
        <img
          src={"/hp-hero-desktop-xl-2x.jpg"}
          className="object-cover w-full  h-[25rem] sm:h-[27rem] "
        />
      </div>
      <div className="relative z-30 flex flex-col items-center w-full pt-12">
        <p
          className="text-white text-[32px] sm:text-[57px] font-bold"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          To each their home.
        </p>
        <p
          className="text-white  pt-2 sm:pt-0  sm:text-[23px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Lets find a home thats perfect for you
        </p>
        <ul className="" data-aos="fade-up" data-aos-duration="2000">
          <div className="pt-8 flex space-x-4 sm:space-x-2">
            {buttons.map((button, index) => (
              <HeroBtn
                key={index}
                title={button.title}
                underline={button.underline}
                css={button.css}
              />
            ))}
          </div>
        </ul>
        <div
          className="relative mt-9"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <input
            type="search"
            className="bg-white py-4  w-[22rem] sm:w-[37rem] rounded-full pl-5 placeholder:text-gray-500 sm:placeholder:text-[20px] placeholder:text-[14px] outline-0 "
            placeholder="Adress, School, City or Neighborhood"
          />
          <div className="absolute w-[2.7rem] h-[2.7rem] rounded-full  bg-[#e20112] top-[0.4rem] right-1 flex items-center justify-center">
            <RiSearchLine className="text-white text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
