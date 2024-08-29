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
      <div className="absolute bg-black inset-0 w-full h-full opacity-40"></div>
      <div className="w-full h-full flex items-center justify-center  text-white relative z-50">
        <div className="container mx-auto space-y-14">
          <div className="h-fit text-7xl font-semibold">
            <div className="">Fast and easy way</div>
            <div className="flex gap-4">
              to
              <div className="relative">
                <span> rent a car</span>
                <div className="w-full absolute -bottom-1 bg-primary h-1.5 rounded"></div>
              </div>
            </div>
          </div>

          <p className="max-w-[40vw] text-lg font-medium  shadow-primary">
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
