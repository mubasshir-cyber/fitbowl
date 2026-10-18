'use client';

import React, { useState, useMemo } from 'react';
import { Search, X, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { BowlCard } from '../ui/BowlCard';
import { BOWLS_DATA } from '@/data/bowls';
import { MenuFilterType } from '@/types/menu';
import { useGsapReveal } from '@/hooks/useGsapReveal';

export function MenuSection() {
  const [activeFilter, setActiveFilter] = useState<MenuFilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const menuRef = useGsapReveal<HTMLElement>({
    selector: '[data-menu-reveal]',
    stagger: 0.1,
    y: 20,
  });

  // Filter and search logic
  const filteredBowls = useMemo(() => {
    return BOWLS_DATA.filter((bowl) => {
      // Dietary filter check
      const matchesFilter =
        activeFilter === 'all' ? true : bowl.type === activeFilter;

      // Search query check (matches name or ingredients)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === ''
          ? true
          : bowl.name.toLowerCase().includes(query) ||
            bowl.ingredients.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // If user searched or filtered, show all matches. Otherwise respect showAll state (default 4).
  const displayedBowls = useMemo(() => {
    if (searchQuery.trim() !== '' || activeFilter !== 'all' || showAll) {
      return filteredBowls;
    }
    return filteredBowls.slice(0, 4);
  }, [filteredBowls, searchQuery, activeFilter, showAll]);

  const vegCount = BOWLS_DATA.filter((b) => b.type === 'veg').length;
  const nonVegCount = BOWLS_DATA.filter((b) => b.type === 'non-veg').length;

  const handleSelectBowl = () => {
    const form = document.querySelector('#trial-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setActiveFilter('all');
    setSearchQuery('');
    setShowAll(false);
  };

  return (
    <section id="menu" ref={menuRef} className="py-16 sm:py-20 lg:py-28 relative">
      <Container>
        {/* Wireframe Header Row: Left Title + Button & Right Filters + Search */}
        <div
          data-menu-reveal
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          {/* Left: Kicker, Title, Subtitle, and View All Button */}
          <div className="flex flex-col items-start space-y-3 max-w-xl text-left">
            <Badge variant="kicker">OUR MENU</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#173F32] tracking-tight">
              Explore Our 14 Bowls
            </h2>
            <p className="text-base text-[#334A40] font-medium leading-relaxed">
              From Indian classics to global flavours, there&apos;s a chef-crafted
              macro-balanced bowl for every mood.
            </p>
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="mt-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E3D8C4] hover:border-[#173F32] text-[#173F32] font-bold text-xs sm:text-sm shadow-xs transition-all hover:bg-[#FFF7E8] cursor-pointer"
            >
              <span>{showAll ? 'Show Featured 4 Bowls' : 'View All 14 Bowls'}</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform ${
                  showAll ? '-rotate-90' : 'group-hover:translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Right: Dietary Segmented Tabs & Live Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* Dietary Tabs */}
            <div className="flex items-center gap-1 p-1 bg-white rounded-2xl border border-[#E3D8C4] shadow-xs">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#173F32] text-white shadow-xs'
                    : 'text-[#334A40] hover:text-[#173F32]'
                }`}
              >
                All ({BOWLS_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('veg')}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === 'veg'
                    ? 'bg-[#173F32] text-white shadow-xs'
                    : 'text-[#1B5E20] hover:bg-[#E8F5E9]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                Veg ({vegCount})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('non-veg')}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === 'non-veg'
                    ? 'bg-[#173F32] text-white shadow-xs'
                    : 'text-[#9A3412] hover:bg-[#FFEDD5]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#C2410C]" />
                Non-Veg ({nonVegCount})
              </button>
            </div>

            {/* Search Input Box */}
            <div className="relative min-w-[200px] sm:min-w-[240px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#63786F] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bowls..."
                className="w-full pl-9 pr-9 py-2.5 text-xs sm:text-sm bg-white rounded-2xl border border-[#E3D8C4] text-[#173F32] placeholder-[#63786F] focus:outline-none focus:border-[#F47738] shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#63786F] hover:text-[#173F32] p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bowls Grid or Empty State */}
        {displayedBowls.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedBowls.map((bowl) => (
              <BowlCard
                key={bowl.id}
                bowl={bowl}
                onSelect={handleSelectBowl}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white/70 rounded-3xl border border-[#E3D8C4]">
            <div className="w-16 h-16 rounded-full bg-[#DCEBCF]/70 text-[#173F32] flex items-center justify-center mb-4">
              <UtensilsCrossed className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#173F32] mb-1">
              No matching bowls found
            </h3>
            <p className="text-sm text-[#63786F] max-w-md mb-5">
              We couldn&apos;t find any bowls matching &ldquo;{searchQuery}&rdquo;.
              Try searching for &ldquo;paneer&rdquo;, &ldquo;chicken&rdquo;, or &ldquo;quinoa&rdquo;.
            </p>
            <Button variant="secondary" size="sm" onClick={handleResetFilters}>
              Reset Filters
            </Button>
          </div>
        )}

        {/* Section Footer Banner: Free Trial Callout */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#E3D8C4] shadow-sm">
            <div className="flex items-center gap-2 text-left">
              <span className="text-xl">✨</span>
              <p className="text-xs sm:text-sm font-bold text-[#173F32]">
                Can&apos;t decide? Pick any bowl for your{' '}
                <span className="text-[#F47738]">100% Free Trial</span> meal.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const form = document.querySelector('#trial-form');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group whitespace-nowrap"
            >
              <span>Claim Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
