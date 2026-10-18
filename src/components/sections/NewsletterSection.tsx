'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, BellRing } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function NewsletterSection() {
  const [contactInput, setContactInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = contactInput.trim();

    // Check if 10-digit mobile or basic email
    const isPhone = /^[6-9]\d{9}$/.test(trimmed);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isPhone && !isEmail) {
      setErrorMsg('Please enter a valid 10-digit mobile number or email address.');
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    // Simulate network submission with 800ms delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setContactInput('');
    }, 800);
  };

  return (
    <section className="py-12 sm:py-16 relative">
      <Container>
        <div className="bg-[#173F32] rounded-[28px] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#F47738]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Header Icon */}
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F47738] mb-4">
              <BellRing className="w-6 h-6" />
            </div>

            {/* Title & Subtext */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFF7E8] tracking-tight mb-2">
              Stay in the Loop
            </h2>
            <p className="text-sm sm:text-base text-[#DCEBCF] font-medium max-w-lg mb-8 leading-relaxed">
              Be the first to know about new bowls, special offers, and when we
              expand to your area in Mumbai.
            </p>

            {/* Input Form or Success State */}
            {isSubmitted ? (
              <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#DCEBCF]/20 border border-[#DCEBCF]/30 text-[#FFF7E8] text-sm font-bold animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-[#4ADE80]" />
                <span>You&apos;re in! We&apos;ll notify you when we expand or launch new bowls.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={contactInput}
                    onChange={(e) => {
                      setContactInput(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="Enter your mobile number or email"
                    className="w-full px-5 py-3.5 rounded-full text-sm bg-white text-[#173F32] placeholder-[#63786F] focus:outline-none focus:ring-2 focus:ring-[#F47738] border border-white shadow-xs"
                    disabled={isLoading}
                  />
                  {errorMsg && (
                    <p className="text-xs text-[#FCA5A5] font-semibold mt-1.5 text-left pl-4">
                      {errorMsg}
                    </p>
                  )}
                </div>

                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  isLoading={isLoading}
                  className="whitespace-nowrap px-6 py-3.5"
                >
                  <span>Notify Me</span>
                  <Send className="w-4 h-4 ml-1" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
