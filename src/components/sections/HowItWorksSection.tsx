'use client';

import React from 'react';
import { Utensils, ClipboardCheck, Truck, Smile } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const STEPS = [
  {
    stepNumber: '1',
    icon: Utensils,
    title: 'Choose Your Bowl',
    description: 'Pick from 14 delicious options.',
    badgeBg: 'bg-[#173F32]',
    badgeText: 'text-white',
  },
  {
    stepNumber: '2',
    icon: ClipboardCheck,
    title: 'Book Your Free Trial',
    description: 'Fill in a quick form.',
    badgeBg: 'bg-[#F47738]',
    badgeText: 'text-white',
  },
  {
    stepNumber: '3',
    icon: Truck,
    title: 'We Deliver',
    description: 'Fresh to your home or office.',
    badgeBg: 'bg-[#173F32]',
    badgeText: 'text-white',
  },
  {
    stepNumber: '4',
    icon: Smile,
    title: 'Enjoy',
    description: 'Tasty, healthy and hassle-free.',
    badgeBg: 'bg-[#F47738]',
    badgeText: 'text-white',
  },
];

export function HowItWorksSection() {
  const stepsRef = useGsapReveal<HTMLElement>({
    selector: '[data-step-reveal]',
    stagger: 0.15,
    y: 25,
  });

  return (
    <section id="how-it-works" ref={stepsRef} className="py-16 sm:py-20 lg:py-28 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <Badge variant="kicker">IT&apos;S SIMPLE</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#173F32] tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#334A40] max-w-xl font-medium">
            Your free trial meal in 4 simple steps.
          </p>
        </div>

        {/* 4 Steps Row / Grid with Connectors */}
        <div className="relative">
          {/* Desktop Dotted Connecting Line */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-[#173F32]/25 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  data-step-reveal
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number & Icon Circle */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#E3D8C4] shadow-md flex items-center justify-center group-hover:scale-105 group-hover:border-[#173F32] transition-all">
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-[#173F32] group-hover:text-[#F47738] transition-colors" />
                    </div>

                    {/* Step Number Tag */}
                    <span
                      className={`absolute -top-1.5 -right-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full ${step.badgeBg} ${step.badgeText} font-black text-xs sm:text-sm flex items-center justify-center shadow-md`}
                    >
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#173F32] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#63786F] max-w-xs leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
