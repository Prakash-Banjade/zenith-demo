import AirportPickup from "@/public/assets/images/airport-pickup.jpg";
import Chauffeur from "@/public/assets/images/chauffeur.jpg";
import DeserSafari from "@/public/assets/images/desert-safari.png";
import RollsRoyce from "@/public/assets/images/rolls-royce.png";

export const services = [
  {
    title: "Airport/Hotel",
    image: AirportPickup,
    price: "450",
  },

  {
    title: "Chauffeur Service",
    image: Chauffeur,
    price: "350",
  },
  {
    title: "Desert Safari",
    image: DeserSafari,
    price: "320",
  },
  {
    title: "Rental Service",
    image: RollsRoyce,
    price: "420",
  },
] as const;
