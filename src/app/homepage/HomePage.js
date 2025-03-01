import Button from "@/components/Button";
import Hero from "@/components/Hero";
import BlackCardSection from "@/components/pageSections/BlackCardSection";
import FacilitySection from "@/components/pageSections/FacilitySection";
import NewArrival from "@/components/pageSections/NewArrival";
import TopSellerSection from "@/components/pageSections/TopSellerSection";
import SectionHeading from "@/components/SectionHeading";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SectionHeading
        title="Discover NEW Arrivals"
        description="Recently added shirts!"
      />
      <NewArrival />
      <FacilitySection />
      <BlackCardSection />
      <SectionHeading
        title="Top Sellers"
        description="Browse our top-selling products"
      />
      <TopSellerSection />
      <div className="flex justify-center items-center my-10 h-full">
        <Button
          title="SHOP NOW"
          className="bg-slate-500 text-white px-6 py-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default HomePage;
