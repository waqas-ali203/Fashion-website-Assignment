"use client";
import BlackCard from "@/components/BlackCard";
import Facility from "@/components/Facility";
import Hero from "@/components/Hero";
import PriceCard from "@/components/PriceCard";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

export default function Home() {
  return (
    <div class="p-11">
      <h1 class="text-2xl font-bold text-blue-600 mb-6">
        Ecommerce Fashion Website
      </h1>
      <div className="flex flex-row gap-7 w-screen">

      <BlackCard />
      <BlackCard />
      </div>
    </div>
  );
}
