import { ServicesSection } from "@/components/common/our-services/services-sections";
import { RentalLocationsSection } from "@/components/common/rental-locations/rental-locations-sections";
import { AdventureSection } from "@/components/page-components/homepage/adventures/adventure-section";
import { BrandsSection } from "@/components/page-components/homepage/brands-section/brands-section";
import { CarListSection } from "@/components/page-components/homepage/car-lists-section/car-lists-section";
import { CarTypesSection } from "@/components/page-components/homepage/car-types-section/car-types-section";
import { HomeHeroSection } from "@/components/page-components/homepage/home-hero/home-hero-section";
import { PopularCars } from "@/components/page-components/homepage/popular-cars/popular-cars";
import { ReasonToRentSection } from "@/components/page-components/homepage/reson-to-rent-section/reason-to-rent.section";
import { WaysToBook } from "@/components/page-components/homepage/ways-to-book/ways-to-book";
import { QuoteIcon } from "lucide-react";
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
      <BrandsSection />

      <section className="mb-10 container flex flex-col items-center gap-5">
        <QuoteIcon size={40} />
        <p className="text-gray-700 text-center">
          Searching for a <span className="font-bold text-gray-900">Rent A Car Near Me</span>? At <span className="font-bold text-gray-900">Zenith Super Car Rental Dubai</span>, we take pride in offering exceptional car rental services conveniently located near you.
          Whether you're traveling for business or leisure, having a dependable rental car can elevate your experience, giving you the freedom to explore at your own pace.
          When it comes to finding a rental car nearby, Zenith Super Car Rental is your top choice. With convenient locations, a diverse fleet, competitive prices, and outstanding customer service, we're dedicated to making your travel experience smooth and enjoyable.
        </p>
      </section>

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
