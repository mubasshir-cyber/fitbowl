'use client';

import React from 'react';
import Image from 'next/image';
import { Plus, Flame, Dumbbell } from 'lucide-react';
import { BowlItem } from '@/types/menu';
import { Badge } from './Badge';

interface BowlCardProps {
  bowl: BowlItem;
  onSelect?: (bowl: BowlItem) => void;
}

export function BowlCard({ bowl, onSelect }: BowlCardProps) {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(bowl);
    } else {
      const form = document.querySelector('#trial-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E3D8C4] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between h-full">
      <div>
        {/* Bowl Image Container with Badges */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#FFF7E8]/50">
          <Image
            src={bowl.image}
            alt={`${bowl.name} - ${bowl.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} Healthy Meal Bowl`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-106 transition-transform duration-500"
          />

          {/* Top Overlaid Dietary & Friday Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
            <Badge variant={bowl.type === 'veg' ? 'veg' : 'non-veg'}>
              {bowl.type === 'veg' ? 'Veg' : 'Non-Veg'}
            </Badge>

            {bowl.isFridayOnly && (
              <Badge variant="friday">Fridays Only</Badge>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex flex-col space-y-2.5">
          {/* Bowl Title */}
          <h3 className="text-base sm:text-lg font-bold text-[#173F32] group-hover:text-[#F47738] transition-colors line-clamp-1 leading-snug">
            {bowl.name}
          </h3>

          {/* Nutrition Macro Badges */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#173F32] bg-[#173F32]/6 px-2.5 py-0.5 rounded-full">
              <Flame className="w-3.5 h-3.5 text-[#F47738]" />
              {bowl.nutrition.calories} kcal
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#173F32] bg-[#173F32]/6 px-2.5 py-0.5 rounded-full">
              <Dumbbell className="w-3.5 h-3.5 text-[#173F32]" />
              {bowl.nutrition.protein}g protein
            </span>
          </div>

          {/* Ingredient Summary */}
          <p className="text-xs sm:text-[13px] text-[#63786F] leading-relaxed line-clamp-2 min-h-[36px]">
            {bowl.ingredients}
          </p>
        </div>
      </div>

      {/* Card Action Row */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-[#E3D8C4]/50 flex items-center justify-between">
        <span className="text-[11px] font-bold text-[#63786F] uppercase tracking-wider">
          {bowl.type === 'veg' ? '100% Plant & Dairy' : 'Lean Animal Protein'}
        </span>

        {/* Quick select + button */}
        <button
          type="button"
          onClick={handleSelect}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF7E8] text-[#173F32] border border-[#E3D8C4] hover:bg-[#F47738] hover:text-white hover:border-[#F47738] flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 group/btn"
          title={`Select ${bowl.name} for free trial`}
          aria-label={`Select ${bowl.name} for free trial`}
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:rotate-90" />
        </button>
      </div>
    </div>
  );
}
