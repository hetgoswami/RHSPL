'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STATES = [
  'Rajasthan',
  'Gujarat',
  'Maharashtra',
  'Delhi NCR',
  'Haryana',
  'Madhya Pradesh'
];

export default function SupplyNetworkSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="network" bgVariant="white" ariaLabel="National Supply Network Section">
      <div ref={revealRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Strategic Supply Network */}
        <div className="lg:col-span-6 space-y-6">
          <SectionHeader 
            title={<>Strategic Supply<br />Network</>}
            description="Our distribution network covers major industrial hubs, ensuring timely delivery for large-scale operations."
            align="left"
          />

          {/* State Pills */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-3 max-w-lg">
              {STATES.map((state) => (
                <span 
                  key={state}
                  className="bg-[#eae7eb] text-[#04062a] font-heading font-medium text-sm sm:text-base px-6 py-2.5 rounded-full border border-stone-200/60 shadow-sm"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: India Supply Network Map Graphic */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden flex items-center justify-center p-2">
            <Image 
              src="/images/network_india_map.webp"
              alt="RHSPL Strategic Supply Network India Map"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
