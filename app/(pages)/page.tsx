import { ServicesSection } from "@/components/common/our-services/services-sections";
import { RentalLocationsSection } from "@/components/common/rental-locations/rental-locations-sections";
import { AdventureSection } from "@/components/page-components/homepage/adventures/adventure-section";
import { CarListSection } from "@/components/page-components/homepage/car-lists-section/car-lists-section";
import { CarTypesSection } from "@/components/page-components/homepage/car-types-section/car-types-section";
import { HomeHeroSection } from "@/components/page-components/homepage/home-hero/home-hero-section";
import { PopularCars } from "@/components/page-components/homepage/popular-cars/popular-cars";
import { ReasonToRentSection } from "@/components/page-components/homepage/reson-to-rent-section/reason-to-rent.section";
import { WaysToBook } from "@/components/page-components/homepage/ways-to-book/ways-to-book";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenith",
  description: "Rent a Luxury Car in Dubai",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      {/* Hero Section */}
      <HomeHeroSection />
      <CarTypesSection />
      <WaysToBook />
      <PopularCars />
      <CarListSection />
      {/* Reason To Rent In Our Company */}
      {/* Adventures */}
      <AdventureSection />
      <ServicesSection />

      <ReasonToRentSection />
      {/* Rent Location */}
      <RentalLocationsSection />
    </main>
  );
}
