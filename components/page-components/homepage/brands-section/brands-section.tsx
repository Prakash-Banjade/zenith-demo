"use client";
import React from "react";
import { BrandList, brandsList } from "./data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";

export const BrandsSection = () => {
  return (
    <section className="lg:pb-20 md:pb-16 pb-10 bg-background">
      <div className="container">
        <header className="flex flex-col gap-2 md:mb-10 mb-6">
          <h3 className="section-title !text-left">
            <span className="text-primary">Experience Luxury</span> on Dubai's Roads
          </h3>
          <p className="text-muted-foreground text-sm max-w-[100ch]">
            Choose from our premium selection of world-class brands, perfectly suited for the streets of Dubai.
          </p>
        </header>

        <div className="slider-container w-full">
          <Slider {...settings}>
            {brandsList.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const Item = ({ item }: { item: BrandList }) => {
  return (
    <div className="pr-2">
      <div className="bg-white border p-4 cursor-pointer rounded-xl group flex-col flex gap-2 w-full hover:drop-shadow-sm hover:shadow-sm shadow-primary hover:bg-slate-50 zen__transition__300">
        <div className="!min-h-[50px] flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.name}
            height={100}
            width={100}
            className="text-black"
          />
        </div>
        <h3 className="text-lg font-medium text-center">{item.name}</h3>
      </div>
    </div>
  );
};
