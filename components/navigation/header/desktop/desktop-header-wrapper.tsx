"use client";

import { useScroll } from "@/components/context/scroll-context";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

const DesktopHeaderWrapper = ({ children }: PropsWithChildren) => {
  const { hasScrolled } = useScroll();
  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50   border-white/10 bg-black/20 zen__transition__300 top-0 shadow-sm",
        hasScrolled && "bg-white   zen__transition__300"
      )}
    >
      {children}
    </header>
  );
};

export default DesktopHeaderWrapper;
