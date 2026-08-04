'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { Factory, Settings, Star, Truck } from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory: Factory,
  Settings: Settings,
  Star: Star,
  Truck: Truck,
};

export default function KeyHighlights() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bgVariant="soft" className="py-12 border-b border-stone-200/50" ariaLabel="Key Highlights Section">
      <div ref={revealRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SITE_DATA.metrics.map((metric, idx) => {
          const IconComponent = iconMap[metric.iconName] || Factory;
          return (
            <div
              key={idx}
              className="bg-white px-6 py-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              <div className="mb-4 text-[#04062a] group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-8 h-8 stroke-[1.75]" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl sm:text-[24px] font-medium text-[#04062a] tracking-tight leading-tight mb-1">
                {metric.title}
              </h3>
              <p className="text-sm sm:text-[16px] text-[#46464e] font-normal">
                {metric.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
