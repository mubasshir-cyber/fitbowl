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
    <section id="reviews" ref={reviewsRef} className="py-16 sm:py-20 lg:py-28 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <Badge variant="kicker">TESTIMONIALS</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#173F32] tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-[#334A40] max-w-xl font-medium">
            Real people. Real results.
          </p>
        </div>

        {/* 4 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              data-testimonial-reveal
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D8C4] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 text-[#F47738] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current stroke-current"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-[15px] text-[#334A40] font-medium leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E3D8C4]/50">
                <div className="w-10 h-10 rounded-full bg-[#FFF7E8] border border-[#E3D8C4] flex items-center justify-center text-xl shrink-0 shadow-xs">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#173F32] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#63786F] font-semibold mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
