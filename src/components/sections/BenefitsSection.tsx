'use client';

import React from 'react';
import { Leaf, Clock, Salad, Truck } from 'lucide-react';
import { Container } from '../ui/Container';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const BENEFITS = [
  {
    icon: Leaf,
    title: 'Tasty & Healthy',
    description: 'Flavour-packed bowls with balanced nutrition.',
    accentColor: '#173F32',
    bgTint: 'bg-[#DCEBCF]/50',
  },
  {
    icon: Clock,
    title: 'Made for Busy You',
    description: 'Save time, eat better.',
    accentColor: '#F47738',
    bgTint: 'bg-[#FFEDD5]/60',
  },
  {
    icon: Salad,
    title: 'Real Ingredients',
    description: 'No artificial stuff. Just real food.',
    accentColor: '#173F32',
    bgTint: 'bg-[#DCEBCF]/50',
  },
  {
    icon: Truck,
    title: 'Convenient Delivery',
    description: 'To your home or office in Mumbai.',
    accentColor: '#F47738',
    bgTint: 'bg-[#FFEDD5]/60',
  },
];

export function BenefitsSection() {
  const benefitsRef = useGsapReveal<HTMLElement>({
    selector: '[data-reveal]',
    stagger: 0.12,
    y: 24,
  });

  return (
    <section id="benefits" ref={benefitsRef} className="py-14 sm:py-16 lg:py-20 relative">
      <Container>
        {/* Centered Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#173F32] tracking-tight">
            Why FitBowl?
          </h2>
          <p className="text-sm sm:text-base text-[#63786F] font-semibold mt-2">
            Gourmet taste meets honest macros — crafted for urban lifestyles.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {BENEFITS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                data-reveal
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D8C4] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-start text-left"
              >
                {/* Icon Wrapper */}
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bgTint} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: item.accentColor }}
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[#173F32] mb-1.5 group-hover:text-[#F47738] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#334A40] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
