"use client";
import { useScroll } from "@/components/context/scroll-context";
import { Button } from "@/components/ui/button";
import { navData } from "@/data/nav-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const DesktopNavbar = () => {
  const { hasScrolled } = useScroll();
  return (
    <nav className="lg:block hidden">
      <ul className="flex items-center gap-5">
        {navData.map((item, index) => (
          <li key={index} className="group">
            <Link
              href={item.slug}
              className={cn(
                "font-medium underline-link  text-white hover:text-secondary zen__transition__300",
                hasScrolled && "text-gray-600 "
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}

        <Button
          className=" px-8 md:w-fit w-full rounded-none py-6 bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in"
          size={"lg"}
        >
          <span>Rent a car</span>
        </Button>
      </ul>
    </nav>
  );
};
