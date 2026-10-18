import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E8] text-[#173F32]">
      {/* 01. Sticky Responsive Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 02. Hero Section */}
        <HeroSection />
      </main>
    </div>
  );
}
