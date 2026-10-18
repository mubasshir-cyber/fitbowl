'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Play,
  Gift,
  ChefHat,
  Truck,
  Leaf,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { LeafSprigLeft, LeafSprigRight } from '../ui/FoliageDecor';

const TRUST_BADGES = [
  {
    icon: Gift,
    title: 'One meal free',
    subtitle: 'No card needed',
  },
  {
    icon: ChefHat,
    title: 'Freshly prepared',
    subtitle: 'Every day',
  },
  {
    icon: Truck,
    title: 'Delivered to your',
    subtitle: 'Home or office',
  },
  {
    icon: Leaf,
    title: 'No artificial stuff',
    subtitle: 'Just real food',
  },
];

export function HeroSection() {
  const heroRef = useGsapReveal<HTMLElement>({
    selector: '[data-hero-reveal]',
    stagger: 0.1,
    y: 20,
    duration: 0.6,
  });

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Decorative Organic Foliage Margins matching wireframe */}
      <LeafSprigLeft className="-left-4 top-20 hidden md:block" />
      <LeafSprigRight className="-right-4 top-12 hidden md:block" />

      {/* Subtle organic background foliage accents */}
      <div className="absolute top-12 left-0 -translate-x-1/2 w-72 h-72 rounded-full bg-[#DCEBCF]/40 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 translate-x-1/3 w-96 h-96 rounded-full bg-[#F47738]/10 blur-3xl -z-10 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Value Proposition (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 text-left">
            {/* Location Pill */}
            <div data-hero-reveal>
              <Badge variant="kicker">FRESH BOWLS • MUMBAI</Badge>
            </div>

            {/* H1 Headline */}
            <h1
              data-hero-reveal
              className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#173F32] leading-[1.08] tracking-tight"
            >
              Healthy doesn&apos;t have to{' '}
              <span className="text-[#F47738] inline-block relative">
                taste
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 text-[#F47738]/30"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M2 9C25 3 75 3 98 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              healthy.
            </h1>

            {/* Subtitle */}
            <p
              data-hero-reveal
              className="text-lg sm:text-xl text-[#334A40] font-medium leading-relaxed max-w-xl"
            >
              Delicious, freshly prepared gourmet bowls delivered to your home
              or office in Mumbai.
            </p>

            {/* Trust Strip (4 items) */}
            <div
              data-hero-reveal
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full py-1"
            >
              {TRUST_BADGES.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/70 border border-[#E3D8C4] shadow-xs hover:border-[#173F32]/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#DCEBCF] text-[#173F32] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-[#173F32]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-[13px] font-extrabold text-[#173F32] leading-tight">
                        {badge.title}
                      </span>
                      <span className="text-[11px] text-[#63786F] font-medium leading-tight mt-0.5">
                        {badge.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dual CTAs Cluster */}
            <div
              data-hero-reveal
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
            >
              {/* Primary Trial CTA */}
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('#trial-form')}
                className="group shadow-lg text-base font-extrabold px-8 py-4 rounded-full"
              >
                <span>Claim Your Free Trial Meal</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Secondary Video / How It Works CTA */}
              <button
                type="button"
                onClick={() => scrollToSection('#how-it-works')}
                className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-white/60 hover:bg-white border border-[#E3D8C4] text-[#173F32] transition-all hover:border-[#173F32] group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#173F32] text-white flex items-center justify-center group-hover:bg-[#F47738] transition-colors shadow-xs">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <div className="text-left flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#173F32] leading-none">
                    Watch How It Works
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#63786F] font-medium leading-none mt-1">
                    01:30 min
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Food Bowl & Floating Badges (5 cols on lg) */}
          <div
            data-hero-reveal
            className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0"
          >
            {/* Center Bowl Circular Glow Backdrop */}
            <div className="absolute w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full bg-linear-to-tr from-[#DCEBCF] to-[#FFE2C2] opacity-70 blur-xl -z-10" />

            {/* Bowl Container with subtle float effect */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] drop-shadow-2xl transition-transform duration-500 hover:scale-102">
              <Image
                src="/images/hero/hero-bowl.jpg"
                alt="FitBowl Gourmet Healthy Meal Bowl with Grilled Paneer, Avocado, Chickpeas, and Fresh Greens"
                fill
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 450px"
                className="object-cover rounded-full border-4 border-white shadow-2xl"
              />

              {/* Floating Badge 1 (Top-Right): "Real Ingredients Real Flavours" with handwritten flair matching wireframe */}
              <div className="absolute -top-6 -right-4 sm:-top-8 sm:right-2 z-20 pointer-events-none select-none">
                <div className="text-right">
                  <p className="font-script text-2xl sm:text-3xl text-[#173F32] font-bold leading-tight rotate-3 drop-shadow-sm">
                    Real Ingredients
                  </p>
                  <p className="font-script text-2xl sm:text-3xl text-[#173F32] font-bold leading-tight rotate-3 drop-shadow-sm flex items-center justify-end gap-1">
                    <span>Real Flavours</span>
                    <svg className="w-5 h-5 text-[#F47738] inline-block -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" />
                    </svg>
                  </p>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom-Right): "Good Food Busy Life Sorted!" as Dark Green Circular Badge */}
              <div className="absolute -bottom-4 right-1 sm:-bottom-6 sm:right-2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#173F32] text-white border-2 border-white/80 shadow-2xl flex flex-col items-center justify-center p-2 text-center -rotate-6 transition-transform hover:rotate-0 z-20">
                <p className="font-script text-base sm:text-lg text-[#FFF7E8] font-bold leading-none">
                  Good Food
                </p>
                <p className="font-script text-xs sm:text-sm text-[#DCEBCF] leading-tight">
                  Busy Life
                </p>
                <p className="font-script text-base sm:text-lg text-[#F47738] font-black leading-none mt-0.5">
                  Sorted!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
