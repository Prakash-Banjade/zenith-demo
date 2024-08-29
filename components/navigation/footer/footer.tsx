import Link from "next/link";
import BlueLogo from "@/public/assets/logo/blue-logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-50">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center py-10">
          <Link href="/">
            <Image
              src={BlueLogo}
              alt="logo"
              width={400}
              height={200}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex justify-between text-muted-foreground text-sm gap-6">
            <div className="flex flex-col gap-1 ">
              <span>123 Al Safa Street</span>
              <span>Dubai, United Arab Emirates</span>
              <span>Postcode 12345</span>
            </div>
            <p>Monday-Saturday: 6AM - 10PM</p>
          </div>

          <Button
            className=" px-8 rounded-none py-6 bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in"
            size={"lg"}
          >
            <span>Rent a car</span>
          </Button>
        </div>
        <div className="flex flex-col items-center py-3 border-t">
          <div className="flex justify-between items-center w-full mb-3">
            <p className="text-sm text-muted-foreground ">
              Copyright &copy; {currentYear} Zenith - All rights reserved{" "}
              <span>
                | Developed by{" "}
                <Link
                  className="text-secondary hover:text-primary zen__transition"
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
