import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { services } from "./data";

export const ServicesSection = () => {
  return (
    <section className="bg-white lg:py-20 py-10">
      <div className="container mx-auto space-y-10">
        <div className="lg:max-w-[50%] mx-auto flex flex-col justify-center items-center gap-6">
          <h4 className="text-3xl text-center font-semibold">
            <span className="text-primary">Our</span> Services
          </h4>
          <p className="text-center  text-muted-foreground text-sm">
            Elevate your Dubai experience with luxury cars, helicopters, and
            yachts. Seamless bookings and top-notch service for unforgettable
            adventures.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
          {services.map((item, index) => (
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
  price: string;
};

const Item = ({ title, image, price }: TItem) => {
  return (
    <div className="  p-2 relative">
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
          className="absolute flex items-center justify-center text-white text-xl  font-semibold inset-0 w-full h-full bg-gradient-to-r bg-black/20 group-hover:bg-blue-500/20 zen__transition__300"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};
