'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Download } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HeroSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="w-full bg-white border-b border-stone-100 overflow-hidden"
      aria-label="Hero Section"
    >
      <div ref={revealRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* ── LEFT COLUMN ───────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:space-y-7">

            {/* ESTABLISHED 2017 */}
            <p className="text-[13px] font-bold tracking-[0.18em] uppercase text-[#775a17]">
              ESTABLISHED 2017
            </p>

            {/* Headline — exact 3-line wrap matching Figma */}
            <h1
              className="font-heading font-extrabold text-[#04062a] tracking-tight leading-[1.12] max-w-[640px]"
              style={{
                fontSize: 'clamp(36px, 4.2vw, 48px)',
              }}
            >
              Premium<br />
              Chana Dal &amp; Besan<br />
              Manufacturer &amp; Bulk Supplier
            </h1>

            {/* Description — single continuous paragraph */}
            <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#46464e] max-w-[540px]">
              RHSPL (Ramkaran Heeralal &amp; Sons) provides Superior-Grade Chana products to leading food manufacturers and wholesalers nationwide. Experience precision manufacturing and consistent quality at scale.
            </p>

            {/* CTA Buttons Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="https://wa.me/919001208781?text=Hello%20RHSPL%20Team%2C%0A%0AI%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20Besan%20and%20Chana%20products.%0A%0APlease%20share%20your%20product%20catalogue%20and%20pricing.%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                ariaLabel="Connect with RHSPL on WhatsApp"
                icon={
                  <Image 
                    src="/images/whatsapp_icon_official.png"
                    alt="WhatsApp Official Icon"
                    width={70}
                    height={72}
                    className="w-6 h-6 shrink-0 object-contain"
                    priority
                  />
                }
              >
                LET'S CONNECT
              </Button>

              <Button
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="RHSPL_Brochure.pdf"
                variant="secondary"
                size="lg"
                ariaLabel="Download RHSPL Product Brochure PDF"
                icon={<Download className="w-5 h-5 shrink-0" aria-hidden="true" />}
              >
                Download Brochure
              </Button>
            </div>

          </div>

          {/* ── RIGHT COLUMN — Image + Floating Cards ── */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end py-4 lg:py-6">

            {/* Hero Main Processing Facility Image */}
            <div className="relative w-full max-w-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-stone-200/60 aspect-[540/460]">
              <Image
                src="/images/hero_factory.webp"
                alt="RHSPL Chana Dal and Besan Processing Facility"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>

            {/* Floating Card 1 — TOP RIGHT: 1500 Kg/Hr */}
            <div className="absolute top-6 -right-2 sm:-right-4 lg:-right-8 bg-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-stone-200/80 z-20">
              <p className="text-xl sm:text-[22px] font-bold leading-tight">
                <span className="text-[#04062a]">1500 </span>
                <span className="text-[#775a17]">Kg/Hr</span>
              </p>
              <p className="text-[11px] sm:text-[12px] font-medium text-[#46464e] mt-0.5">
                Besan Processing Capacity
              </p>
            </div>

            {/* Floating Card 2 — BOTTOM LEFT: 4000 Kg/Hr */}
            <div className="absolute -bottom-6 -left-2 sm:-left-4 lg:-left-8 bg-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-stone-200/80 z-20">
              <p className="text-xl sm:text-[22px] font-bold leading-tight">
                <span className="text-[#04062a]">4000 </span>
                <span className="text-[#775a17]">Kg/Hr</span>
              </p>
              <p className="text-[11px] sm:text-[12px] font-medium text-[#46464e] mt-0.5">
                Chanal Dal and Gota Processing Capacity
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
