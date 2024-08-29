import { Button } from "@/components/ui/button";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";
import SingleCar from "@/public/assets/images/car.png";
import Image from "next/image";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export const PopularCars = () => {
  return (
    <section className="py-20 bg-background">
      <div className=" mx-auto relative max-w-[800px]">
        <h3 className="text-3xl text-center font-semibold mb-6">
          <span className="text-primary">Most Popular</span> Cars
        </h3>
        <div className="border-2 border-primary hover:border-secondary zen__transition__300 size-14 absolute top-1/2 left-0 flex items-center justify-center rounded-full cursor-pointer hover:bg-slate-500/10 ">
          <IoArrowBack />
        </div>

        <div className="border-2 border-primary   hover:border-secondary  size-14 absolute top-1/2 right-0 flex items-center justify-center rounded-full cursor-pointer hover:bg-slate-500/10 zen__transition__300">
          <IoArrowForward />
        </div>
        <div className="w-[560px] relative mx-auto">
          <div className="w-[330px] bg-white rounded-sm border  border-gray-200 p-8 mx-auto shadow-sm">
            <div className="text-xl font-bold text-center mb-4">
              Mazda 3 III
            </div>

            <div className="h-[280px] w-full">
              <Image
                src={SingleCar}
                alt="Single Car"
                height={600}
                width={1000}
                objectFit="cover"
                className="w-[620px] left-0 right-0 object-cover absolute"
              />
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
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-lg font-makro">AED 375</div>
                <span className="text-gray-400 text-sm text-right">
                  per day
                </span>
              </div>
              <Button
                size={"lg"}
                className="rounded-none hover:bg-secondary bg-primary font-medium flex items-center gap-2 px-6  shadow-sm shadow-primary hover:shadow-secondary transition-all duration-200 ease-in justify-between"
              >
                <span> Rent a Car</span>

                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
