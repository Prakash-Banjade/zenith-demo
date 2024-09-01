import { ServicesSection } from "@/components/common/our-services/services-sections";
import { RentalLocationsSection } from "@/components/common/rental-locations/rental-locations-sections";
import AdventureSummarySection from "@/components/page-components/homepage/adventure-summary/adventure-summary-section";
import { AdventureSection } from "@/components/page-components/homepage/adventures/adventure-section";
import { BrandsSection } from "@/components/page-components/homepage/brands-section/brands-section";
import { CarListSection } from "@/components/page-components/homepage/car-lists-section/car-lists-section";
import { CarTypesSection } from "@/components/page-components/homepage/car-types-section/car-types-section";
import FAQSection from "@/components/page-components/homepage/faq-section/faq-container";
import { HomeHeroSection } from "@/components/page-components/homepage/home-hero/home-hero-section";
import { PopularCars } from "@/components/page-components/homepage/popular-cars/popular-cars";
import RequiredDocumentsSection from "@/components/page-components/homepage/required-documents-section";
import { ReasonToRentSection } from "@/components/page-components/homepage/reson-to-rent-section/reason-to-rent.section";
import StatisticsSection from "@/components/page-components/homepage/statistics-section/statistics-wrapper";
import { WaysToBook } from "@/components/page-components/homepage/ways-to-book/ways-to-book";
import { allCarsList, luxuryCars, sportCars, suvCarList } from "@/data/car-lists";
import { QuoteIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenith",
  description: "Rent a Luxury Car in Dubai",
};

export default function HomePage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        {/* Hero Section */}
        <HomeHeroSection />
        <CarTypesSection />
        <BrandsSection />
        <StatisticsSection />
      </main>

      <section className="mb-10 container flex flex-col items-center gap-5">
        <QuoteIcon size={40} />
        <p className="text-gray-700 text-center">
          Searching for a <span className="font-bold text-gray-900">Rent A Car Near Me</span>? At <span className="font-bold text-gray-900">Zenith Super Car Rental Dubai</span>, we take pride in offering exceptional car rental services conveniently located near you.
          Whether you&apos;re traveling for business or leisure, having a dependable rental car can elevate your experience, giving you the freedom to explore at your own pace.
          When it comes to finding a rental car nearby, Zenith Super Car Rental is your top choice. With convenient locations, a diverse fleet, competitive prices, and outstanding customer service, we&apos;re dedicated to making your travel experience smooth and enjoyable.
        </p>
      </section>

      <AdventureSummarySection />

      <WaysToBook />
      <PopularCars />
      <CarListSection
        carsList={allCarsList}
      />

      {/* sport cars */}
      <CarListSection
        carsList={sportCars}
        title={<><span className="text-primary">Sport Cars</span> for Rent</>}
        subTitle={
          <>
            At Zenith, we offer an unparalleled selection of world-class sports cars, blending luxury with high-octane performance.
            <br />
            Whether you&apos;re cruising through Dubai&apos;s vibrant streets or embarking on a desert adventure, our fleet ensures an unforgettable driving experience that matches the city&apos;s opulence and dynamism.
          </>
        }
      />

      <CarListSection
        carsList={luxuryCars}
        title={<><span className="text-primary">Luxury Cars</span> for Rent</>}
        subTitle={
          <>
            Elevate your journey with Zenith&apos;s exclusive collection of luxury cars. From the elegance of Rolls Royce to the sophistication of Bentley, our fleet embodies prestige and comfort.
            <br />
            Whether for a business engagement, a special occasion, or simply to indulge in the finer things, experience Dubai in the ultimate style and grace with Zenith.
          </>
        }
      />

      <CarListSection
        carsList={suvCarList}
        title={<><span className="text-primary">SUV Cars</span> for Rent</>}
        subTitle={
          <>
            Experience the perfect blend of luxury and power with our top-tier SUV rentals. Whether you&apos;re navigating the urban streets of Dubai or exploring the rugged terrains of the UAE,
            <br />
            our premium SUV fleet offers unmatched comfort, space, and performance. Drive with confidence and style in the ultimate vehicles designed to elevate your journey.
          </>
        }
      />
      {/* Reason To Rent In Our Company */}
      {/* Adventures */}
      <AdventureSection />
      <ServicesSection />

      <ReasonToRentSection />
      {/* Rent Location */}
      <RentalLocationsSection />

      <RequiredDocumentsSection />

      <FAQSection />
    </>
  );
}
