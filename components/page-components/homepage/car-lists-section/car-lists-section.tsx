import { Button } from "@/components/ui/button";
import { TooltipWrapper } from "@/components/ui/tooltip";
import { CarList } from "@/data/car-lists";
import { CheckIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarWheel } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";

export const CarListSection = ({ carsList, title, subTitle }: { carsList: CarList[], title?: React.ReactNode, subTitle?: React.ReactNode }) => {
  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-200 via-slate-100  lg:py-20 md:py-16 py-10">
      <div className="container mx-auto space-y-10">
        <div className="lg:max-w-[60%]  mx-auto md:mb-10 mb-6">
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-center md:font-bold font-semibold md:mb-6 mb-4">
            {title || <>
              <span className="text-primary">Cars</span> Collection
            </>}
          </h3>
        </div>

        <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
          {carsList.map((item, index) => {
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
      {subTitle && <p className="text-center text-muted-foreground text-sm mt-5">
        {subTitle}
      </p>}
    </section>
  );
};

type TItem = {
  title: string;
  acceleration: string;
  fuelType: string;
  power: string;
  price: number;
  rating: number;
  path: string;
  image: string;
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
    <div className="hover:bg-white basis-1/3 bg-gray-50 delay-75 hover:shadow-lg group border-slate-100 zen__transition__300 shadow-sm border border-border rounded-md p-4 space-y-6">
      <div className="font-makro flex justify-between items-center">
        <span className="font-semibold">AED {price.toLocaleString()} <span className="text-gray-400 text-sm font-light">/ day</span></span>
        <span className="text-sm text-gray-800">250 KM</span>
      </div>
      <div className="h-[120px] !w-full relative">
        <Image src={image} alt={title} fill objectFit="contain" className="scale-110" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex gap-3">
          <Image src="/seat.svg" alt="car-wheel" width={20} height={20} className="w-4 h-4" />
          <span className="font-medium text-gray-400 text-sm">4 Seater</span>
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
        <TooltipWrapper label="No Deposit Required">
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

      <div className="flex space-x-2">
        <TooltipWrapper label={`Click to call for booking ${title}`}>
          <Button className="flex-1 bg-gray-100 text-gray-800 hover:bg-gray-200" variant="outline">
            <PhoneIcon className="w-4 h-4 mr-2" />
            Call
          </Button>
        </TooltipWrapper>
        <TooltipWrapper label={`Click to whatsapp for booking ${title}`}>
          <Button className="flex-1 bg-green-500 text-white hover:bg-green-600">
            <MessageCircleIcon className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </TooltipWrapper>
      </div>

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
