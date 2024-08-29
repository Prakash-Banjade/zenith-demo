"use client";
import { useScroll } from "@/components/context/scroll-context";
import BlueLogo from "@/public/assets/logo/blue-logo.png";
import WhiteLogo from "@/public/assets/logo/white-logo.png";

import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  const { hasScrolled } = useScroll();
  return (
    <Link href={"/"}>
      <Image
        src={hasScrolled ? BlueLogo : WhiteLogo}
        height={150}
        width={350}
        alt="Logo"
        className="lg:h-12 md:h-10 h-8 w-auto zen__transition__300"
      />
    </Link>
  );
};
