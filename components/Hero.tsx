
import React, { useEffect, useState } from 'react';
import { INFINITY_SVG } from '../constants';

const Hero: React.FC = () => {
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineWidth(100);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="h-screen w-full flex flex-col items-center justify-center relative bg-white overflow-hidden">
      {/* Centered Infinity Logo */}
      <div className="w-32 md:w-48 text-black transition-transform duration-700 hover:scale-105">
        {INFINITY_SVG}
      </div>

      {/* Animated Red Line */}
      <div 
        className="absolute top-1/2 left-0 h-[1px] bg-[#FF0000] z-10 transition-all duration-1000 ease-out"
        style={{ width: `${lineWidth}%`, opacity: lineWidth > 0 ? 1 : 0 }}
      />

      {/* View Menu CTA */}
      <div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <a 
          href="#menu"
          className="px-8 py-3 border border-black font-mono text-sm tracking-[0.2em] hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300 uppercase"
        >
          View Menu
        </a>
        <div className="w-[1px] h-12 bg-black opacity-20" />
      </div>

      {/* Brand Name Text (Subtle) */}
      <div className="absolute bottom-12 text-center">
        <h1 className="font-inter font-black text-xs md:text-sm tracking-[0.5em] text-black uppercase opacity-20">
          Cinematic Minimalism
        </h1>
      </div>
    </section>
  );
};

export default Hero;
