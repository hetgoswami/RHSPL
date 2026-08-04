import React from 'react';
import { SectionHeaderProps } from '@/types';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  goldBar = false,
  darkTheme = false,
  className = '',
}: SectionHeaderProps) {
  const alignContainer = align === 'center' ? 'text-center max-w-4xl mx-auto mb-14' : 'max-w-2xl mb-8';
  const titleColor = darkTheme ? 'text-white' : 'text-[#04062a]';
  const descColor = darkTheme ? 'text-slate-300' : 'text-[#46464e]';

  return (
    <div className={`${alignContainer} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-bold tracking-[0.2em] text-[#775a17] uppercase block mb-2">
          {eyebrow}
        </span>
      )}

      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight leading-[1.15] ${titleColor}`}>
        {title}
      </h2>

      {goldBar && (
        <div className={`h-[3.5px] w-14 bg-[#775a17] rounded-full mt-4 mb-2 ${align === 'center' ? 'mx-auto' : ''}`} />
      )}

      {description && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
