
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Layer */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Narrative Section */}
      <Story />

      {/* Cinematic Break (Full-width Image) */}
      <div className="px-[5vw] md:px-[15vw]">
        <img 
          src="https://picsum.photos/seed/loopcoffee2/1600/900" 
          alt="Coffee roasting process" 
          className="w-full cinematic-img grayscale"
        />
      </div>

      {/* Menu Section */}
      <Menu />

      {/* Location Section */}
      <Location />

      {/* Final Brand Imprint (Red Line) */}
      <div className="px-[5vw] md:px-[15vw] py-12">
        <div className="h-[1px] w-full bg-[#FF0000]" />
      </div>

      {/* Footer */}
      <Footer />

      {/* Global Scroll Indicator (Red Light style) */}
      <div className="fixed bottom-12 right-12 z-[100] md:hidden">
        <div className="w-3 h-3 rounded-full bg-[#FF0000] animate-pulse" />
      </div>
    </div>
  );
}

export default App;
