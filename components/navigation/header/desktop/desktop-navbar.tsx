"use client";
import { useScroll } from "@/components/context/scroll-context";
import { Button } from "@/components/ui/button";
import { navData } from "@/data/nav-data";
import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export const DesktopNavbar = () => {
  const { hasScrolled } = useScroll();

  return (
    <nav className="lg:block hidden">
      <ul className="flex items-center gap-8">
        {navData.map((item, index) => (
          <li key={index} className="group">
            {
              item.type === 'link' ? <Link
                href={item.slug}
                className={cn(
                  "font-medium underline-link text-xl text-white hover:text-secondary zen__transition__300 flex items-center gap-1",
                  hasScrolled && "text-gray-600",
                  item.name === 'Home' && hasScrolled && 'text-secondary'
                )}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
                : (
                  <HoverCard openDelay={200} closeDelay={200}>
                    <HoverCardTrigger
                      className={cn(
                        "font-medium underline-link hover:cursor-pointer text-xl text-white hover:text-secondary zen__transition__300 flex items-center gap-1",
                        hasScrolled && "text-gray-600",
                        item.name === 'Home' && hasScrolled && 'text-secondary'
                      )}
                    >
                      <item.icon size={20} />
                      {item.name}
                    </HoverCardTrigger>
                    <HoverCardContent className="!w-max">
                      <item.hoverContent />
                    </HoverCardContent>
                  </HoverCard>

                )
            }
          </li>
        ))}

        <Button
          className="group px-5 md:w-fit w-full text-base rounded-none py-6 bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in items-center gap-2"
          size={"lg"}
        >
          <span>Rent a car</span>
          <span className="group-hover:translate-x-2 transition-transform duration-300 ease-in"><MoveRightIcon /></span>
        </Button>
      </ul>
    </nav>
  );
};
