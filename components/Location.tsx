
import React from 'react';
import Section from './Section';

const Location: React.FC = () => {
  return (
    <Section id="location" className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-inter font-black text-6xl md:text-8xl tracking-tighter mb-16 md:mb-24 text-right">
          FIND US
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Block */}
          <div className="lg:col-span-4 flex flex-col gap-12 order-2 lg:order-1">
            <div className="space-y-2">
              <h3 className="font-mono text-xs tracking-widest text-[#FF0000] uppercase">Address</h3>
              <p className="font-inter font-bold text-xl md:text-2xl tracking-tight">
                Ground Floor, 3C, 10 Zulfiqar St 1,<br />
                DHA Phase 8, Karachi
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-mono text-xs tracking-widest text-[#FF0000] uppercase">Operating Hours</h3>
              <p className="font-inter font-bold text-xl md:text-2xl tracking-tight">
                Mon - Sun <br />
                08:00 - 23:00
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-mono text-xs tracking-widest text-[#FF0000] uppercase">Contact</h3>
              <p className="font-inter font-bold text-xl md:text-2xl tracking-tight">
                +92 307 1115667
              </p>
            </div>

            <div className="pt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Loop+Coffee+Co.+Phase+8+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-black flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:bg-[#FF0000] duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <span className="font-mono text-sm tracking-widest border-b border-black">GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Map Block */}
          <div className="lg:col-span-8 order-1 lg:order-2 h-[400px] md:h-[600px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3879207062456!2d67.073427!3d24.782046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d262d5f5a89%3A0x7d06d4d12345678!2sDHA%20Phase%208%20Karachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full grayscale-map border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay Gradient for deeper Brutalist look */}
            <div className="absolute inset-0 pointer-events-none border-[12px] md:border-[24px] border-white" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Location;
