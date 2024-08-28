import type { Metadata } from "next";
import {  Rubik } from "next/font/google";
import "./globals.css";
import { DesktopHeader } from "@/components/navigation/header/desktop/desktop-header";
import { Footer } from "@/components/navigation/footer/footer";

const rubik = Rubik({ subsets: ["latin"], weight:[
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] });

export const metadata: Metadata = {
  title: {
    default: "Rent a Luxury Car in Dubai",
    template: "%s - Rent a Luxury Car in Dubai",
  },
  description: "Rent a Luxury Car in Dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {/* header */}

          <DesktopHeader />

          {children}
          <Footer />
      </body>
    </html>
  );
}
