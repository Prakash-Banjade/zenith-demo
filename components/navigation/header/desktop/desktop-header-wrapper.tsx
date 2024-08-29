"use client";

import { useScroll } from "@/components/context/scroll-context";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

const DesktopHeaderWrapper = ({ children }: PropsWithChildren) => {
  const { hasScrolled } = useScroll();
  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50   border-white/10 bg-black/20 transition-all duration-200 ease-in-out top-0",
        hasScrolled && "bg-white -translate-y-full top-[100px]"
      )}
    >
      {children}
    </header>
  );
};

export default DesktopHeaderWrapper;
