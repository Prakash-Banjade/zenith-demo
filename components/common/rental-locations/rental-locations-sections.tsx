import React from "react";
import { locations } from "./data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const RentalLocationsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto space-y-10">
        <div className="max-w-[50%] mx-auto flex flex-col justify-center items-center gap-6">
          <h4 className="text-3xl text-center font-semibold">
            Rental Locations
          </h4>
          <p className="text-center  text-gray-800 text-sm">
            Explore our curated selection of top-quality vehicles. From sleek
            sedans to rugged SUVs, find the perfect car to suit your needs and
            drive away satisfied.
          </p>
        </div>
        <div className="flex  items-center justify-between flex-wrap gap-y-6">
          {locations.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

type TItem = {
  title: string;
  image: StaticImageData;
  totalCars: number;
  price: string;
};

const Item = ({ title, image, totalCars, price }: TItem) => {
  return (
    <div className="lg:basis-1/4 md:basis-[33%] sm:basis-1/2 basis-full  p-2 relative">
      <div className="relative group overflow-hidden">
        <Image
          src={image}
          alt="Single Car"
          height={600}
          width={1000}
          priority={false}
          className="w-full h-[250px] object-cover rounded-t border group-hover:rotate-1 zen__transition__300 overflow-hidden group-hover:scale-105"
        />
        <Link
          href={"/"}
          className="absolute inset-0 w-full h-full bg-black/40 group-hover:bg-blue-500/20 zen__transition__300"
        ></Link>
      </div>

      <div className="flex flex-col gap-2 p-6 border border-gray-200 rounded-lg rounded-t-none">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <span>
            <span className="text-xs text-muted-foreground mr-1">from</span>
            <span className="text-sm font-medium">AED {price}</span>
          </span>
        </div>
        <span className="text-gray-800 text-sm">{totalCars} Cars to rent</span>
      </div>
    </div>
  );
};
