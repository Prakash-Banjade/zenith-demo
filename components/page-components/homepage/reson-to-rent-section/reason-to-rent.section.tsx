import React from "react";
import { IconType } from "react-icons";
import { whyUs } from "./data";

export const ReasonToRentSection = () => {
  return (
    <section
      className="w-full relative bg-fixed  lg:py-32 md:py-24 py-16"
      style={{
        backgroundImage: `url('/assets/banners/banner-3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-full h-full inset-0 bg-black/70" />

      <div className="container mx-auto relative space-y-14">
        <h3 className="text-white xl:text-4xl text-3xl font-semibold tracking-wide">
          <span>Reason to rent car in</span>
          <br />
          <span className="relative">
            <span>our company</span>
            <span className="w-full block absolute -bottom-4 bg-secondary h-1.5 rounded"></span>
          </span>
        </h3>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
          {whyUs.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

type TItem = {
  icon: IconType;
  title: string;
  description: string;
};

const Item = ({ icon, title, description }: TItem) => {
  const Icon = icon;
  return (
    <div className="p-6 space-y-4 group hover:scale-105  hover:bg-orange-500/10 zen__transition__300  cursor-pointer  shadow border-orange-500/50 border rounded-lg">
      <div className="size-12 group-hover:bg-secondary delay-75 zen__transition__300  border border-secondary rounded-full flex items-center justify-center">
        <Icon className="text-secondary size-5 text-white zen__transition__300 " />
      </div>
      <div className="flex-1 zen__transition__300 ">
        <h3 className="text-orange-500 text-lg font-semibold mb-2 zen__transition__300 ">
          {title}
        </h3>
        <p className="text-white text-sm zen__transition__300 ">
          {description}
        </p>
      </div>
    </div>
  );
};
