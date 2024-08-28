import React from "react";
import HomeBannerImage from "@/public/assets/banners/home-banner.jpg";
import Image from "next/image";

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

      <div className="absolute bg-black inset-0 w-full h-full opacity-50"></div>
      <div className="w-full h-full flex items-center justify-center relative z-50">
        <div className="container h-fit text-8xl text-white font-semibold">
          <div className="">Fast and easy way</div>
          <div className="flex gap-4">
            to 
            <div className="relative text-primary">
             <span>  rent a car</span>
              <div className="w-full absolute bottom-0 bg-primary h-0.75 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
