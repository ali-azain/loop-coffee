
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-[5vw] md:px-[15vw] py-12 md:py-24 bg-white border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4">
        <span className="font-inter font-black text-2xl tracking-tighter uppercase">Loop</span>
        <div className="w-[1px] h-6 bg-black/20" />
        <span className="font-mono text-[10px] tracking-widest text-black/40">© 2026 OFFICIAL WEBSITE</span>
      </div>

      <div className="flex gap-8 md:gap-12">
        <a href="https://instagram.com" className="font-mono text-xs tracking-widest hover:text-[#FF0000] transition-colors">INSTAGRAM</a>
        <a href="https://twitter.com" className="font-mono text-xs tracking-widest hover:text-[#FF0000] transition-colors">TWITTER</a>
        <a href="https://youtube.com" className="font-mono text-xs tracking-widest hover:text-[#FF0000] transition-colors">YOUTUBE</a>
      </div>

      <div className="text-right hidden md:block">
        <p className="font-mono text-[10px] tracking-widest text-black/40">EST. KARACHI, PAKISTAN</p>
      </div>
    </footer>
  );
};

export default Footer;
