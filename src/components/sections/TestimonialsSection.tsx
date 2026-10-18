'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const REVIEWS_PER_PAGE = 4;
const PAGE_COUNT = Math.ceil(TESTIMONIALS_DATA.length / REVIEWS_PER_PAGE);

export function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const pageRef = useRef(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const headingRef = useGsapReveal<HTMLElement>({
    selector: '[data-testimonial-heading]',
    stagger: 0.12,
    y: 25,
  });

  const changePage = useCallback((nextPage: number) => {
    const normalizedPage = (nextPage + PAGE_COUNT) % PAGE_COUNT;
    if (isTransitioning.current || normalizedPage === pageRef.current) return;
    isTransitioning.current = true;

    const cards = cardsRef.current?.querySelectorAll('[data-review-card]');
    if (!cards?.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      pageRef.current = normalizedPage;
      setPage(normalizedPage);
      isTransitioning.current = false;
      return;
    }

    gsap.to(cards, {
      autoAlpha: 0,
      y: -8,
      duration: 0.22,
      stagger: 0.035,
      ease: 'power1.in',
      onComplete: () => {
        pageRef.current = normalizedPage;
        setPage(normalizedPage);
        isTransitioning.current = false;
      },
    });
  }, []);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('[data-review-card]');
    if (!cards?.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(cards, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 12 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.48,
        stagger: 0.09,
        ease: 'power2.out',
      },
    );
  }, [page]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = window.setInterval(() => {
      changePage((pageRef.current + 1) % PAGE_COUNT);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [changePage]);

  const visibleReviews = TESTIMONIALS_DATA.slice(
    page * REVIEWS_PER_PAGE,
    (page + 1) * REVIEWS_PER_PAGE,
  );

  return (
    <section id="reviews" ref={headingRef} className="py-16 sm:py-20 lg:py-24 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          <div
            data-testimonial-heading
            className="lg:col-span-3 flex flex-col items-start space-y-2.5 text-left"
          >
            <Badge variant="kicker">SAMPLE TESTIMONIALS</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#173F32] tracking-tight leading-tight">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-[#63786F] font-semibold">
              Illustrative reviews for preview.
            </p>
          </div>

          <div className="lg:col-span-9 min-w-0">
            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              aria-live="off"
            >
              {visibleReviews.map((item) => (
                <article
                  key={item.id}
                  data-review-card
                  className="bg-white rounded-2xl p-5 border border-[#E3D8C4] shadow-xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[220px]"
                >
                  <div>
                    <div
                      className="flex items-center gap-0.5 text-[#F47738] mb-3"
                      role="img"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }, (_, index) => (
                        <Star key={index} className="w-3.5 h-3.5 fill-current stroke-current" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#334A40] font-medium leading-relaxed italic mb-4">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 pt-3 border-t border-[#E3D8C4]/50">
                    <div className="w-8 h-8 rounded-full bg-[#FFF7E8] border border-[#E3D8C4] flex items-center justify-center text-base shrink-0 shadow-xs" aria-hidden="true">
                      {item.avatar}
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="text-xs font-black text-[#173F32] leading-tight truncate">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-[#63786F] font-semibold truncate mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-xs font-semibold text-[#63786F]" aria-live="polite">
                {page * REVIEWS_PER_PAGE + 1}–{Math.min((page + 1) * REVIEWS_PER_PAGE, TESTIMONIALS_DATA.length)} of {TESTIMONIALS_DATA.length} reviews
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => changePage((page - 1 + PAGE_COUNT) % PAGE_COUNT)}
                  aria-label="Show previous reviews"
                  className="w-9 h-9 rounded-full border border-[#DCCFB8] bg-white text-[#173F32] inline-flex items-center justify-center transition-colors hover:bg-[#EAF1E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173F32]"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                {Array.from({ length: PAGE_COUNT }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => changePage(index)}
                    aria-label={`Show review group ${index + 1}`}
                    aria-current={page === index ? 'page' : undefined}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173F32] ${page === index ? 'w-7 bg-[#173F32]' : 'w-2.5 bg-[#C8D8C8] hover:bg-[#71917E]'}`}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => changePage((page + 1) % PAGE_COUNT)}
                  aria-label="Show next reviews"
                  className="w-9 h-9 rounded-full border border-[#DCCFB8] bg-white text-[#173F32] inline-flex items-center justify-center transition-colors hover:bg-[#EAF1E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173F32]"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
