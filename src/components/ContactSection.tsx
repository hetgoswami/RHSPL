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
                  <svg className="w-6 h-6 shrink-0 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.59a9.775 9.775 0 00-6.932-2.872c-5.397 0-9.789 4.391-9.791 9.79 0 1.724.45 3.407 1.305 4.888L1.625 22.5l5.247-1.376a9.76 9.76 0 004.6.155h.004c5.396 0 9.788-4.392 9.79-9.791a9.73 9.73 0 00-2.863-6.9zm-6.931 15.34h-.003a8.136 8.136 0 01-4.148-1.137l-.297-.176-3.084.808.823-3.007-.193-.308a8.135 8.135 0 01-1.246-4.332c.002-4.489 3.654-8.14 8.146-8.14 2.174 0 4.218.847 5.753 2.384a8.096 8.096 0 012.38 5.755c-.002 4.49-3.654 8.142-8.14 8.142zm4.464-6.096c-.245-.123-1.451-.716-1.676-.798-.225-.082-.388-.123-.551.123-.164.246-.634.798-.778.962-.143.164-.287.185-.532.062-.245-.123-1.036-.382-1.973-1.218-.729-.65-1.222-1.452-1.365-1.698-.143-.246-.015-.379.108-.501.11-.11.245-.287.368-.43.123-.144.164-.246.245-.41.082-.164.041-.308-.02-.43-.062-.123-.552-1.332-.757-1.824-.2-.48-.403-.415-.552-.423l-.47-.008c-.164 0-.43.062-.655.308-.225.246-.86.84-.86 2.05 0 1.208.88 2.376 1.002 2.54.123.164 1.733 2.646 4.2 3.712.587.253 1.045.404 1.402.518.59.187 1.127.16 1.552.097.474-.07 1.451-.593 1.656-1.167.204-.574.204-1.066.143-1.168-.062-.102-.225-.164-.47-.287z" />
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
