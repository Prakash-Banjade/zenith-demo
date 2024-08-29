import Sharjah from "@/public/assets/images/sharjah.png";
import Dubai from "@/public/assets/images/dubai.png";
import AbuDhabi from "@/public/assets/images/Abu-Dhabi.jpg";
import Ras_AlAin from "@/public/assets/images/ras_al_khaimah.jpg";

export const locations = [
  {
    title: "Sharjah",
    image: Sharjah,
    price: "450",
    totalCars: 37,
  },

  {
    title: "Dubai",
    image: Dubai,
    price: "350",
    totalCars: 28,
  },
  {
    title: "Abu Dhabi",
    image: AbuDhabi,
    price: "320",
    totalCars: 34,
  },
  {
    title: "Ras Al Khimah",
    image: Ras_AlAin,
    price: "420",
    totalCars: 24,
  },
] as const;
