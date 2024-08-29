import React from "react";
import HomeBannerImage from "@/public/assets/banners/banner-2.jpg";
import Image from "next/image";
import { HeroForm } from "./hero-form";

export const HomeHeroSection = () => {
  return (
    <section className="h-screen max-h-[1020px] w-full relative z-40">
      <Image
        src={HomeBannerImage}
        alt="Home Banner"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className="absolute bg-black inset-0 w-full h-full opacity-30"></div>
      <div className="w-full h-full flex items-center justify-center  text-white relative z-50">
        <div className="container mx-auto 2xl:space-y-14 xl:space-y-10 md:space-y-8 space-y-3">
          <div className="h-fit 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold">
            <h2 className="max-w-[680px]">Fast and easy way to rent a car</h2>
          </div>

          <p className="xl:max-w-[40vw] text-lg  shadow-secondary">
            Discover the easiest way to rent a car in Dubai with these quick
            tips. Streamline your experience, enjoy fast service, and get on the
            road effortlessly.
          </p>

          <HeroForm />
        </div>
      </div>
    </section>
  );
};
