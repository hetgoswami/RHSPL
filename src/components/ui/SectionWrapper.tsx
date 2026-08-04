import React from 'react';
import { SectionWrapperProps } from '@/types';

export default function SectionWrapper({
  id,
  bgVariant = 'white',
  ariaLabel,
  className = '',
  children,
}: SectionWrapperProps) {
  const bgStyles = {
    white: 'bg-white',
    soft: 'bg-[#f6f2f6]',
    navy: 'bg-[#04062a] text-white',
  };

  return (
    <section
      id={id}
      className={`w-full py-16 lg:py-24 ${bgStyles[bgVariant]} ${className}`}
      aria-label={ariaLabel}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
