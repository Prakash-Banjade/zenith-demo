import React from "react";
import { IconType } from "react-icons";
import { waysToBook } from "./data";

export const WaysToBook = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto space-y-10">
        <div className="max-w-[50%] mx-auto flex flex-col justify-center items-center gap-6">
          <h3 className="text-3xl text-center font-semibold">
            <span className="text-primary">Simple</span> Booking Steps
          </h3>
          <p className="text-center  text-muted-foreground text-sm">
            Explore our curated selection of top-quality vehicles. From sleek
            sedans to rugged SUVs, find the perfect car to suit your needs and
            drive away satisfied.
          </p>
        </div>

        <div className=" grid grid-cols-3 gap-x-10 gap-y-4">
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
    <div className="flex gap-6 p-6 items-start shadow-lg border rounded-xl">
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
