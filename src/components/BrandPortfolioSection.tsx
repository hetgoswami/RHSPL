'use client';

import Image from 'next/image';
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
    image: '/images/brand_heritage_superfine.webp',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'heritage-premium',
    name: 'HERITAGE',
    badge: 'PREMIUM',
    image: '/images/brand_heritage_premium.webp',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'angad-premium',
    name: 'Angad',
    badge: 'PREMIUM',
    image: '/images/brand_angad_purple_v2.webp',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'arjun-superfine',
    name: 'ARJUN',
    badge: 'SUPERFINE',
    image: '/images/brand_arjun_red_v2.webp',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'arjun-premium',
    name: 'ARJUN',
    badge: 'PREMIUM',
    image: '/images/brand_arjun_yellow_v2.webp',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'angad-superfine',
    name: 'ANGAD',
    badge: 'SUPERFINE',
    image: '/images/brand_angad_green_v2.webp',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'gajraj-superfine',
    name: 'GAJRAJ',
    badge: 'SUPERFINE',
    image: '/images/brand_gajraj_maroon.webp',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'gajraj-premium',
    name: 'GAJRAJ',
    badge: 'PREMIUM',
    image: '/images/brand_gajraj_blue.webp',
    packaging: '30kg Heavy Duty PP Bags'
  },
  {
    id: 'rhspl-superfine',
    name: 'RHSPL',
    badge: 'SUPERFINE',
    image: '/images/brand_rhspl_green.webp',
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
            className="bg-white rounded-3xl border border-stone-200/70 p-6 flex flex-col justify-between relative shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out group overflow-hidden"
          >
            {/* Badge Pill */}
            <div className="absolute top-5 left-5 z-10">
              <Badge variant={card.badge === 'SUPERFINE' ? 'superfine' : 'premium'}>
                {card.badge}
              </Badge>
            </div>

            {/* Bag Image Container — clean white background matching Figma */}
            <div className="relative w-full aspect-[4/3] rounded-2xl flex items-center justify-center p-2 mb-4 overflow-hidden">
              <Image 
                src={card.image}
                alt={card.name}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#04062a] mb-3">
                {card.name}
              </h3>
              <div className="pt-2 border-t border-stone-100">
                <span className="text-[11px] font-medium text-[#775a17] tracking-normal block mb-0.5">
                  Packaging
                </span>
                <span className="text-sm font-medium text-[#04062a]">
                  {card.packaging}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
