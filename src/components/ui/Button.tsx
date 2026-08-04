import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/types';

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  ariaLabel,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 ease-out active:scale-[0.98] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const sizeStyles = {
    sm: "text-xs px-4 py-2 rounded-md gap-2",
    md: "text-sm sm:text-base px-8 py-3 rounded-lg gap-3",
    lg: "text-base px-10 py-3.5 rounded-xl gap-3 shadow-sm",
  };

  const variantStyles = {
    primary: "bg-[#04062a] text-white hover:bg-[#0e1726] focus-visible:ring-[#04062a]",
    outline: "border border-[#04062a] text-[#04062a] bg-transparent hover:bg-[#04062a] hover:text-white focus-visible:ring-[#775a17]",
    whatsapp: "border border-[#25D366] bg-white hover:bg-emerald-50/60 text-[#04062a] tracking-wider uppercase focus-visible:ring-[#25D366]",
    gold: "bg-[#775a17] text-white hover:bg-[#604712] focus-visible:ring-[#775a17]",
    ghost: "text-[#46464e] hover:text-[#775a17] bg-transparent focus-visible:ring-[#775a17]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https') || href.startsWith('wa.me') || href.startsWith('mailto:') || href.startsWith('tel:');

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={combinedClasses}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {icon}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
