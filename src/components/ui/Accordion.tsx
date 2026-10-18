'use client';

import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '@/types/feedback';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-[#E3D8C4] py-4 transition-colors">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F32] rounded-lg p-1 group cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <h3 className="text-base sm:text-[17px] font-bold text-[#173F32] group-hover:text-[#F47738] transition-colors pr-4 leading-snug">
          {item.question}
        </h3>
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
            isOpen
              ? 'bg-[#173F32] text-white rotate-180'
              : 'bg-white border border-[#E3D8C4] text-[#173F32] group-hover:border-[#173F32]'
          }`}
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-2.5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-xs sm:text-sm text-[#334A40] leading-relaxed pl-1 pr-4 font-normal">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
