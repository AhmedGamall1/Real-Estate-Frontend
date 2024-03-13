"use client";
import Image from "next/image";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { PiGarageLight } from "react-icons/pi";
import { FaEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const HouseCard = ({ house }: any) => {
  return (
    <div className="border-slate-300 border rounded-md overflow-hidden group hover:shadow-xl ">
      <div className="relative cursor-pointer">
        <Image src={house.images[0]} alt="house" className="" />

        <div className="absolute inset-0 w-full overflow-hidden bg-black  opacity-0 transition duration-500 ease-in-out group-hover:opacity-40"></div>

        <div className="absolute z-10 top-4 right-4">
          <div className="bg-[#0D263B] uppercase rounded-md px-[14px] py-[4px] text-white text-[10px] font-[600]">
            {house.state}
          </div>
        </div>
        <div className="absolute z-10 top-4 left-4">
          <div className="bg-[#0061DF] uppercase rounded-md px-[14px] py-[4px] text-white text-[10px] font-[600]">
            Featured
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="px-4">
          <h4 className="text-slate-800 text-[14px] font-[600] cursor-pointer hover:text-[#0061DF]">
            {house.name}
          </h4>
          <span className="mt-6 text-gray-500 text-[12px] cursor-pointer">
            {house.address}
          </span>
        </div>
        <div className="w-full px-4 mt-4 flex justify-between items-center text-gray-500">
          <div className="flex-col justify-center items-center">
            <IoBedOutline size={23} className="w-full" />
            <div className="mt-1 text-[12px]">{house.details.beds} Beds</div>
          </div>
          <div className="flex-col justify-center items-center">
            <LiaBathSolid size={23} className="w-full" />
            <div className="mt-1 text-[12px]">{house.details.baths} Baths</div>
          </div>
          <div className="flex-col justify-center items-center">
            <PiGarageLight size={24} className="w-full" />
            <div className="mt-1 text-[12px]">
              {house.details.garages} Garages
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <TfiRulerAlt2 size={23} className="w-full" />
            <div className="mt-1 text-[12px]">{house.details.sqft} Sqft</div>
          </div>
        </div>
        <div className="w-full bg-slate-300 h-[1px] my-5" />
        <div className="flex justify-between items-center px-4">
          <div className="text-slate-800 text-[14px] font-[600]">
            {house.price}
          </div>
          <div className="flex items-center gap-4 justify-center text-gray-500">
            <FaEye size={20} className="cursor-pointer" title="View house" />
            <FaRegHeart
              size={20}
              className="cursor-pointer"
              title="Add To Wishlist"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
