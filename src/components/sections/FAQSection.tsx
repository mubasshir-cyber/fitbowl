'use client';

import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { AccordionItem } from '../ui/Accordion';
import { FAQS_DATA } from '@/data/faqs';

export function FAQSection() {
  // Store set of open FAQ IDs (allow multiple or single open)
  const [openIds, setOpenIds] = useState<string[]>(['areas', 'timings']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Split FAQs into 2 balanced columns (4 items each) for desktop layout
  const col1 = FAQS_DATA.slice(0, 4);
  const col2 = FAQS_DATA.slice(4, 8);

  return (
    <section id="faqs" className="py-16 sm:py-20 lg:py-28 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-black text-[#173F32] bg-[#DCEBCF] px-3.5 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#173F32] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#334A40] max-w-xl font-medium">
            Everything you need to know about our kitchens, delivery timings, and
            trial process.
          </p>
        </div>

        {/* 2-Column Desktop Grid / 1-Column Mobile Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2 bg-white/70 p-6 sm:p-10 rounded-[28px] border border-[#E3D8C4] shadow-xs">
          {/* Column 1 (Questions 1 to 4) */}
          <div className="flex flex-col">
            {col1.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openIds.includes(item.id)}
                onToggle={() => toggleFAQ(item.id)}
              />
            ))}
          </div>

          {/* Column 2 (Questions 5 to 8) */}
          <div className="flex flex-col">
            {col2.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openIds.includes(item.id)}
                onToggle={() => toggleFAQ(item.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
