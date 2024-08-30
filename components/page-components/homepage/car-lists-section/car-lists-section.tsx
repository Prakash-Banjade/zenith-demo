import { Button } from "@/components/ui/button";
import { TooltipWrapper } from "@/components/ui/tooltip";
import { carLists } from "@/data/car-lists";
import { CheckIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";

export const CarListSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-200 via-slate-100  lg:py-20 md:py-16 py-10">
      <div className="container mx-auto space-y-10">
        <div className="lg:max-w-[60%]  mx-auto md:mb-10 mb-6">
          <h3 className="md:text-3xl text-2xl text-center font-semibold md:mb-6 mb-4">
            <span className="text-primary">Cars</span> Collection
          </h3>
          <p className="text-center  text-muted-foreground text-sm">
            Explore our curated selection of top-quality vehicles. From sleek
            sedans to rugged SUVs, find the perfect car to suit your needs and
            drive away satisfied.
          </p>
        </div>

        <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
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

        <div className="max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6">
          <Button
            variant={"ghost"}
            className="bg-white  transition-all duration-300 ease-linear rounded-none text-gray-800 shadow-sm drop-shadow-lg hover:bg-primary hover:text-white"
          >
            View all
          </Button>
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
    <div className="hover:bg-white basis-1/3 hover:scale-105  bg-gray-50 delay-75 hover:shadow-lg group border-slate-100 md:hover:scale-110 zen__transition__300 cursor-pointer shadow-sm border rounded-sm p-8 space-y-6">
      <div className="font-makro flex justify-between items-center">
        <span className="font-semibold">AED 375 <span className="text-gray-400 text-sm font-light">/ day</span></span>
        <span className="text-sm text-gray-800">250 KM</span>
      </div>
      <div>
        <Image src={image} alt="Single Car" height={600} width={1000} />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex gap-3">
          <AiOutlineDashboard className="text-primary" />
          <span className="font-medium text-gray-400 text-sm">{acceleration}</span>
        </div>
        <div className="flex gap-3">
          <GiCarWheel className="text-primary" />
          <span className="font-medium text-gray-400 text-sm">{power}</span>
        </div>{" "}
        <div className="flex gap-3">
          <TbManualGearboxFilled className="text-primary" />
          <span className="font-medium text-gray-400 text-sm">Manual</span>
        </div>{" "}
        <div className="flex gap-3">
          <BsFillFuelPumpFill className="text-primary" />
          <span className="font-medium text-gray-400 text-sm">{fuelType}</span>
        </div>
      </div>

      <ul className="flex flex-col gap-1 text-sm">
        <TooltipWrapper label="No Deposit">
          <li className="flex gap-1 items-center text-gray-800 hover:underline w-fit">
            <CheckIcon size={16} /> No Deposit
          </li>
        </TooltipWrapper>
        <TooltipWrapper label={`Full insurance included when you rent ${title}`}>
          <li className="flex gap-1 items-center text-gray-800 hover:underline w-fit">
            <CheckIcon size={16} /> Insurance Included
          </li>
        </TooltipWrapper>
      </ul>

      {/* <div className="w-fit delay-150 text-sm  text-primary group-hover:bg-primary group-hover:text-white zen__transition__300">
        <Link
          href={path}
          className="font-medium flex  gap-2 items-center px-4 py-2"
        >
          <span>Rent a car</span>
          <FaArrowRight />
        </Link>
      </div> */}
    </div>
  );
};
