"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";
import SingleCar from "@/public/assets/images/car.png";
import Image from "next/image";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { popularCars } from "./popular-car-list";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PopularCars = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <section className="lg:py-20 md:py-16 py-10 bg-background overflow-hidden">
      <div className=" mx-auto relative max-w-[800px] px-4">
        <div className="md:mb-10 mb-6">
          <h3 className="md:text-3xl text-2xl text-center font-semibold md:mb-6 mb-4">
            <span className="text-primary">Popular</span> Cars
          </h3>
          <p className="text-center  text-muted-foreground text-sm">
            Explore our curated selection of top-quality vehicles. From sleek
            sedans to rugged SUVs, find the perfect car to suit your needs and
            drive away satisfied.
          </p>
        </div>
        <div className="border-2  hidden z-40 border-primary hover:border-secondary zen__transition__300 size-14 absolute top-1/2 left-0 md:flex items-center justify-center rounded-full cursor-pointer hover:bg-slate-500/10 ">
          <IoArrowBack />
        </div>

        <div className="border-2 z-40 border-primary   hover:border-secondary  size-14 absolute top-1/2 right-0 md:flex hidden items-center justify-center rounded-full cursor-pointer hover:bg-slate-500/10 zen__transition__300">
          <IoArrowForward />
        </div>
        <div className="slider-container relative ">
          <Slider
            {...settings}
            className="max-w-[560px] w-full relative mx-auto px-4"
          >
            {popularCars.map((item) => {
              return (
                <div className="relative w-full" key={item.id}>
                  <div
                    key={item.id}
                    className="md:w-[330px] w-full bg-white rounded-sm border  border-gray-200 p-8 mx-auto shadow-sm"
                  >
                    <div className="text-xl font-bold text-center mb-4">
                      {item.title}
                    </div>

                    <div className="md:block hidden h-[280px] w-full">
                      <Image
                        src={SingleCar}
                        alt="Single Car"
                        height={600}
                        width={1000}
                        objectFit="cover"
                        className="w-[620px] left-0 right-0 object-cover absolute"
                      />
                    </div>

                    <div className="md:hidden block  w-full mb-2">
                      <Image
                        src={SingleCar}
                        alt="Single Car"
                        height={600}
                        width={1000}
                        objectFit="cover"
                        className=" object-cover "
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex gap-3">
                        <AiOutlineDashboard className="text-primary" />
                        <span className="font-medium text-gray-400">
                          220km/h
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <GiCarWheel className="text-primary" />
                        <span className="font-medium text-gray-400">
                          105km 77kw
                        </span>
                      </div>{" "}
                      <div className="flex gap-3">
                        <TbManualGearboxFilled className="text-primary" />
                        <span className="font-medium text-gray-400">
                          Manual
                        </span>
                      </div>{" "}
                      <div className="flex gap-3">
                        <BsFillFuelPumpFill className="text-primary" />
                        <span className="font-medium text-gray-400">
                          Diesel
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-lg font-makro">
                          AED 375
                        </div>
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
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
