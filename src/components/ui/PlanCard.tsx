'use client';

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SubscriptionPlan, PlanId } from '@/types/pricing';
import { Button } from './Button';
import { Badge } from './Badge';

interface PlanCardProps {
  plan: SubscriptionPlan;
  onSelectPlan?: (planId: PlanId) => void;
}

export function PlanCard({ plan, onSelectPlan }: PlanCardProps) {
  const handleSelect = () => {
    if (onSelectPlan) {
      onSelectPlan(plan.id);
    } else {
      const form = document.querySelector('#trial-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHighlighted = plan.isPopular;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 h-full ${
        isHighlighted
          ? 'bg-white border-2 border-[#F47738] shadow-2xl scale-[1.02] z-10'
          : 'bg-white/95 border border-[#E3D8C4] shadow-md hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* Most Popular Floating Pill */}
      {isHighlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge variant="popular">Most Popular</Badge>
        </div>
      )}

      <div>
        {/* Plan Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E3D8C4]/60">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#173F32]">
              {plan.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#63786F] mt-0.5">
              {plan.mealsPerMonth} meals/month
            </p>
          </div>
        </div>

        {/* Pricing Block */}
        <div className="py-5 border-b border-[#E3D8C4]/60">
          <div className="flex items-baseline gap-1">
            <span
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isHighlighted ? 'text-[#F47738]' : 'text-[#173F32]'
              }`}
            >
              ₹{plan.totalPrice.toLocaleString('en-IN')}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#63786F] mt-1">
            ₹{plan.pricePerMeal} per meal
          </p>
        </div>

        {/* Features Checklist */}
        <ul className="py-5 space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334A40]">
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isHighlighted ? 'bg-[#F47738] text-white' : 'bg-[#DCEBCF] text-[#173F32]'
                }`}
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Plan Action CTA */}
      <div className="pt-2">
        <Button
          variant={isHighlighted ? 'primary' : 'outline'}
          size="md"
          className={`w-full justify-center group ${
            isHighlighted
              ? 'bg-[#F47738] hover:bg-[#E06324] text-white font-extrabold shadow-md'
              : 'border-[#E3D8C4] text-[#173F32] hover:bg-[#FFF7E8] hover:border-[#173F32]'
          }`}
          onClick={handleSelect}
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
