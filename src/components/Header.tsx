'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'HOME', active: true },
  { href: '#about', label: 'ABOUT', active: false },
  { href: '#products', label: 'PRODUCTS', active: false },
  { href: '#brands', label: 'BRANDS', active: false },
  { href: '#network', label: 'NETWORK', active: false },
  { href: '#contact', label: 'CONTACT', active: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="site-container py-4 flex items-center justify-between">

        {/* Official Logo */}
        <Link 
          href="/" 
          className="relative h-[46px] w-[175px] shrink-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] focus-visible:ring-offset-2 rounded-lg"
          aria-label="RHSPL Ramkaran Heeralal & Sons Homepage"
        >
          <Image 
            src="/images/rhspl_logo_clean.svg"
            alt="RHSPL - Ramkaran Heeralal & Sons Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] font-bold tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] focus-visible:ring-offset-2 rounded-md px-1 py-0.5 ${
                link.active
                  ? 'text-[#775a17]'
                  : 'text-[#57534e] hover:text-[#775a17]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#04062a] hover:text-[#775a17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] focus-visible:ring-offset-2 rounded-lg"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-menu" className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-[12px] font-bold tracking-[0.12em] py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] focus-visible:ring-offset-2 rounded-md px-2 ${
                link.active ? 'text-[#775a17]' : 'text-[#57534e]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
