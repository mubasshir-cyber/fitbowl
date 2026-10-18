'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export function TestimonialsSection() {
  const reviewsRef = useGsapReveal<HTMLElement>({
    selector: '[data-testimonial-reveal]',
    stagger: 0.12,
    y: 25,
  });

  return (
    <section id="reviews" ref={reviewsRef} className="py-16 sm:py-20 lg:py-24 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Left Title Block (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-2.5 text-left">
            <Badge variant="kicker">TESTIMONIALS</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#173F32] tracking-tight leading-tight">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-[#63786F] font-semibold">
              Real people. Real results.
            </p>
          </div>

          {/* Right 4 Testimonials Cards Row (9 cols on lg) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                data-testimonial-reveal
                className="bg-white rounded-2xl p-5 border border-[#E3D8C4] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* 5 Golden Stars */}
                  <div className="flex items-center gap-0.5 text-[#F47738] mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-current stroke-current"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-[13px] text-[#334A40] font-medium leading-relaxed italic mb-4 min-h-[54px]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-[#E3D8C4]/50">
                  <div className="w-8 h-8 rounded-full bg-[#FFF7E8] border border-[#E3D8C4] flex items-center justify-center text-base shrink-0 shadow-xs">
                    {item.avatar}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-black text-[#173F32] leading-tight truncate">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-[#63786F] font-semibold truncate mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
