import React from "react";
import Banner from "@/public/assets/banners/banner-3.jpg";
import Image from "next/image";
export const ReasonToRentSection = () => {
  return (
    <section className="w-full">
      <Image
        src={Banner}
        alt="Home Banner"
        width={1400}
        height={800}
        className="w-full h-[620px] object-cover object-center"
      />
    </section>
  );
};
