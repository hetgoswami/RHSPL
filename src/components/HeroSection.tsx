'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HeroSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="w-full bg-white border-b border-stone-100"
      aria-label="Hero Section"
    >
      <div ref={revealRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ───────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* ESTABLISHED 2017 */}
            <p
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#775a17]"
            >
              Established 2017
            </p>

            {/* Headline */}
            <h1
              className="font-extrabold tracking-tight text-[#04062a]"
              style={{
                fontSize: 'clamp(34px, 4vw, 44px)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              Premium<br />
              Chana Dal &amp; Besan<br />
              Manufacturer &amp; Bulk Supplier
            </h1>

            {/* Description */}
            <div
              className="flex flex-col gap-1 text-[16px] sm:text-[18px] leading-[30px] text-[#46464e] max-w-[576px]"
            >
              <p>
                RHSPL (Ramkaran Heeralal &amp; Sons) provides Superior-Grade Chana
                products to leading food manufacturers and wholesalers nationwide.
              </p>
              <p>
                Experience precision manufacturing and consistent quality at scale.
              </p>
            </div>

            {/* CTA Button — outlined style */}
            <div className="mt-2">
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                ariaLabel="Contact RHSPL sales team for bulk inquiries"
              >
                Contact Us
              </Button>
            </div>

          </div>

          {/* ── RIGHT COLUMN — Image + Floating Cards ── */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end pr-0 lg:pr-8">

            {/* Main image container */}
            <div
              className="relative w-full max-w-[545px] overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.1)] border border-stone-200/50"
              style={{ borderRadius: '16px', aspectRatio: '545 / 500' }}
            >
              <Image
                src="/images/hero_factory.webp"
                alt="RHSPL Chana Dal and Besan Processing Facility"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 545px"
                className="object-cover"
              />
            </div>

            {/* Floating card — TOP RIGHT: 1500 Kg/Hr */}
            <div
              className="absolute top-6 -right-2 sm:-right-6 lg:-right-6 bg-white px-6 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-[#c7c5cf] z-20"
              style={{ borderRadius: '10px', minWidth: '237px' }}
            >
              <p className="font-semibold text-[24px] leading-[32px]">
                <span className="text-[#04062a]">1500 </span>
                <span className="text-[#775a17]">Kg/Hr</span>
              </p>
              <p className="text-[12px] font-bold mt-1 text-[#46464e] tracking-[0.08em]">
                Besan Processing Capacity
              </p>
            </div>

            {/* Floating card — BOTTOM LEFT: 4000 Kg/Hr */}
            <div
              className="absolute -bottom-6 -left-2 sm:-left-6 lg:-left-6 bg-white px-6 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-[#c7c5cf] z-20"
              style={{ borderRadius: '10px', minWidth: '335px' }}
            >
              <p className="font-semibold text-[24px] leading-[32px]">
                <span className="text-[#04062a]">4000 </span>
                <span className="text-[#775a17]">Kg/Hr</span>
              </p>
              <p className="text-[12px] font-bold mt-1 text-[#46464e] tracking-[0.08em]">
                Chanal Dal and Gota Processing Capacity
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
