'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Gift } from 'lucide-react';
import { Button } from './Button';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const trialSection = document.getElementById('trial-form');

      // Only show after scrolling past hero (~350px)
      if (scrollY < 350) {
        setIsVisible(false);
        return;
      }

      // If trial section is in viewport or close to it, hide sticky CTA to prevent redundancy
      if (trialSection) {
        const rect = trialSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          setIsVisible(false);
          return;
        }
      }

      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTrial = () => {
    const target = document.getElementById('trial-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Action Bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-[#E3D8C4] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom"
    >
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#F47738]">
            <Gift className="w-3.5 h-3.5 shrink-0" />
            <span className="uppercase tracking-wider">Free First Bowl</span>
          </div>
          <p className="text-xs font-bold text-[#173F32] truncate">
            Zero commitment • 4 Mumbai hubs
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={scrollToTrial}
          className="shrink-0 font-extrabold shadow-md flex items-center gap-1.5 px-4"
        >
          <span>Claim Trial</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </aside>
  );
}
