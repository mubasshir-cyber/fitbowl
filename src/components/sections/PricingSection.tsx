'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { PlanCard } from '../ui/PlanCard';
import { SUBSCRIPTION_PLANS } from '@/data/plans';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export function PricingSection() {
  const pricingRef = useGsapReveal<HTMLElement>({
    selector: '[data-pricing-reveal]',
    stagger: 0.15,
    y: 30,
  });

  const handleSelectPlan = () => {
    const form = document.querySelector('#trial-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plans" ref={pricingRef} className="pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-28 relative">
      <Container>
        {/* Dark Forest Green Unified Card Container */}
        <div className="bg-[#173F32] rounded-[32px] p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background glow elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F47738]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#DCEBCF]/10 blur-3xl pointer-events-none" />

          {/* Section Top Header & Script Callout */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10 relative z-10">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFF7E8] tracking-tight">
                Choose a Plan
              </h2>
              <p className="text-sm sm:text-base text-[#DCEBCF] max-w-xl font-medium mt-1.5">
                Fresh meals, flexible plans. Most people go for the{' '}
                <span className="text-[#F47738] font-bold">10-meal plan</span>.
              </p>
            </div>

            {/* Handwritten Script Callout with Arrow matching wireframe */}
            <div className="relative inline-flex items-center gap-2 self-start lg:self-center">
              <span className="font-script text-2xl sm:text-3xl text-[#FFF7E8] font-bold rotate-[-3deg]">
                Good food Great value!
              </span>
              {/* Curved SVG arrow pointing toward cards */}
              <svg
                className="w-12 h-8 text-[#F47738] rotate-12 hidden sm:block"
                viewBox="0 0 60 40"
                fill="none"
              >
                <path
                  d="M10 10 C 25 5, 45 10, 50 28"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M40 25 L 50 28 L 48 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Main Grid: 3 Pricing Cards + Right Bowl Photo Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            {/* 3 Pricing Cards (9 cols on lg) */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {SUBSCRIPTION_PLANS.map((plan) => (
                <div key={plan.id} data-pricing-reveal className="flex flex-col h-full">
                  <PlanCard
                    plan={plan}
                    onSelectPlan={handleSelectPlan}
                  />
                </div>
              ))}
            </div>

            {/* Right Cropped Bowl & Handwritten Note matching wireframe (3 cols on lg) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-center text-center relative">
              <div className="font-script text-2xl text-[#FFF7E8] font-bold leading-tight mb-4 -rotate-3 max-w-[200px]">
                Same great taste. Different bowls every week.
              </div>

              {/* Cropped Bowl Graphic */}
              <div className="relative w-48 h-48 xl:w-56 xl:h-56 rounded-full border-4 border-white/80 overflow-hidden shadow-2xl translate-x-6 xl:translate-x-10 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/hero/hero-bowl.jpg"
                  alt="FitBowl Weekly Variety Gourmet Meal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Reassurance Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#DCEBCF] relative z-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F47738]" />
              <span>All plans include free delivery in Andheri, Bandra, Powai &amp; Lower Parel.</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-[#FFF7E8]">
              <span>Same great taste. Different bowls every week.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
