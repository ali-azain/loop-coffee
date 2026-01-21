
import React from 'react';
import { motion } from 'framer-motion';
import { INFINITY_SVG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen w-full flex flex-col items-center justify-center relative bg-white overflow-hidden">
      {/* Centered Infinity Logo with Entrance Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-24 md:w-32 text-black z-20"
      >
        {INFINITY_SVG}
      </motion.div>

      {/* Cinematic Red Line Animation - Drawing through the screen */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 1, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-1/2 left-0 h-[1px] bg-[#FF0000] z-10"
      />

      {/* Floating View Menu CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <a 
          href="#menu"
          className="group relative flex items-center justify-center px-12 py-4 overflow-hidden"
        >
          <span className="relative z-10 font-mono text-[10px] tracking-[0.4em] text-black group-hover:text-white transition-colors duration-500 uppercase">
            EXPLORE THE MENU
          </span>
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
          <div className="absolute inset-0 border border-black/10" />
        </a>
      </motion.div>

      {/* Bottom Technical Label */}
      <div className="absolute bottom-12 overflow-hidden">
        <motion.h1 
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="font-mono font-medium text-[9px] tracking-[0.8em] text-black/30 uppercase text-center"
        >
          DHA PHASE VI — EST 2026
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
