import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { Redressed } from "next/font/google";
import NavBtn from "./NavBtn";

const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const buttons = [
    { title: "Buy", underline: "-bottom-[1.3rem]   bg-[#e20112]" },
    { title: "Sell", underline: "-bottom-[1.3rem]" },
    { title: "Rent", underline: "-bottom-[1.3rem]" },
    { title: "Mortgage", underline: "-bottom-[1.3rem]" },
    { title: "Find Realtors", underline: "-bottom-[1.3rem]" },
    { title: "My Home", underline: "-bottom-[1.3rem]" },
    { title: "News & Insights", underline: "-bottom-[1.3rem]" },
    {
      title: "Advertise",
      border: "border p-1 rounded-[0.3rem] border-gray-400",
    },
  ];
  return (
    <div className="bg-white">
      {" "}
      <div className="flex  justify-between lg:py-0 py-2 px-4 items-center max-w-[98vw] sm:max-w-[90vw]  lg:max-w-[85vw]  mx-auto whitespace-nowrap">
        {/* Left Menu */}
        <div className=" lg:hidden flex items-center ">
          <FiMenu className="w-7 h-7" />
        </div>
        {/* Mid Logo */}
        <div className="shrink-0 pr-2">
          {/* Logo */}
          <div className=" -my-[0.7rem] ">
            <div className={`${redressed.className} w-32 text-[32px] shrink-0`}>
              <span className="text-[#e20112]  ">Real</span>
              <span className=" w-32">Estate</span>
            </div>
          </div>
        </div>
        {/* Links */}
        <div className="hidden lg:flex   ">
          <ul className="flex   space-x-1 items-center     py-4 ">
            {buttons.map((button, index) => (
              <NavBtn
                key={index}
                title={button.title}
                border={button.border}
                underline={button.underline}
              />
            ))}
          </ul>
        </div>
        {/* Right Authentification */}
        <div className="flex h-full items-center  lg:hidden">
          <div className="w-9 h-9 bg-[#e20112] rounded-full text-white flex items-center justify-center ">
            <HiOutlineUser className="text-[26px] " />
          </div>
        </div>

        <div className="hidden lg:flex   items-center pl-6 text-[15px]">
          <button>Log in</button>
          <div className="   bg-[#e20112] py-[6px] text-white rounded-full px-4 ml-6 flex items-center ">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
