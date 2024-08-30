"use client";
import React from "react";
import { carTypes } from "./data";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";

export const CarTypesSection = () => {
  return (
    <section className="lg:py-20 md:py-16 py-10 bg-background">
      <div className="container">
        {/* <div className="max-w-[750px] mx-auto md:mb-10 mb-6">
          <h3 className="section-title">
            <span className="text-primary">Car</span> Types
          </h3>
          <p className="text-center  text-muted-foreground text-sm">
            Choose from a wide range of car types, from sleek sports cars to
            rugged SUVs, tailored to fit every journey and occasion.
          </p>
        </div> */}

        <div className="slider-container w-full">
          <Slider {...settings}>
            {carTypes.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Slider>
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
    <div className="pr-2">
      <div className="bg-white border p-8 cursor-pointer rounded-3xl group flex-col flex gap-4 w-full  hover:drop-shadow-sm hover:shadow-sm shadow-primary hover:bg-slate-50 zen__transition__300">
        <div className="!min-h-[50px] flex items-center">
          <Image
            src={item.icon}
            alt="Single Car"
            height={100}
            width={100}
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
              Rent now{" "}
              <IoIosArrowRoundForward className="text-primary w-0 h-6 group-hover:w-6 zen__transition__300" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
