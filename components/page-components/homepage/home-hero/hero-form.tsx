"use client";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaLocationArrow } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
const schema = z.object({
  carType: z.string().optional(),
  brand: z.string().optional(),
  destination: z.string().optional(),
});

export const HeroForm = () => {
  const { register } = useForm({
    defaultValues: {
      carType: "",
      brand: "",
      destination: "",
    },
  });
  return (
    <form className="grid grid-cols-4 gap-3 lg:!mt-20 !mt-10 sm:flex-row flex-col">
      <div className="bg-white shadow-lg rounded-sm md:h-14 h-12 py-3 px-3 flex items-center justify-center sm:col-span-2 lg:col-span-1 col-span-4">
        <Input
          {...register("destination")}
          placeholder="Your destination"
          className="border-0 flex-1 focus-visible:ring-offset-0 focus-visible:ring-0 text-black sm:col-span-2 lg:col-span-1 col-span-4 text-lg placeholder:text-muted-foreground placeholder:text-sm bg-transparent "
        />
        <FaLocationArrow className="text-primary" />
      </div>
      <div className="bg-white shadow-lg rounded-sm md:h-14 h-12 py-3 px-3 flex items-center justify-center sm:col-span-2 lg:col-span-1 col-span-4">
        <Input
          {...register("carType")}
          placeholder="Select Type"
          className="border-0 flex-1 focus-visible:ring-offset-0 focus-visible:ring-0 text-black sm:col-span-2 lg:col-span-1 col-span-4 text-lg placeholder:text-muted-foreground placeholder:text-sm bg-transparent "
        />
        <MdCategory className="text-primary" />
      </div>
      <div className="bg-white  shadow-lg rounded-sm md:h-14 h-12 py-3 px-3 flex items-center sm:col-span-2 lg:col-span-1 col-span-4 justify-center">
        <Input
          {...register("brand")}
          placeholder="Select Brand"
          className="border-0 flex-1 focus-visible:ring-offset-0 focus-visible:ring-0 text-black text-lg placeholder:text-muted-foreground placeholder:text-sm bg-transparent "
        />
        <FaCarAlt className="text-primary" />
      </div>

      <Button
        size={"lg"}
        className="w-full md:h-14 h-12 py-3 text-lg rounded-none px-5 flex items-center sm:col-span-2 lg:col-span-1 col-span-4 justify-between hover:bg-secondary bg-primary transition-all duration-200 ease-in"
      >
        <span>Find a car</span>
        <FaCarAlt className="text-white" />
      </Button>
    </form>
  );
};
