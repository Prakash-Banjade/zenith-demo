"use client";

import { useScroll } from "@/components/context/scroll-context";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

const DesktopHeaderWrapper = ({ children }: PropsWithChildren) => {
  const { hasScrolled } = useScroll();
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50  border-b border-white/10 transition-all duration-200 ease-in-out",
        hasScrolled && "bg-white "
      )}
    >
      {children}
    </header>
  );
};

export default DesktopHeaderWrapper;
