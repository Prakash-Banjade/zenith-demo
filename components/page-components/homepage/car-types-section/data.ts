import SportCar from "@/public/assets/icons/Sports.svg";
import LuxuryCar from "@/public/assets/icons/Luxury.svg";
import SUV from "@/public/assets/icons/suv.svg";
import Convertible from "@/public/assets/icons/convertible.svg";
import Economy from "@/public/assets/icons/economy-cars.svg";
import Business from "@/public/assets/icons/business.svg";
export const carTypes = [
  {
    title: "Sports Cars",
    icon: SportCar,
    totalCars: 26,
  },
  {
    title: "Luxury Cars",
    icon: LuxuryCar,
    totalCars: 23,
  },

  {
    title: "SUV Cars",
    icon: SUV,
    totalCars: 36,
  },

  {
    title: "Economy",
    icon: Economy,
    totalCars: 64,
  },
  {
    title: "Business",
    icon: Business,
    totalCars: 41,
  },
] as const;
