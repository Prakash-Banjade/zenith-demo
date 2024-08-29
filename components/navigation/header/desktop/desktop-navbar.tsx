import { Button } from "@/components/ui/button";
import { navData } from "@/data/nav-data";
import Link from "next/link";
import React from "react";

export const DesktopNavbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-5">
        {navData.map((item, index) => (
          <li key={index} className="group">
            <Link
              href={item.slug}
              className="font-medium underline-link  text-white hover:text-wise"
            >
              {item.name}
            </Link>
          </li>
        ))}

        <Button
          className=" px-8 rounded-none py-6 bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in"
          size={"lg"}
        >
          <span>Rent a car</span>
        </Button>
      </ul>
    </nav>
  );
};
