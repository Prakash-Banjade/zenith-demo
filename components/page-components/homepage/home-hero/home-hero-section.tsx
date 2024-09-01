import React from "react";
import HomeBannerImage from "@/public/assets/banners/hero-background.webp";
import Image from "next/image";
import { HeroForm } from "./hero-form";

export const HomeHeroSection = () => {
  return (
    <section className="lg:h-screen max-h-[750px] w-full relative z-40">
      <Image
        src={HomeBannerImage}
        alt="Home Banner"
        layout="fill"
        priority
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className="absolute bg-black inset-0 w-full h-full opacity-50"></div>
      <div className="w-full h-full flex items-center justify-center  text-white relative z-50 lg:py-0 py-10">
        <div className="container mx-auto 2xl:space-y-14 xl:space-y-10 md:space-y-8 space-y-3 lg:pt-0 pt-[100px]">
          <div className="h-fit 2xl:text-7xl xl:text-6xl lg:text-5xl text-3xl font-semibold">
            <h2 className="max-w-[680px]">Drive the dream in one click</h2>
          </div>

          <p className="xl:max-w-[40vw] text-lg  shadow-secondary lg:block hidden">
            With Zenith, experience Dubai like never before. Choose from our exclusive collection of supercars and luxury SUVs for a drive that embodies elegance, power, and prestige.
          </p>

          <HeroForm />
        </div>
      </div>
    </section>
  );
};
