
import React from 'react';
import Section from './Section';
import { MENU_DATA } from '../constants';

const Menu: React.FC = () => {
  return (
    <Section id="menu" className="bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-inter font-black text-6xl md:text-8xl tracking-tighter mb-24 md:mb-32">
          MENU
        </h2>

        <div className="space-y-24 md:space-y-32">
          {MENU_DATA.map((category) => (
            <div key={category.title} className="group">
              <h3 className="font-mono text-sm tracking-widest text-[#FF0000] mb-8 border-b border-black/10 pb-2">
                {category.title.toUpperCase()}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {category.items.map((item) => (
                  <div 
                    key={item.name} 
                    className="flex justify-between items-end group/item cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF0000] opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                      <span className="font-inter font-bold text-lg md:text-xl tracking-tight leading-none">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex-1 border-b border-dotted border-black/20 mx-4 mb-1" />
                    <span className="font-mono text-sm text-black/60">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-black/5">
          <p className="font-mono text-xs text-black/40 text-center uppercase tracking-widest">
            All prices are inclusive of taxes. Loop Coffee DHA.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Menu;
