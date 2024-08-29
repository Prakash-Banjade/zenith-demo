import React from "react";
import { carTypes } from "./data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export const CarTypesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-[750px] mx-auto mb-10">
          <h3 className="text-3xl text-center font-semibold mb-6">
            <span className="text-primary">Car</span> Types
          </h3>
          <p className="text-center  text-muted-foreground text-sm">
            Choose from a wide range of car types, from sleek sports cars to
            rugged SUVs, tailored to fit every journey and occasion.
          </p>
        </div>
        <div className="flex gap-6 justify-between items-center">
          {carTypes.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

type TItem = {
  title: string;
  icon: any;
  totalCars: number;
};

const Item = ({ item }: { item: TItem }) => {
  return (
    <div className="bg-white border p-8 cursor-pointer rounded-3xl group flex-col flex gap-4 w-full  hover:drop-shadow-sm hover:shadow-sm shadow-primary hover:bg-slate-50 zen__transition__300">
      <div className="rounded-3xl border p-4 bg-slate-100 size-20 flex items-center justify-center">
        <Image
          src={item.icon}
          alt="Single Car"
          height={50}
          width={50}
          className="text-black"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-muted-foreground text-sm relative h-6">
          <span className="group-hover:invisible group-hover:opacity-0 group-hover:translate-y-2 absolute zen__transition__300">
            Available Cars : {item.totalCars}
          </span>
          <Link
            href="/"
            className="invisible flex group absolute opacity-0 group-hover:opacity-100  translate-y-6 group-hover:translate-y-0 group-hover:visible text-primary font-medium zen__transition__300"
          >
            {" "}
            View More{" "}
            <IoIosArrowRoundForward className="text-primary w-0 h-6 group-hover:w-6 zen__transition__300" />
          </Link>
        </p>
      </div>
    </div>
  );
};
