import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { MenuSection } from '@/components/sections/MenuSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { FAQSection } from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E8] text-[#173F32]">
      {/* 01. Sticky Responsive Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 02. Hero Section */}
        <HeroSection />

        {/* 03. Why FitBowl / 4 Core Benefits */}
        <BenefitsSection />

        {/* 04. Explore Our 14 Bowls (Menu Catalog & Filters) */}
        <MenuSection />

        {/* 05. Subscription Plans & Pricing */}
        <PricingSection />

        {/* 06. How It Works (4-Step Sequential Process) */}
        <HowItWorksSection />

        {/* 07. Customer Testimonials (4 Verified Reviews) */}
        <TestimonialsSection />

        {/* 08. Newsletter / Retention Waitlist */}
        <NewsletterSection />

        {/* 09. Frequently Asked Questions (8 Questions Accordion) */}
        <FAQSection />
      </main>
    </div>
  );
}
