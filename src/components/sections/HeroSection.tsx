'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Play,
  Gift,
  ChefHat,
  Truck,
  Sparkles,
  Leaf,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

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
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Subtle organic background foliage accents */}
      <div className="absolute top-12 left-0 -translate-x-1/2 w-72 h-72 rounded-full bg-[#DCEBCF]/40 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 translate-x-1/3 w-96 h-96 rounded-full bg-[#F47738]/10 blur-3xl -z-10 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Value Proposition (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 text-left">
            {/* Location Pill */}
            <Badge variant="kicker">FRESH BOWLS • MUMBAI</Badge>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#173F32] leading-[1.08] tracking-tight">
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
            <p className="text-lg sm:text-xl text-[#334A40] font-medium leading-relaxed max-w-xl">
              Delicious, freshly prepared gourmet bowls delivered to your home
              or office in Mumbai.
            </p>

            {/* Trust Strip (4 items) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full py-1">
              {TRUST_BADGES.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/70 border border-[#E3D8C4] shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#DCEBCF]/70 text-[#173F32] flex items-center justify-center shrink-0 mt-0.5">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary Trial CTA */}
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('#trial-form')}
                className="group shadow-lg"
              >
                <span>Claim Your Free Trial Meal</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Secondary Video / How It Works CTA */}
              <button
                type="button"
                onClick={() => scrollToSection('#how-it-works')}
                className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-white/60 hover:bg-white border border-[#E3D8C4] text-[#173F32] transition-all hover:border-[#173F32] group"
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
          <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
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

              {/* Floating Badge 1 (Top-Right): "Real Ingredients Real Flavours" */}
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:right-0 bg-white/95 backdrop-blur-md border border-[#E3D8C4] rounded-2xl py-2 px-3.5 sm:py-2.5 sm:px-4 shadow-xl flex items-center gap-2 rotate-2 animate-pulse sm:animate-none">
                <span className="text-base sm:text-lg">🌿</span>
                <div className="text-left">
                  <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#173F32] leading-tight">
                    Real Ingredients
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-bold text-[#F47738] leading-tight">
                    Real Flavours
                  </p>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom-Right): "Good Food Busy Life Sorted!" */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:right-6 bg-[#173F32] text-white border border-[#173F32] rounded-2xl py-2.5 px-4 sm:py-3 sm:px-5 shadow-2xl flex items-center gap-2.5 -rotate-2">
                <Sparkles className="w-4 h-4 text-[#F47738] shrink-0" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-extrabold text-[#FFF7E8] leading-tight">
                    Good Food. Busy Life.
                  </p>
                  <p className="text-[10px] sm:text-xs font-bold text-[#F47738] leading-tight uppercase tracking-wider">
                    Sorted!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
