'use client';

import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProductRangeSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="products" bgVariant="soft" ariaLabel="Product Range Section">
      <div ref={revealRef}>
      {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          {/* Header Left */}
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-[0.2em] text-[#775a17] uppercase block mb-2">
              PRODUCT PORTFOLIO
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-medium text-[#04062a] tracking-tight leading-[1.15]">
              Premium Chana Derivatives
            </h2>
            {/* Gold Accent Line */}
            <div className="h-[3.5px] w-14 bg-[#775a17] rounded-full mt-4 mb-4" />
            <p className="text-[#46464e] text-base sm:text-lg leading-relaxed max-w-2xl">
              Supplying high-performance pulse-based ingredients for global food processing, livestock nutrition, and snack manufacturing. Engineered for precision, purity, and scale.
            </p>
          </div>

          {/* Header Right: 10k+ Annual Metric Tons Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="bg-white border border-stone-200/60 rounded-2xl p-6 text-center w-full max-w-xs shadow-sm">
              <span className="font-heading text-3xl sm:text-4xl font-semibold text-[#775a17] block">
                10k+
              </span>
              <span className="text-xs font-bold text-[#46464e] uppercase tracking-wider block mt-1">
                Annual Metric Tons
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards Container */}
        <div className="space-y-8">
          
          {/* Row 1: 3 Vertical Cards (Chana Dal, Chana Gota, Chana Besan) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Chana Dal */}
            <div className="bg-white rounded-3xl border border-stone-200/70 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] w-full bg-[#f6f2f6] p-6 flex items-center justify-center">
                  <Image 
                    src="/images/prod_chana_dal_fresh.webp"
                    alt="Chana Dal"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#04062a] mb-2">
                    Chana Dal
                  </h3>
                  <p className="text-sm text-[#46464e] leading-relaxed mb-6">
                    Sortex-cleaned split chickpeas with high sorting accuracy. Sorted using advanced CCD color sorters for zero defects.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-2">
                        Applications
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Wholesale Retail
                        </span>
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Catering Units
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-1">
                        Packaging
                      </span>
                      <span className="text-sm font-semibold text-[#1c1b1e]">
                        30kg, 50kg PP Bags
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Chana Gota */}
            <div className="bg-white rounded-3xl border border-stone-200/70 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] w-full bg-[#f6f2f6] overflow-hidden">
                  <Image 
                    src="/images/prod_chana_gota_fresh.webp"
                    alt="Chana Gota"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#04062a] mb-2">
                    Chana Gota
                  </h3>
                  <p className="text-sm text-[#46464e] leading-relaxed mb-6">
                    Husk-less whole chickpeas, ideal for specialized roasting and grinding processes requiring high nutrient density.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-2">
                        Applications
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Roasting Plants
                        </span>
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Protein Concentrates
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-1">
                        Packaging
                      </span>
                      <span className="text-sm font-semibold text-[#1c1b1e]">
                        50kg
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Chana Besan */}
            <div className="bg-white rounded-3xl border border-stone-200/70 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] w-full bg-[#f6f2f6] p-6 flex items-center justify-center">
                  <Image 
                    src="/images/prod_chana_besan_fresh.webp"
                    alt="Chana Besan"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#04062a] mb-2">
                    Chana Besan
                  </h3>
                  <p className="text-sm text-[#46464e] leading-relaxed mb-6">
                    Finely milled, high-protein gram flour processed through multi-stage pulse cleaning systems for consistent granulation and purity.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-2">
                        Applications
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Snack Manufacturing
                        </span>
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Bakeries
                        </span>
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Processed Foods
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-1">
                        Packaging
                      </span>
                      <span className="text-sm font-semibold text-[#1c1b1e]">
                        500gm, 10kg, 30kg, 40kg
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: 2 Horizontal Cards Side-by-Side (Chana Churi, Chana Husk) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 4: Chana Churi */}
            <div className="bg-white rounded-3xl border border-stone-200/70 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col sm:flex-row group">
              <div className="relative w-full sm:w-5/12 aspect-[4/3] sm:aspect-auto bg-[#f6f2f6] p-6 flex items-center justify-center shrink-0">
                <Image 
                  src="/images/prod_chana_churi_fresh.webp"
                  alt="Chana Churi"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex flex-col justify-between w-full sm:w-7/12">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#04062a] mb-2">
                    Chana Churi
                  </h3>
                  <p className="text-sm text-[#46464e] leading-relaxed mb-6">
                    High-nutrient byproduct for the cattle feed industry. Consistent quality and supply.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-2">
                        Applications
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Wholesale Retail
                        </span>
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Catering Units
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-1">
                        Packaging
                      </span>
                      <span className="text-sm font-semibold text-[#1c1b1e]">
                        50kg PP Bags
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Chana Husk */}
            <div className="bg-white rounded-3xl border border-stone-200/70 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col sm:flex-row group">
              <div className="relative w-full sm:w-5/12 aspect-[4/3] sm:aspect-auto bg-[#f6f2f6] p-6 flex items-center justify-center shrink-0">
                <Image 
                  src="/images/prod_chana_husk_fresh.webp"
                  alt="Chana Husk"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex flex-col justify-between w-full sm:w-7/12">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#04062a] mb-2">
                    Chana Husk
                  </h3>
                  <p className="text-sm text-[#46464e] leading-relaxed mb-6">
                    Outer shell byproduct, highly sought after for dietary fiber content in animal feed formulations.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-2">
                        Applications
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Wholesale Retail
                        </span>
                        <span className="bg-[#f0edf0] text-[#8386af] text-xs font-semibold px-3 py-1 rounded-full">
                          Catering Units
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#775a17] block mb-1">
                        Packaging
                      </span>
                      <span className="text-sm font-semibold text-[#1c1b1e]">
                        25kg PP Bags
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
