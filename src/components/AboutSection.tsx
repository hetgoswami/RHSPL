'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="about" bgVariant="white" ariaLabel="About Ramkaran Heeralal & Sons Section">
      <div ref={revealRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Factory Aerial Image */}
        <div className="lg:col-span-6">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-lg border border-stone-200/60">
            <Image 
              src="/images/heritage_of_excellence.webp"
              alt="RHSPL Factory Aerial View"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: About Content */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          
          <SectionHeader 
            eyebrow="HERITAGE OF EXCELLENCE"
            title={<>Decades of<br />Manufacturing Precision</>}
            align="left"
            goldBar
          />

            <p className="text-[#46464e] text-base sm:text-lg leading-relaxed">
              Since its inception, Ramkaran Heeralal &amp; Sons (RHSPL), a flagship company under the <span className="text-[#775a17] font-semibold">Aashi Grains</span> umbrella, has been at the forefront of the pulses industry. We combine traditional Rajasthani sourcing wisdom with futuristic manufacturing technology.
            </p>

            <p className="text-[#46464e] text-base sm:text-lg leading-relaxed">
              Our commitment goes beyond processing; we ensure that every kilogram of Besan and Dal leaving our facility meets international quality benchmarks. With a fully automated plant, we eliminate human error and maintain unmatched hygiene standards in the bulk supply sector.
            </p>

            {/* 2 Feature Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="font-heading text-xl font-medium text-[#04062a] mb-1">
                  Quality First
                </h4>
                <p className="text-sm text-[#46464e] leading-snug">
                  Multi-stage testing from farm to finished product.
                </p>
              </div>

              <div>
                <h4 className="font-heading text-xl font-medium text-[#04062a] mb-1">
                  Innovation
                </h4>
                <p className="text-sm text-[#46464e] leading-snug">
                  Cool-grinding tech to preserve nutrition and aroma.
                </p>
              </div>
            </div>

            {/* ZED Gold Certified Banner Box */}
            <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#f6f2f6] border border-stone-200/60 flex items-center gap-4">
              {/* ZED Gold Seal Official Image Icon */}
              <div className="relative w-14 h-14 shrink-0">
                <Image 
                  src="/images/zed_gold_certified_official.webp"
                  alt="MSME ZED Gold Certified Seal"
                  fill
                  loading="lazy"
                  sizes="56px"
                  className="object-contain"
                />
              </div>

              <div>
                <h5 className="font-heading text-base sm:text-lg font-medium text-[#04062a]">
                  ZED Gold Certified
                </h5>
                <p className="text-xs sm:text-sm text-[#46464e] mt-0.5">
                  Awarded for Zero Defect, Zero Effect manufacturing excellence.
                </p>
              </div>
            </div>

          </div>
        </div>
    </SectionWrapper>
  );
}
