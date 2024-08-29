import React from "react";
import { HeaderLogo } from "./header-logo";
import { DesktopNavbar } from "./desktop-navbar";
import DesktopHeaderWrapper from "./desktop-header-wrapper";

export const DesktopHeader = () => {
  return (
    <DesktopHeaderWrapper>
      <div className="container flex items-center justify-between mx-auto xl:h-[100px] lg:h-[90px] h-[80px]">
        <HeaderLogo />
        <DesktopNavbar />
      </div>
    </DesktopHeaderWrapper>
  );
};
