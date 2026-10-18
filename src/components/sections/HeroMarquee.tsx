'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface HeroMarqueeProps {
  targetRef: React.RefObject<HTMLElement | null>;
}

export function HeroMarquee({ targetRef }: HeroMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  
  const [pathD, setPathD] = useState('');
  
  useEffect(() => {
    const updatePath = () => {
      if (!targetRef.current || !containerRef.current) return;
      
      const targetRect = targetRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const cx = targetRect.left - containerRect.left + targetRect.width / 2;
      const cy = targetRect.top - containerRect.top + targetRect.height / 2;
      const r = targetRect.width / 2;
      
      const isMobile = window.innerWidth < 1024;
      
      // Path radius slightly larger than the bowl
      const pathRadius = isMobile ? r + 32 : r + 55;
      
      // Angles for the arc (in radians)
      const thetaStart = -155 * Math.PI / 180; // Top-left
      const thetaEnd = -10 * Math.PI / 180;   // Top-right
      
      const pxStart = cx + pathRadius * Math.cos(thetaStart);
      const pyStart = cy + pathRadius * Math.sin(thetaStart);
      const pxEnd = cx + pathRadius * Math.cos(thetaEnd);
      const pyEnd = cy + pathRadius * Math.sin(thetaEnd);
      
      // Starting point on the left side
      // On mobile: curve passes between trust points and bowl.
      // On desktop: curve passes between subtitle and CTAs.
      const startY = isMobile ? cy - pathRadius * 0.1 : cy + pathRadius * 0.2;
      
      // Create a downward tilt towards the left edge
      const p0x = -100;
      const p0y = startY + (isMobile ? 40 : 80);
      
      const c1x = cx * 0.35;
      const c1y = startY - (isMobile ? 10 : 20);
      
      const tangentDx = -Math.sin(thetaStart);
      const tangentDy = Math.cos(thetaStart);
      
      const L = cx * 0.3;
      const c2x = pxStart - L * tangentDx;
      const c2y = pyStart - L * tangentDy;
      
      const d = `M ${p0x} ${p0y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${pxStart} ${pyStart} A ${pathRadius} ${pathRadius} 0 0 1 ${pxEnd} ${pyEnd}`;
      setPathD(d);
    };
    
    updatePath();
    
    const observer = new ResizeObserver(updatePath);
    if (targetRef.current) observer.observe(targetRef.current);
    observer.observe(document.body);
    
    window.addEventListener('resize', updatePath);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updatePath);
    };
  }, [targetRef]);
  
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !textPathRef.current) return;
    
    // Calculate the pixel length of one repetition of the text to ensure a seamless loop
    const ctx = gsap.context(() => {
      // The text is repeated 5 times. 
      // We animate startOffset from 0 to -singleRepetitionLength
      const textNode = textPathRef.current;
      
      const setupAnimation = () => {
        if (!textNode) return;
        const totalLength = textNode.getComputedTextLength();
        // we repeated the base string 5 times
        const singleLength = totalLength / 5;
        
        gsap.killTweensOf(textNode);
        gsap.fromTo(
          textNode,
          { attr: { startOffset: 0 } },
          {
            attr: { startOffset: -singleLength },
            duration: 15,
            ease: 'none',
            repeat: -1,
          }
        );
      };
      
      // Short delay to ensure text is rendered and computed length is correct
      setTimeout(setupAnimation, 100);
      window.addEventListener('resize', setupAnimation);
      
      return () => {
        window.removeEventListener('resize', setupAnimation);
      };
    }, containerRef);
    
    return () => ctx.revert();
  }, [pathD]);
  
  const text = 'FRESHLY PREPARED • FULL OF FLAVOUR • MADE FOR YOUR DAY • REAL INGREDIENTS • GOOD FOOD, GOOD MOOD • FRESH EVERY DAY • ';
  const repeatedText = text.repeat(5);
  
  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    >
      <svg className="w-full h-full text-[#2A5239] overflow-visible">
        <defs>
          <mask id="ribbon-mask">
            <rect width="100%" height="100%" fill="black" />
            <path d={pathD} fill="none" stroke="white" strokeWidth="34" />
            <path d={pathD} fill="none" stroke="black" strokeWidth="32" />
          </mask>
        </defs>
        {/* Ribbon Borders */}
        <path
          d={pathD}
          fill="none"
          stroke="#3E6B4F"
          strokeWidth="34"
          mask="url(#ribbon-mask)"
          className="opacity-50"
        />
        <path
          ref={pathRef}
          id="hero-marquee-curve"
          d={pathD}
          fill="none"
          stroke="transparent"
        />
        <text
          className="font-extrabold text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.25em]"
          style={{ textTransform: 'uppercase' }}
          dominantBaseline="middle"
        >
          <textPath
            ref={textPathRef}
            href="#hero-marquee-curve"
            startOffset="0"
          >
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}