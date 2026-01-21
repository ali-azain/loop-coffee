
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Story: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-center">
        {/* Left Side: Cinematic Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1501339819358-ee5f8babc4f1?q=80&w=2070&auto=format&fit=crop" 
              alt="Interior of Loop Coffee" 
              className="w-full grayscale contrast-[1.1] brightness-[1.1] transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
          <div className="absolute top-12 -left-8 md:-left-12 hidden md:block">
            <span className="font-mono text-[9px] tracking-[1em] text-black/20 vertical-text rotate-180 uppercase">
              CINEMATIC CONTEXT
            </span>
          </div>
        </motion.div>

        {/* Right Side: Narrative */}
        <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-inter font-black text-6xl md:text-8xl tracking-tighter leading-[0.9] mb-4">
              THE <span className="text-[#FF0000]">LOOP</span> <br /> MANIFESTO
            </h2>
            <div className="h-1 w-24 bg-black" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-8 font-mono text-lg leading-relaxed text-black/60 max-w-lg"
          >
            <p>
              Loop Coffee is a narrative space designed for the modern creator. 
              Bridging the gap between high-end specialty coffee culture 
              and the communal nature of a neighborhood "dhaba".
            </p>
            <p>
              We prioritize composition over decoration. Silence over visual noise. 
              Quality over everything else.
            </p>
            <p className="text-black font-bold uppercase tracking-widest text-sm">
              Premium Accessibility. 10/10 Experience.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-4"
          >
            <button className="group relative font-mono text-xs tracking-[0.4em] uppercase py-2">
              <span className="relative z-10 transition-colors group-hover:text-[#FF0000]">The Philosophy</span>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF0000] transition-all duration-500 group-hover:w-full" />
            </button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Story;
