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
      <div className="absolute bg-black/40 inset-0 w-full h-full"></div>
      <div className="w-full h-full flex items-center justify-center  text-white relative z-50 lg:py-0 py-10">
        <div className="container mx-auto space-y-5 lg:pt-0 pt-[100px]">
          <h2 className="hero-title leading-tight font-extrabold text-center">Drive the dream in one click with the most trusted rental car company in Dubai</h2>

          <p className="max-w-[100ch] mx-auto text-lg shadow-secondary lg:block hidden text-center">
            With Zenith, experience Dubai like never before. Choose from our exclusive collection of supercars and luxury SUVs for a drive that embodies elegance, power, and prestige.
          </p>

          <HeroForm />
        </div>
      </div>
    </section>
  );
};
