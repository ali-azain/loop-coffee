
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'MENU', href: '#menu' },
    { label: 'LOCATION', href: '#location' },
    { label: 'ORDER', href: '#menu' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Corner Nav */}
      <nav className="hidden md:block">
        <div className="fixed top-12 left-12 z-50">
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, '#about')}
            className="font-mono text-sm tracking-widest hover:text-[#FF0000] transition-colors duration-300"
          >
            ABOUT
          </a>
        </div>
        <div className="fixed top-12 right-12 z-50">
          <a 
            href="#menu" 
            onClick={(e) => handleScroll(e, '#menu')}
            className="font-mono text-sm tracking-widest hover:text-[#FF0000] transition-colors duration-300"
          >
            MENU
          </a>
        </div>
        <div className="fixed bottom-12 left-12 z-50">
          <a 
            href="#location" 
            onClick={(e) => handleScroll(e, '#location')}
            className="font-mono text-sm tracking-widest hover:text-[#FF0000] transition-colors duration-300"
          >
            LOCATION
          </a>
        </div>
        <div className="fixed bottom-12 right-12 z-50">
          <a 
            href="#menu" 
            onClick={(e) => handleScroll(e, '#menu')}
            className="font-mono text-sm tracking-widest hover:text-[#FF0000] transition-colors duration-300"
          >
            ORDER
          </a>
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-6 right-6 z-[60]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-2 w-8 focus:outline-none"
        >
          <div className={`h-[2px] w-full bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <div className={`h-[2px] w-full bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`h-[2px] w-full bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-12
        transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="font-inter font-black text-4xl tracking-tighter hover:text-[#FF0000]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
