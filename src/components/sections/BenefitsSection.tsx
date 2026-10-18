'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Leaf, Clock, Salad, Truck, ArrowRight, MoveRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Benefit data ──────────────────────────────────────────────── */
const BENEFITS = [
  {
    id: 'tasty',
    icon: Leaf,
    title: 'Tasty & Healthy',
    description: 'Flavour-packed bowls with balanced nutrition.',
    image: '/images/benefits/tasty-healthy.jpg',
    imageAlt: 'Vibrant quinoa bowl with cherry tomatoes, avocado, spinach and chickpeas',
    accent: 'green' as const,
  },
  {
    id: 'busy',
    icon: Clock,
    title: 'Made for Busy You',
    description: 'Save time, eat better.',
    image: '/images/benefits/busy-you.jpg',
    imageAlt: 'Grilled paneer bowl with broccoli, brown rice and edamame',
    accent: 'orange' as const,
  },
  {
    id: 'real',
    icon: Salad,
    title: 'Real Ingredients',
    description: 'No artificial stuff. Just real food.',
    image: '/images/benefits/real-ingredients.jpg',
    imageAlt: 'Fresh ingredients flat-lay: tomatoes, basil, avocado, chickpeas and herbs',
    accent: 'green' as const,
  },
  {
    id: 'delivery',
    icon: Truck,
    title: 'Convenient Delivery',
    description: 'To your home or office in Mumbai.',
    image: '/images/benefits/delivery.jpg',
    imageAlt: 'Premium kraft delivery bag with a sealed healthy meal bowl beside it',
    accent: 'orange' as const,
  },
] as const;

/* ─── Component ─────────────────────────────────────────────────── */
export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgBowlRef = useRef<HTMLDivElement>(null);
  const annotationRef = useRef<HTMLDivElement>(null);
  const leafBgRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const indicatorLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      /* ── 1. Section header entrance ── */
      if (prefersReduced) {
        gsap.set(
          [eyebrowRef.current, headingRef.current, copyRef.current, dividerRef.current,
           annotationRef.current, scrollIndicatorRef.current, indicatorLineRef.current],
          { opacity: 1, y: 0, clipPath: 'none', scaleX: 1 }
        );
      } else {
        gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
        gsap.set(headingRef.current, { clipPath: 'inset(0 0 100% 0)', y: 6 });
        gsap.set(copyRef.current, { opacity: 0, y: 12 });
        gsap.set(dividerRef.current, { opacity: 0, scaleX: 0, transformOrigin: 'center' });
        gsap.set(annotationRef.current, { opacity: 0, y: 14 });
        gsap.set(scrollIndicatorRef.current, { opacity: 0, y: 10 });
        gsap.set(indicatorLineRef.current, { scaleY: 0, transformOrigin: 'top center' });

        const introTL = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            once: true,
          },
          defaults: { ease: 'power3.out' },
        });

        introTL
          .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.45 })
          .to(headingRef.current, { clipPath: 'inset(0 0 0% 0)', y: 0, duration: 0.6 }, '-=0.2')
          .to(copyRef.current, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25')
          .to(dividerRef.current, { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.inOut' }, '-=0.2')
          .to(annotationRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
      }

      /* ── 2. Cards stagger entrance ── */
      if (!prefersReduced && cardsRef.current) {
        const cards = Array.from(cardsRef.current.querySelectorAll('[data-benefit-card]'));
        gsap.set(cards, { opacity: 0, y: 32 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }

      /* ── 3. Background bowl parallax (very subtle) ── */
      if (!prefersReduced && bgBowlRef.current) {
        gsap.to(bgBowlRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }

      /* ── 4. Leaf background subtle parallax ── */
      if (!prefersReduced && leafBgRef.current) {
        gsap.to(leafBgRef.current, {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 3,
          },
        });
      }

      /* ── 5. Scroll indicator reveal after cards ── */
      if (!prefersReduced && scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'bottom 85%',
            once: true,
          },
          onComplete: () => {
            if (indicatorLineRef.current) {
              gsap.to(indicatorLineRef.current, {
                scaleY: 1,
                duration: 0.6,
                ease: 'power2.inOut',
              });
            }
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="benefits"
      ref={sectionRef}
      aria-labelledby="benefits-heading"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#FFF7E8] overflow-hidden"
    >
      {/* ── Large organic leaf bg (decorative) ── */}
      <div
        ref={leafBgRef}
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      >
        {/* Big top-left leaf blob */}
        <svg
          className="absolute -top-16 -left-20 w-[420px] h-[420px] opacity-[0.07] text-[#173F32]"
          viewBox="0 0 420 420"
          fill="currentColor"
        >
          <ellipse cx="210" cy="210" rx="200" ry="170" transform="rotate(-20 210 210)" />
        </svg>
        {/* Bottom right leaf blob */}
        <svg
          className="absolute -bottom-20 -right-16 w-[380px] h-[380px] opacity-[0.06] text-[#173F32]"
          viewBox="0 0 380 380"
          fill="currentColor"
        >
          <ellipse cx="190" cy="190" rx="180" ry="155" transform="rotate(30 190 190)" />
        </svg>
        {/* Small mid accent */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] text-[#DCEBCF]"
          viewBox="0 0 700 700"
          fill="currentColor"
        >
          <circle cx="350" cy="350" r="340" />
        </svg>
      </div>

      {/* ── Background food bowl — upper left ── */}
      <div
        ref={bgBowlRef}
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-8 -left-12 hidden lg:block"
      >
        <div className="relative w-[260px] h-[260px] xl:w-[310px] xl:h-[310px] rounded-full overflow-hidden opacity-90 shadow-2xl ring-4 ring-white/80">
          <Image
            src="/images/hero/hero-bowl.jpg"
            alt=""
            fill
            sizes="310px"
            className="object-cover scale-110"
          />
        </div>
      </div>

      {/* ── Scattered ingredient dots (decorative SVG) ── */}
      <div aria-hidden="true" className="pointer-events-none select-none absolute top-20 right-[8%] hidden xl:block opacity-70">
        <SmallIngredientSprig />
      </div>
      <div aria-hidden="true" className="pointer-events-none select-none absolute bottom-36 left-[6%] hidden xl:block opacity-60 rotate-45">
        <SmallIngredientSprig />
      </div>

      {/* ── Handwritten annotation — right side ── */}
      <div
        ref={annotationRef}
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-16 right-6 xl:right-12 hidden lg:flex flex-col items-end gap-1"
        style={{ opacity: 0 }}
      >
        <p className="font-script text-2xl xl:text-3xl text-[#173F32] font-bold leading-tight text-right rotate-[-3deg]">
          Real Ingredients.
        </p>
        <p className="font-script text-2xl xl:text-3xl text-[#173F32] font-bold leading-tight text-right rotate-[-3deg]">
          Real Flavours.
        </p>
        {/* Curved arrow pointing left/down toward the bowl */}
        <svg
          className="w-14 h-10 text-[#F47738] -rotate-12 mt-1 mr-6"
          viewBox="0 0 60 40"
          fill="none"
        >
          <path
            d="M55 5 C 40 2, 15 12, 8 32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 27 L 8 32 L 14 29"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Container size="wide">
        {/* ─────────── Section introduction ─────────── */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16 lg:mb-20">
          {/* Eyebrow */}
          <div ref={eyebrowRef} style={{ opacity: 0 }}>
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-extrabold text-[#F47738]">
              <span className="w-6 h-px bg-[#F47738]/60" />
              Good Food, Busy Life
              <span className="w-6 h-px bg-[#F47738]/60" />
            </span>
          </div>

          {/* Heading with clip-path mask */}
          <div
            ref={headingRef}
            className="overflow-hidden mt-3"
            style={{ clipPath: 'inset(0 0 100% 0)' }}
          >
            <h2
              id="benefits-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
            >
              <span className="text-[#173F32]">Why </span>
              <span className="text-[#F47738]">FitBowl?</span>
            </h2>
          </div>

          {/* Supporting copy */}
          <p
            ref={copyRef}
            className="mt-4 text-base sm:text-lg text-[#63786F] font-medium max-w-xl leading-relaxed"
            style={{ opacity: 0 }}
          >
            Gourmet taste meets honest macros — crafted for urban lifestyles.
          </p>

          {/* Botanical divider */}
          <div
            ref={dividerRef}
            aria-hidden="true"
            className="mt-6 flex items-center gap-3"
            style={{ opacity: 0, transform: 'scaleX(0)' }}
          >
            <span className="w-8 h-px bg-[#F47738]/50" />
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
              <path d="M14 2 C10 6 6 10 4 14 C8 12 12 8 14 4 C16 8 20 12 24 14 C22 10 18 6 14 2Z" fill="#173F32" opacity="0.5" />
              <path d="M14 20 C14 14 14 8 14 2" stroke="#173F32" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            </svg>
            <span className="w-8 h-px bg-[#F47738]/50" />
          </div>
        </div>

        {/* ─────────── Four benefit cards ─────────── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {BENEFITS.map((benefit) => {
            const IconComponent = benefit.icon;
            const isOrange = benefit.accent === 'orange';

            return (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                IconComponent={IconComponent}
                isOrange={isOrange}
                onLearnMore={benefit.id === 'tasty' || benefit.id === 'real' ? scrollToMenu : undefined}
              />
            );
          })}
        </div>

        {/* ─────────── Scroll indicator ─────────── */}
        <div
          ref={scrollIndicatorRef}
          className="flex flex-col items-center gap-2 mt-16 sm:mt-20"
          aria-hidden="true"
          style={{ opacity: 0 }}
        >
          {/* Mouse icon */}
          <svg
            className="w-5 h-8 text-[#173F32]/40"
            viewBox="0 0 20 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="1" y="1" width="18" height="30" rx="9" />
            <line x1="10" y1="6" x2="10" y2="11" strokeLinecap="round" />
          </svg>
          <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#173F32]/35">
            Scroll to Explore
          </span>
          {/* Vertical line reveal */}
          <div className="w-px h-10 bg-[#173F32]/20 overflow-hidden">
            <div
              ref={indicatorLineRef}
              className="w-full h-full bg-[#173F32]/30"
              style={{ transform: 'scaleY(0)', transformOrigin: 'top center' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Benefit Card Sub-component ───────────────────────────────── */
interface BenefitCardProps {
  benefit: typeof BENEFITS[number];
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isOrange: boolean;
  onLearnMore?: () => void;
}

function BenefitCard({ benefit, IconComponent, isOrange, onLearnMore }: BenefitCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // GSAP hover — only on pointer devices
  const handleMouseEnter = () => {
    if (!cardRef.current || !imageRef.current) return;
    gsap.to(cardRef.current, { y: -5, duration: 0.28, ease: 'power2.out' });
    gsap.to(imageRef.current, { scale: 1.04, duration: 0.4, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !imageRef.current) return;
    gsap.to(cardRef.current, { y: 0, duration: 0.32, ease: 'power2.inOut' });
    gsap.to(imageRef.current, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
  };

  return (
    <div
      ref={cardRef}
      data-benefit-card
      className={`
        relative flex flex-col bg-white rounded-[26px] border overflow-hidden
        shadow-[0_2px_12px_rgba(23,63,50,0.07)]
        will-change-transform cursor-default
        ${isOrange
          ? 'border-[#F47738]/20 hover:border-[#F47738]/40'
          : 'border-[#E3D8C4] hover:border-[#DCEBCF]'
        }
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Icon container */}
        <div
          className={`
            w-11 h-11 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300
            ${isOrange
              ? 'bg-[#FFEDD5] group-hover:bg-[#FDE8C8]'
              : 'bg-[#DCEBCF]/70 group-hover:bg-[#D0E8BE]'
            }
          `}
        >
          <IconComponent
            className="w-5 h-5"
            style={{ color: isOrange ? '#F47738' : '#173F32' }}
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h3
          className={`text-lg sm:text-xl font-black mb-2 leading-snug tracking-tight transition-colors duration-200 ${
            isOrange ? 'text-[#F47738]' : 'text-[#173F32]'
          }`}
        >
          {benefit.title}
        </h3>

        {/* Underline accent */}
        <div
          className={`w-8 h-0.5 rounded-full mb-3 ${isOrange ? 'bg-[#F47738]/60' : 'bg-[#173F32]/30'}`}
          aria-hidden="true"
        />

        {/* Description */}
        <p className="text-sm text-[#334A40] leading-relaxed font-medium flex-1">
          {benefit.description}
        </p>

        {/* Learn More link */}
        {onLearnMore ? (
          <button
            type="button"
            onClick={onLearnMore}
            className={`
              inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider mt-5
              focus:outline-none focus-visible:underline transition-colors duration-200
              ${isOrange
                ? 'text-[#F47738] hover:text-[#E06324]'
                : 'text-[#173F32] hover:text-[#F47738]'
              }
            `}
            aria-label={`Learn more about ${benefit.title}`}
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        ) : (
          <span
            className={`
              inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider mt-5
              ${isOrange ? 'text-[#F47738]/70' : 'text-[#173F32]/50'}
            `}
            aria-label={`More about ${benefit.title}`}
          >
            <MoveRight className="w-3.5 h-3.5" aria-hidden="true" />
            Mumbai only
          </span>
        )}
      </div>

      {/* Card image — asymmetrically cropped at bottom */}
      <div
        className="relative w-full h-40 sm:h-44 overflow-hidden"
        aria-hidden="true"
      >
        <div ref={imageRef} className="relative w-full h-full will-change-transform">
          <Image
            src={benefit.image}
            alt={benefit.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center"
          />
          {/* Very light gradient overlay so text above reads cleanly */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-white/15 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Decorative ingredient sprig SVG ─────────────────────────── */
function SmallIngredientSprig() {
  return (
    <svg width="52" height="80" viewBox="0 0 52 80" fill="none">
      <path d="M26 76 Q28 50 26 4" stroke="#4F8562" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M26 64C15 56 14 44 26 54 26 54 26 64 26 64Z" fill="#5B9A71" />
      <path d="M26 64C37 56 38 44 26 54Z" fill="#4F8562" />
      <path d="M26 48C15 40 14 28 26 38 26 38 26 48 26 48Z" fill="#6EAE85" />
      <path d="M26 48C37 40 38 28 26 38Z" fill="#5B9A71" />
      <path d="M26 32C17 24 16 14 26 22Z" fill="#4F8562" />
      <path d="M26 32C35 24 36 14 26 22Z" fill="#6EAE85" />
      <circle cx="26" cy="5" r="3.5" fill="#F47738" opacity="0.45" />
    </svg>
  );
}
