import React from "react";
import { HeaderLogo } from "./header-logo";
import { DesktopNavbar } from "./desktop-navbar";

export const DesktopHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  border-b border-white/10">
      <div className="container flex items-center justify-between mx-auto h-[100px]">
        {/* logo */}
        <HeaderLogo/>

        {/* navigation */}
        <DesktopNavbar/>
      </div>
    </header>
  );
};
