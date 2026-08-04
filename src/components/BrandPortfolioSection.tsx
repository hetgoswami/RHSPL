'use client';

import Image from 'next/image';
import { Package } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { BrandItem } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BRAND_CARDS: BrandItem[] = [
  {
    id: 'heritage-superfine',
    name: 'HERITAGE',
    badge: 'SUPERFINE',
    image: '/images/brand_heritage_superfine.png',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'heritage-premium',
    name: 'HERITAGE',
    badge: 'PREMIUM',
    image: '/images/brand_heritage_premium.png',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'angad-premium',
    name: 'ANGAD',
    badge: 'PREMIUM',
    image: '/images/brand_angad_purple.png',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'angad-superfine',
    name: 'ANGAD',
    badge: 'SUPERFINE',
    image: '/images/brand_angad_green.png',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'arjun-superfine',
    name: 'ARJUN',
    badge: 'SUPERFINE',
    image: '/images/brand_arjun_red.png',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'arjun-premium',
    name: 'ARJUN',
    badge: 'PREMIUM',
    image: '/images/brand_arjun_yellow.png',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'gajraj-superfine',
    name: 'GAJRAJ',
    badge: 'SUPERFINE',
    image: '/images/brand_gajraj_maroon.png',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'gajraj-premium',
    name: 'GAJRAJ',
    badge: 'PREMIUM',
    image: '/images/brand_gajraj_blue.png',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'rhspl-superfine',
    name: 'RHSPL',
    badge: 'SUPERFINE',
    image: '/images/brand_rhspl_green.png',
    packaging: '30kg Heavy Duty PP Bags'
  }
];

export default function BrandPortfolioSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="brands" bgVariant="soft" ariaLabel="Besan Brand Portfolio Section">
      {/* Section Header */}
      <SectionHeader
        eyebrow="STRATEGIC BRAND PORTFOLIO"
        title="Our Multi-Brand Besan Portfolio"
        description="Delivering specialized Besan solutions through our diverse brand family, each tailored for specific industrial and commercial requirements."
        align="center"
      />

      {/* 3x3 Brand Cards Grid */}
      <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BRAND_CARDS.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-3xl border border-stone-200/70 p-6 flex flex-col justify-between relative shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out group overflow-hidden"
          >
            {/* Badge Pill */}
            <div className="absolute top-5 left-5 z-10">
              <Badge variant={card.badge === 'SUPERFINE' ? 'superfine' : 'premium'}>
                {card.badge}
              </Badge>
            </div>

            {/* Bag Image Container */}
            <div
              className={`relative w-full aspect-[4/4] sm:aspect-[4/5] rounded-2xl flex items-center justify-center p-3 mb-5 overflow-hidden transition-colors duration-300 ${
                card.image
                  ? 'bg-gradient-to-b from-stone-50/80 to-stone-100/40 group-hover:from-amber-50/50 group-hover:to-stone-50'
                  : 'bg-stone-50/60 border border-dashed border-stone-200'
              }`}
            >
              {card.image ? (
                <Image
                  src={card.image}
                  alt={`${card.name} ${card.badge} Besan 30kg PP Bag`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-contain p-2 drop-shadow-md group-hover:scale-105 group-hover:drop-shadow-xl transition-all duration-500 ease-out"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-stone-400 gap-2">
                  <Package className="w-10 h-10 stroke-[1.5] text-stone-300 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-medium text-stone-400">Packaging Image Pending</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#04062a]">
                  {card.name}
                </h3>
                <span className="text-xs font-semibold tracking-wider text-amber-700/80 uppercase">
                  {card.badge}
                </span>
              </div>
              <div className="pt-3 border-t border-stone-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-[#775a17] tracking-normal block mb-0.5">
                    Packaging Standard
                  </span>
                  <span className="text-sm font-semibold text-[#04062a]">
                    {card.packaging}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
