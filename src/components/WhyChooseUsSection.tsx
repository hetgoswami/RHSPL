'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { Award, Microscope, Bot, Snowflake, PackageCheck, ClipboardCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ADVANTAGES = [
  {
    id: 'raw-material',
    title: 'Premium Raw Material',
    description: "Direct sourcing from Rajasthan's finest Chana farms ensuring superior protein content.",
    icon: Award
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection',
    description: '3-tier laboratory testing for moisture, purity, and mesh consistency in every batch.',
    icon: Microscope
  },
  {
    id: 'automatic-plant',
    title: 'Fully Automatic Plant',
    description: 'Human-free processing from cleaning to bagging for unmatched hygiene.',
    icon: Bot
  },
  {
    id: 'cool-grinding',
    title: 'Cool Grinding Technology',
    description: 'Advanced grinding that prevents heat buildup, preserving natural oils and aroma.',
    icon: Snowflake
  },
  {
    id: 'hygienic-packaging',
    title: 'Hygienic Packaging',
    description: 'Moisture-proof bulk packaging and small(25kg/50kg) for long shelf life.',
    icon: PackageCheck
  },
  {
    id: 'bulk-supply',
    title: 'Reliable Bulk Supply',
    description: 'Vast storage and robust logistics to handle large-scale recurring orders.',
    icon: ClipboardCheck
  }
];

export default function WhyChooseUsSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="why-us" bgVariant="white" ariaLabel="Why Choose RHSPL Section">
      {/* Header */}
      <SectionHeader 
        eyebrow="THE RHSPL EDGE"
        title="The Choice of Industry Leaders"
        align="center"
        className="mb-16"
      />

        {/* 6 Feature Cards Grid */}
        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADVANTAGES.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="bg-white rounded-3xl border border-stone-200/80 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-start group"
              >
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-[#04062a]" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#04062a] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#46464e] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
    </SectionWrapper>
  );
}
