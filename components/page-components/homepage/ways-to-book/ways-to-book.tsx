import React from "react";
import { IconType } from "react-icons";
import { waysToBook } from "./data";

export const WaysToBook = () => {
  return (
    <section className="bg-white lg:py-20 md:py-16 py-10">
      <div className="container mx-auto space-y-10">
        <div className="lg:max-w-[50%] mx-auto md:mb-10 mb-6">
          <h3 className="md:text-3xl text-2xl text-center font-semibold md:mb-6 mb-4">
            <span className="text-primary">Simple</span> Booking Steps
          </h3>
          <p className="text-center  text-muted-foreground text-sm">
            Explore our curated selection of top-quality vehicles. From sleek
            sedans to rugged SUVs, find the perfect car to suit your needs and
            drive away satisfied.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  lg:gap-x-10 lg:gap-y-4 gap-4">
          {waysToBook.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

type TItem = {
  icon: IconType;
  title: string;
  description: string;
};

const Item = ({ icon, title, description }: TItem) => {
  const Icon = icon;
  return (
    <div className="flex gap-6 md:col-span-1 col-span-3 p-6 items-start shadow-lg border rounded-xl">
      <div className="size-16 border-primary border rounded-full flex items-center justify-center">
        <Icon className="text-primary size-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-primary text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
