import Link from "next/link";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-50">
      <div className="container">
        <div></div>
        <div className="flex flex-col items-center py-3 border-t">
          <div className="flex justify-between items-center w-full mb-3">
            <p className="text-sm">
              Copyright &copy; {currentYear} Zenith - All rights reserved{" "}
              <span>
                | Developed by{" "}
                <Link
                  className="text-primary hover:text-secondary zen__transition"
                  href={"/"}
                >
                  Tradewise
                </Link>
              </span>
            </p>
            <div>
              <span className="text-sm mr-1 text-muted-foreground">+91</span>
              <span>
                <Link href="tel:+9234567890">
                  <span className="text-base">923-456-7890</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
