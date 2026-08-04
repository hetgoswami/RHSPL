'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 text-xs border-t border-stone-200/60">
      
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link 
              href="/" 
              className="relative block h-[56px] w-[177px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] focus-visible:ring-offset-2 rounded-lg"
              aria-label="RHSPL Homepage"
            >
              <Image 
                src="/images/rhspl_official_logo.png"
                alt="RHSPL - Ramkaran Heeralal & Sons Logo"
                width={360}
                height={114}
                className="h-full w-auto object-contain object-left"
              />
            </Link>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs pt-1">
              Leading the industry with precision manufactured Chana products since 2017.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <nav className="lg:col-span-2 space-y-4" aria-label="Footer Quick Links">
            <h4 className="font-heading text-[12px] font-medium text-[#04062a] uppercase tracking-[0.15em]">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 font-normal text-sm text-[#46464e]">
              <li><Link href="#home" className="hover:text-[#775a17] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm px-1">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#775a17] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm px-1">About</Link></li>
              <li><Link href="#products" className="hover:text-[#775a17] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm px-1">Products</Link></li>
              <li><Link href="#brands" className="hover:text-[#775a17] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm px-1">Brands</Link></li>
            </ul>
          </nav>

          {/* Col 3: Operations */}
          <nav className="lg:col-span-2 space-y-4" aria-label="Footer Operations Links">
            <h4 className="font-heading text-[12px] font-medium text-[#04062a] uppercase tracking-[0.15em]">
              OPERATIONS
            </h4>
            <ul className="space-y-3 font-normal text-sm text-[#46464e]">
              <li><Link href="#network" className="hover:text-[#775a17] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm px-1">Network</Link></li>
              <li><Link href="#contact" className="hover:text-[#775a17] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm px-1">Contact Us</Link></li>
              <li>
                <a 
                  href="/brochure.pdf" 
                  download="RHSPL_Brochure.pdf"
                  className="hover:text-[#775a17] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm px-1"
                  aria-label="Download RHSPL Product Brochure PDF"
                >
                  Brochure
                </a>
              </li>
            </ul>
          </nav>

          {/* Col 4: Headquarters */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-[12px] font-medium text-[#04062a] uppercase tracking-[0.15em]">
              HEADQUARTERS
            </h4>
            <address className="space-y-1 text-sm text-[#46464e] leading-relaxed not-italic">
              <p>Araji No.- 368 Mi., Industrial Area Mandaldeh,</p>
              <p>Chittorgarh, 312201</p>
              <p>Rajasthan, India</p>
            </address>
            <p className="pt-2">
              <a 
                href="mailto:rhsplbesan@gmail.com" 
                className="text-[#04062a] font-medium text-base hover:text-[#775a17] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm"
                aria-label="Send email to RHSPL"
              >
                rhsplbesan@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="py-6 border-t border-stone-100 text-center text-sm text-[#46464e]">
        <p>© {new Date().getFullYear()} RHSPL Manufacturing. All rights reserved.</p>
      </div>

    </footer>
  );
}
