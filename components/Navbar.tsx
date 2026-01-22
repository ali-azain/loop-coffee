
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'MENU', href: '#menu' },
    { label: 'LOCATION', href: '#location' },
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
        <div className="fixed top-12 left-12 z-50 overflow-hidden">
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            href="#about"
            onClick={(e) => handleScroll(e, '#about')}
            className="block font-mono text-[10px] tracking-[0.3em] hover:text-[#FF0000] transition-colors duration-300"
          >
            ABOUT
          </motion.a>
        </div>
        <div className="fixed top-12 right-12 z-50 overflow-hidden">
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            href="#menu"
            onClick={(e) => handleScroll(e, '#menu')}
            className="block font-mono text-[10px] tracking-[0.3em] hover:text-[#FF0000] transition-colors duration-300 text-right"
          >
            MENU
          </motion.a>
        </div>
        <div className="fixed bottom-12 left-12 z-50 overflow-hidden">
          <motion.a
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            href="#location"
            onClick={(e) => handleScroll(e, '#location')}
            className="block font-mono text-[10px] tracking-[0.3em] hover:text-[#FF0000] transition-colors duration-300"
          >
            LOCATION
          </motion.a>
        </div>
        {/* Bottom Right intentionally left empty for balance/asymmetry as per cinematic minimalism */}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-8 right-8 z-[60]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-2 w-8 focus:outline-none"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="h-[1px] w-full bg-black"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="h-[1px] w-full bg-black"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center gap-12"
          >
            {/* Mobile Branding */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-8 left-8"
            >
              <img src="/logo.png" alt="Loop" className="h-6 w-auto mix-blend-multiply opacity-50" />
            </motion.div>

            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="font-inter font-black text-6xl tracking-tighter text-[#1a1a1a] active:text-[#FF0000] focus:text-[#FF0000] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 font-mono text-[10px] tracking-widest text-[#FF0000] uppercase"
            >
              Premium Accessibility
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
