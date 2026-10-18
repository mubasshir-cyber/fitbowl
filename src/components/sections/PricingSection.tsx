'use client';

import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
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
    <section id="plans" ref={pricingRef} className="py-16 sm:py-20 lg:py-28 relative">
      <Container>
        {/* Dark Forest Green Unified Card Container */}
        <div className="bg-[#173F32] rounded-[32px] p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background glow elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F47738]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#DCEBCF]/10 blur-3xl pointer-events-none" />

          {/* Section Heading & Copy */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10 relative z-10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-black text-[#F47738] bg-white/10 px-3 py-1 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                SUBSCRIPTION PLANS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFF7E8] tracking-tight">
                Choose a Plan
              </h2>
              <p className="text-sm sm:text-base text-[#DCEBCF] max-w-xl font-medium mt-2">
                Fresh meals, flexible plans. Most people go for the{' '}
                <strong className="text-white font-extrabold">10-meal plan</strong>.
              </p>
            </div>

            {/* Editorial Badge Callout */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15">
              <span className="text-2xl">🌱</span>
              <div className="text-left">
                <p className="text-xs font-bold text-[#FFF7E8] leading-tight">
                  Good food. Great value!
                </p>
                <p className="text-[11px] text-[#DCEBCF] leading-tight">
                  Pause or cancel anytime with 1 click
                </p>
              </div>
            </div>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <div key={plan.id} data-pricing-reveal className="flex flex-col h-full">
                <PlanCard
                  plan={plan}
                  onSelectPlan={handleSelectPlan}
                />
              </div>
            ))}
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
