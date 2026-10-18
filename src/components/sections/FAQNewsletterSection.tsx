'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { AccordionItem } from '../ui/Accordion';
import { FAQS_DATA } from '@/data/faqs';
import { Button } from '../ui/Button';

export function FAQNewsletterSection() {
  const [mobileInput, setMobileInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Store set of open FAQ IDs
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = mobileInput.trim();
    const isPhone = /^[6-9]\d{9}$/.test(trimmed);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isPhone && !isEmail) {
      setErrorMsg('Please enter a valid 10-digit mobile number or email.');
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setMobileInput('');
    }, 600);
  };

  // Split into 2 columns strictly matching wireframe order:
  // Col 1: areas, free-trial, choose-meals, healthy
  // Col 2: timings, pause-cancel, preservatives, outside-area
  const col1Ids = ['areas', 'free-trial', 'choose-meals', 'healthy'];
  const col2Ids = ['timings', 'pause-cancel', 'preservatives', 'outside-area'];

  const col1 = col1Ids
    .map((id) => FAQS_DATA.find((f) => f.id === id))
    .filter(Boolean) as typeof FAQS_DATA;

  const col2 = col2Ids
    .map((id) => FAQS_DATA.find((f) => f.id === id))
    .filter(Boolean) as typeof FAQS_DATA;

  return (
    <section id="faqs" className="py-14 sm:py-18 lg:py-24 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          {/* Left Column: Stay in the Loop (Dark Green Card - 5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#173F32] rounded-[32px] p-7 sm:p-9 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#F47738]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-[#FFF7E8] tracking-tight mb-2">
                Stay in the Loop
              </h3>
              <p className="text-sm text-[#DCEBCF] font-medium leading-relaxed mb-6">
                Be the first to know about new bowls, special offers and when we
                expand to your area in Mumbai.
              </p>
            </div>

            <div className="relative z-10 pt-2">
              {isSubmitted ? (
                <div className="inline-flex items-center gap-2 p-3.5 rounded-2xl bg-white/10 border border-[#DCEBCF]/30 text-[#FFF7E8] text-xs sm:text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0" />
                  <span>You&apos;re in! We&apos;ll notify you when we expand.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                    <input
                      type="text"
                      value={mobileInput}
                      onChange={(e) => {
                        setMobileInput(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      placeholder="Enter your mobile number"
                      className="flex-1 px-4 py-3 rounded-full text-xs sm:text-sm bg-white text-[#173F32] placeholder-[#63786F] focus:outline-none focus:ring-2 focus:ring-[#F47738] shadow-xs"
                      disabled={isLoading}
                    />
                    <Button
                      variant="primary"
                      size="sm"
                      type="submit"
                      isLoading={isLoading}
                      className="whitespace-nowrap px-5 py-3 rounded-full bg-[#F47738] hover:bg-[#E06324] font-bold text-xs sm:text-sm shadow-md"
                    >
                      <span>Notify Me</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                  {errorMsg && (
                    <p className="text-xs text-[#FCA5A5] font-semibold pl-2">
                      {errorMsg}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions (2 Sub-Columns - 7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 border border-[#E3D8C4] shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#173F32] tracking-tight mb-4">
                Frequently Asked Questions
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                {/* Column 1 of FAQs */}
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

                {/* Column 2 of FAQs */}
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
