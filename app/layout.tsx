import type { Metadata } from "next";
import "./globals.css";
import { DesktopHeader } from "@/components/navigation/header/desktop/desktop-header";
import { Footer } from "@/components/navigation/footer/footer";
import { makro, rubik } from "@/lib/fonts";

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
    <html
      lang="en"
      className={`antialiased ${rubik.variable} ${makro.variable}`}
    >
      <body>
        {/* header */}

        <DesktopHeader />

        {children}
        <Footer />
      </body>
    </html>
  );
}
