
import React from 'react';
import Section from './Section';

const Story: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        {/* Left Side: Cinematic Visual */}
        <div className="w-full md:w-[40%] relative">
          <img 
            src="https://picsum.photos/seed/loopcoffee/600/900" 
            alt="Interior of Loop Coffee" 
            className="w-full grayscale contrast-125 rounded-none shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 md:-right-12 bg-black text-white p-6 font-mono text-[10px] tracking-widest uppercase">
            Frame 01: The Space
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className="w-full md:w-[60%] flex flex-col gap-8 md:gap-16 pt-8 md:pt-24">
          <h2 className="font-inter font-black text-5xl md:text-7xl tracking-tighter leading-tight">
            NOT JUST A <br /> 
            <span className="text-[#FF0000]">COFFEE</span> SHOP.
          </h2>
          
          <div className="space-y-8 font-mono text-lg md:text-xl leading-relaxed text-black/80 max-w-2xl">
            <p>
              Founded by Irfan Junejo, Loop Coffee is a bridge between cinematography and community. 
              We didn't want to build another cafe. We wanted to build a loop.
            </p>
            <p>
              A space where creativity starts, ends, and begins again. 
              Minimalism as a standard. Quality as a ritual.
            </p>
            <p className="text-black font-bold">
              Premium accessibility for the daily creator.
            </p>
          </div>

          <div className="pt-8">
            <button className="px-12 py-4 bg-black text-white font-mono text-sm tracking-widest hover:bg-[#FF0000] transition-colors duration-500">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Story;
