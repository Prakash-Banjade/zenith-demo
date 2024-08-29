import localFont from "next/font/local";

import { Rubik } from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

export const makro = localFont({
  src: [
    {
      path: "Makro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-makro",
});
