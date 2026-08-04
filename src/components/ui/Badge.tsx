import React from 'react';
import { BadgeProps } from '@/types';

export default function Badge({
  variant = 'superfine',
  size = 'md',
  children,
  className = '',
}: BadgeProps) {
  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  const variantStyles = {
    superfine: 'bg-[#775a17] text-white font-extrabold uppercase tracking-wider',
    premium: 'bg-[#134578] text-white font-extrabold uppercase tracking-wider',
    muted: 'bg-[#f0edf0] text-[#8386af] font-semibold',
    gold: 'bg-[#fdd586] text-[#785a18] font-bold',
  };

  return (
    <span className={`inline-block rounded-full shadow-sm ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
