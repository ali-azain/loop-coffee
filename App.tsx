
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';

import IntroOverlay from './components/IntroOverlay';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white selection:bg-[#FF0000] selection:text-white">
      <IntroOverlay />

      {/* Cinematic Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#FF0000] z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />

        <Story />

        {/* Cinematic Break Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="px-[5vw] md:px-[15vw] mb-[200px]"
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
              alt="Cinematic coffee scene"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90 transition-transform duration-[20s] hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          </div>
        </motion.div>

        <Menu />

        <Location />

        {/* Bottom Red Line Anchor */}
        <div className="px-[5vw] md:px-[15vw] py-24">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="h-[1px] bg-[#FF0000]"
          />
        </div>
      </main>

      <Footer />

      {/* Global Scroll Indicator (Pulse Dot) */}
      <div className="fixed bottom-12 right-12 z-[100] pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-[#FF0000]"
        />
      </div>
    </div>
  );
}

export default App;
