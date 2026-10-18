import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { MenuSection } from '@/components/sections/MenuSection';
import { PricingSection } from '@/components/sections/PricingSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E8] text-[#173F32]">
      {/* 01. Sticky Responsive Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 02. Hero Section */}
        <HeroSection />

        {/* 04. Explore Our 14 Bowls (Menu Catalog) */}
        <MenuSection />

        {/* 05. Subscription Plans & Pricing */}
        <PricingSection />
      </main>
    </div>
  );
}
