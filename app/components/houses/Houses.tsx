import React from "react";
import img1 from "../../../public/p10-1-414x264.jpg";
import img2 from "../../../public/p14-414x264.jpg";
import HouseCard from "./HouseCard";
const Houses = () => {
  const houses: any = [
    {
      price: "$1500",
      images: [img1, img2],
      state: "For Sale",
      name: "Skyper Pool Apartment",
      address: "1423-141 E 1st Ave",
      details: {
        beds: 4,
        baths: 1,
        garages: 1,
        sqft: 225,
      },
    },
  ];
  return (
    <div className="py-12 px-9 w-[90%] m-auto">
      <h4 className="text-[24px]  text-slate-950">
        Discover Our Featured Properties
      </h4>
      <p className="text-gray-500 mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </p>
      <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {houses.map((house: any, index: boolean) => {
          <HouseCard key={index} house={house} />;
        })}
      </div>
    </div>
  );
};

export default Houses;
