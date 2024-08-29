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
    <form className="flex items-center gap-3 !mt-20">
      <div className="bg-gray-950 shadow-lg rounded-sm h-14 py-3 px-3 flex items-center justify-center">
        <Input
          {...register("destination")}
          placeholder="Your destination"
          className="border-0 flex-1 focus-visible:ring-offset-0 focus-visible:ring-0 text-white text-lg placeholder:text-white placeholder:text-sm bg-transparent "
        />
        <FaLocationArrow className="text-primary" />
      </div>
      <div className="bg-gray-950 shadow-lg rounded-sm h-14 py-3 px-3 flex items-center justify-center">
        <Input
          {...register("carType")}
          placeholder="Select Type"
          className="border-0 flex-1 focus-visible:ring-offset-0 focus-visible:ring-0 text-white text-lg placeholder:text-white placeholder:text-sm bg-transparent "
        />
        <MdCategory className="text-primary" />
      </div>
      <div className="bg-gray-950 shadow-lg rounded-sm h-14 py-3 px-3 flex items-center justify-center">
        <Input
          {...register("brand")}
          placeholder="Select Brand"
          className="border-0 flex-1 focus-visible:ring-offset-0 focus-visible:ring-0 text-white text-lg placeholder:text-white placeholder:text-sm bg-transparent "
        />
        <FaCarAlt className="text-primary" />
      </div>

      <Button
        size={"lg"}
        className=" h-14 py-3 w-48 text-lg rounded-none  px-5 flex items-center justify-between hover:bg-secondary transition-all duration-200 ease-in"
      >
        <span>Find a car</span>
        <FaCarAlt className="text-white" />
      </Button>
    </form>
  );
};
