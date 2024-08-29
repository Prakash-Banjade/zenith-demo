import React from "react";
import { IconType } from "react-icons";
import { waysToBook } from "./data";

export const WaysToBook = () => {
  return (
    <section className="bg-black py-10">
      <div className="container grid grid-cols-3 gap-x-10 gap-y-4">
        {waysToBook.map((item, index) => (
          <Item key={index} {...item} />
        ))}
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
    <div className="flex gap-6 p-6 items-start">
      <div className="size-16 bg-primary rounded-full flex items-center justify-center">
        <Icon className="text-white size-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-primary text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};
