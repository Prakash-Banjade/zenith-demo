import React from "react";
import { adventureLists } from "./data";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const AdventureSection = () => {
  return (
    <section className="bg-[#F7F7F7] py-20">
      <div className="container mx-auto space-y-10">
        <div className="lg:max-w-[60%] mx-auto flex flex-col justify-center items-center gap-6">
          <h4 className="text-3xl text-center font-semibold">
            <span className="text-primary">Adventures</span> In Dubai
          </h4>
          <p className="text-center  text-muted-foreground text-sm">
            Embrace the Excitement with Thrilling Desert Safaris, High-Speed Jet
            Skiing, Luxurious Yacht Cruises, and Off-Road Buggy Expeditions in a
            City of Wonders.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
          {adventureLists.map((item) => (
            <Item key={item.title} item={item} />
          ))}
        </div>

        <div className="max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6">
          <Button
            variant={"ghost"}
            className="bg-white  transition-all duration-300 ease-linear rounded-none text-gray-800 shadow-sm drop-shadow-lg hover:bg-primary hover:text-white"
          >
            Explore All
          </Button>
        </div>
      </div>
    </section>
  );
};

type TItem = {
  item: (typeof adventureLists)[number];
};

const Item = ({ item }: TItem) => {
  return (
    <div
      key={item.title}
      className=" bg-white rounded-3xl relative h-[320px] overflow-hidden group"
    >
      <Image
        src={item.image}
        alt="Single Car"
        height={600}
        width={600}
        className=" h-full w-full object-cover absolute inset-0 group-hover:scale-125 zen__transition__300"
      />
      <div className="absolute inset-0 h-full w-full group-hover:bg-black/30 zen__transition__500"></div>

      <div className="absolute inset-0 h-full w-full  bg-gradient-to-t from-black via-black/40 to-black/20"></div>
      <div className="absolute p-4 bottom-0 translate-y-[68%]  group-hover:translate-y-0 zen__transition__500">
        <div className="flex flex-col gap-4 text-white">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="">{item.description}</p>
          <Link
            href={item.path}
            className="text-secondary zen__transition__300 hover:text-white gap-1 flex items-center font-semibold animate__icon"
          >
            <span>Book Now</span>

            <FaArrowRight className=" zen__transition__300 icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};
