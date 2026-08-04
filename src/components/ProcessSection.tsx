'use client';

import React, { Fragment } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { ProcessStepItem } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Raw Material',
    description: 'Selective Sourcing'
  },
  {
    step: '02',
    title: 'Quality Check',
    description: 'Lab Analysis'
  },
  {
    step: '03',
    title: 'Cleaning',
    description: 'Automatic Modern Facility'
  },
  {
    step: '04',
    title: 'Processing',
    description: 'Splitting & Sorting'
  },
  {
    step: '05',
    title: 'Packaging',
    description: 'Bulk Baling'
  }
];

export default function ProcessSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="process" bgVariant="navy" ariaLabel="Manufacturing Process Section">
      {/* Header */}
      <SectionHeader 
        title="Streamlined Manufacturing Process"
        align="center"
        darkTheme
        className="mb-16"
      />

        {/* 5-Step Process Horizontal Timeline */}
        <div ref={revealRef} className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-3 max-w-6xl mx-auto">
          {PROCESS_STEPS.map((item, index) => (
            <Fragment key={item.step}>
              {/* Step Item */}
              <div className="flex flex-col items-center text-center group w-full md:w-auto">
                {/* Yellow Circle Number */}
                <div className="w-16 h-16 rounded-full bg-[#fdd586] flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                  <span className="text-lg font-bold text-[#785a18]">
                    {item.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-heading text-lg sm:text-xl font-medium text-white mb-1">
                  {item.title}
                </h3>

                {/* Step Subtitle */}
                <p className="text-xs sm:text-[14px] font-normal text-[#eae7eb] max-w-[150px]">
                  {item.description}
                </p>
              </div>

              {/* Right Arrow Connector between steps */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:flex items-center justify-center shrink-0 mb-8">
                  <ArrowRight className="w-5 h-5 text-[#fdd586]" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

    </SectionWrapper>
  );
}
