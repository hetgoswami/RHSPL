import React from 'react';
import { BadgeProps } from '@/types';

export default function Badge({
  variant = 'superfine',
  size = 'md',
  children,
  className = '',
}: BadgeProps) {
  const sizeStyles = {
    sm: 'text-[10px] px-3 py-0.5 tracking-[0.12em]',
    md: 'text-[11px] sm:text-[12px] px-4 py-1 tracking-[0.14em]',
  };

  const variantStyles = {
    superfine: 'bg-gradient-to-r from-[#704b10] via-[#b68218] to-[#e4b22f] text-white font-bold uppercase shadow-sm',
    premium: 'bg-gradient-to-r from-[#0b1046] via-[#28389c] to-[#5468f0] text-white font-bold uppercase shadow-sm',
    muted: 'bg-[#f0edf0] text-[#8386af] font-semibold',
    gold: 'bg-[#fdd586] text-[#785a18] font-bold',
  };

  return (
    <span className={`inline-block rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
