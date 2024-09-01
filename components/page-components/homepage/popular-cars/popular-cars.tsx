"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";
import Image from "next/image";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { popularCars } from "./popular-car-list";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PopularCars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCar, setCurrentCar] = useState(popularCars[0]);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    setCurrentCar(currentSlide ? popularCars[currentSlide] : popularCars[0]);
  }, [currentSlide])

  var settings = {
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
  };

  return (
    <section className="lg:py-20 md:py-16 py-10 bg-background overflow-hidden">
      <div className="mx-auto relative max-w-[800px] px-4">
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

        <button
          type="button"
          className="border-2  hidden z-40 border-primary hover:border-secondary zen__transition__300 size-14 absolute top-1/2 left-0 md:flex items-center justify-center rounded-full cursor-pointer hover:bg-slate-500/10"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <IoArrowBack />
        </button>
        <button
          type="button"
          className="border-2 z-40 border-primary hover:border-secondary size-14 absolute top-1/2 right-0 md:flex hidden items-center justify-center rounded-full cursor-pointer hover:bg-slate-500/10 zen__transition__300"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <IoArrowForward />
        </button>

        <section className="top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-50">
          <Slider
            ref={sliderRef}
            {...settings}
            className="max-w-[560px] w-full relative mx-auto px-4"
          >
            {popularCars.map((item) => {
              return (
                <div className="" key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={600}
                    width={1000}
                    className="left-0 right-0 object-fit max-h-[250px] w-auto block mx-auto"
                  />
                </div>
              );
            })}
          </Slider>
        </section>

        <div className="md:w-[330px] w-full bg-white rounded-sm border  border-gray-200 p-8 mx-auto shadow-sm">
          <div className="text-xl font-bold text-center mb-4">
            {currentCar.title}
          </div>

          <div className="h-[280px]"></div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex gap-3">
              <Image src="/seat.svg" alt="car-wheel" width={20} height={20} className="w-4 h-4" />
              <span className="font-medium text-gray-400">
                {currentCar.seats}
              </span>
            </div>
            <div className="flex gap-3">
              <GiCarWheel className="text-primary" />
              <span className="font-medium text-gray-400">
                {currentCar.power}
              </span>
            </div>{" "}
            <div className="flex gap-3">
              <TbManualGearboxFilled className="text-primary" />
              <span className="font-medium text-gray-400 capitalize">
                {currentCar.transmission}
              </span>
            </div>{" "}
            <div className="flex gap-3">
              <BsFillFuelPumpFill className="text-primary" />
              <span className="font-medium text-gray-400 capitalize">
                {currentCar.fuelType}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-lg font-makro">
                AED {currentCar.price}
              </div>
              <span className="text-gray-400 text-sm text-right">
                per day
              </span>
            </div>
            <Button
              size={"lg"}
              className="rounded-none hover:bg-secondary bg-primary font-medium flex items-center gap-2 px-6  shadow-sm shadow-primary hover:shadow-secondary transition-all duration-200 ease-in justify-between"
            >
              <span>Rent a Car</span>
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
