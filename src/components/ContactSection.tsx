'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="contact" bgVariant="white" ariaLabel="Contact Section">
      <div ref={revealRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Let's Discuss Your Bulk Requirements */}
        <div className="lg:col-span-6 space-y-6">
          <SectionHeader 
            title={<>Let's Discuss Your Bulk<br />Requirements</>}
            description="Connect with our sales team directly for bulk pricing, custom specifications, and logistics support."
            align="left"
          />

            {/* WhatsApp CTA Button */}
            <div className="pt-2">
              <Button
                href="https://wa.me/919001208781?text=Hello%20RHSPL%20Team%2C%0A%0AI%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20Besan%20and%20Chana%20products.%0A%0APlease%20share%20your%20product%20catalogue%20and%20pricing.%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                ariaLabel="Connect with RHSPL on WhatsApp"
                icon={
                  <svg className="w-6 h-6 text-[#25D366] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.147 4.192 4.29-1.125z"/>
                  </svg>
                }
              >
                LET'S CONNECT
              </Button>
            </div>

            {/* Industrial Inquiry Notice Box */}
            <div className="bg-[#f6f2f6] rounded-2xl p-6 border border-stone-200/70 max-w-md mt-8">
              <p className="text-sm sm:text-base text-[#46464e] leading-relaxed font-normal">
                "Our team typically responds to industrial inquiries within 2 business hours."
              </p>
            </div>
          </div>

          {/* Right Column: Headquarters & Plant Card Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#f6f2f6] border border-stone-200/80 rounded-3xl p-8 shadow-sm">
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#04062a] mb-6">
                Headquarters &amp; Plant
              </h3>

              {/* Details List */}
              <address className="space-y-5 not-italic">
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#04062a] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-[#04062a]">Factory Address</h4>
                    <p className="text-sm text-[#46464e] mt-0.5">
                      Araji No.- 368 Mi., Industrial Area Mandaldeh, Chittorgarh, 312201
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#04062a] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-[#04062a]">Call Support</h4>
                    <a href="tel:+919001208781" className="text-sm text-[#46464e] hover:text-[#775a17] transition-colors mt-0.5 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm">
                      +91 90012 08781
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#04062a] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-[#04062a]">Business Email</h4>
                    <a href="mailto:rhsplbesan@gmail.com" className="text-sm text-[#46464e] hover:text-[#775a17] transition-colors mt-0.5 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#775a17] rounded-sm">
                      rhsplbesan@gmail.com
                    </a>
                  </div>
                </div>
              </address>

              {/* Satellite Plant Map Image */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mt-6 border border-stone-200/80 shadow-sm">
                <Image 
                  src="/images/contact_us_map.webp"
                  alt="RHSPL Factory Location Map View"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
    </SectionWrapper>
  );
}
