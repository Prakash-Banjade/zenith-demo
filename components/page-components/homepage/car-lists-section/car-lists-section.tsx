import { carLists } from "@/data/car-lists";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";
import { TiStar } from "react-icons/ti";

export const CarListSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-slate-100 py-20">
      <div className="max-w-[1120px] mx-auto">
        <h4 className="text-3xl text-center font-semibold mb-10 ">
          Check also
        </h4>
        <div className="grid grid-cols-3 gap-6">
          {carLists.map((item, index) => {
            return (
              <Item
                key={index}
                title={item.title}
                acceleration={item.acceleration}
                fuelType={item.fuelType}
                image={item.image}
                path={item.path}
                power={item.power}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

type TItem = {
  title: string;
  acceleration: string;
  fuelType: string;
  power: string;
  price: string;
  rating: number;
  path: string;
  image: StaticImageData;
};

const Item = ({
  title,
  acceleration,
  fuelType,
  power,
  price,
  rating,
  path,
  image,
}: TItem) => {
  return (
    <div className="hover:bg-white hover:shadow-lg group border-slate-100 hover:scale-110 transition-all duration-200 ease-linear cursor-pointer shadow-sm border rounded-sm p-8 space-y-6">
      <div className="flex justify-between">
        <div className="">
          <div className="font-semibold  font-makro">
            AED 375{" "}
            <span className="text-gray-400 text-sm font-light">/ day</span>
          </div>
        </div>
        <div className="flex gap-0.5 items-center">
          <TiStar className="text-primary" />
          <TiStar className="text-primary" />
          <TiStar className="text-primary" />
          <TiStar className="text-primary" />
          <TiStar className="text-primary" />
        </div>
      </div>
      <div>
        <Image src={image} alt="Single Car" height={600} width={1000} />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex gap-3">
          <AiOutlineDashboard className="text-primary" />
          <span className="font-medium text-gray-400">220km/h</span>
        </div>
        <div className="flex gap-3">
          <GiCarWheel className="text-primary" />
          <span className="font-medium text-gray-400">105km 77kw</span>
        </div>{" "}
        <div className="flex gap-3">
          <TbManualGearboxFilled className="text-primary" />
          <span className="font-medium text-gray-400">Manual</span>
        </div>{" "}
        <div className="flex gap-3">
          <BsFillFuelPumpFill className="text-primary" />
          <span className="font-medium text-gray-400">Diesel</span>
        </div>
      </div>
      <div className="w-fit text-primary group-hover:bg-primary group-hover:text-white hover:!bg-secondary transition-all duration-300 ease-linear ">
        <Link
          href={path}
          className="font-medium flex  gap-2 items-center px-6 py-3"
        >
          <span>Rent a car</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};
