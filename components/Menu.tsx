
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { MENU_DATA } from '../constants';

const Menu: React.FC = () => {
  return (
    <Section id="menu" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32 md:mb-48"
        >
          <h2 className="font-inter font-black text-7xl md:text-9xl tracking-tighter leading-none mb-4">
            MENU
          </h2>
          <div className="w-24 h-[1px] bg-[#FF0000]" />
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {MENU_DATA.map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.8 }}
              className="group"
            >
              <h3 className="font-mono text-[10px] tracking-[0.5em] text-[#FF0000] mb-12 uppercase flex items-center gap-4">
                <span>{category.title}</span>
                <span className="flex-1 h-[1px] bg-black/5" />
              </h3>
              
              <div className="flex flex-col gap-8 md:gap-12">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={item.name} 
                    className="flex flex-col group/item cursor-default"
                  >
                    <div className="flex justify-between items-baseline">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-black/20 group-hover/item:text-[#FF0000] transition-colors">
                          {(itemIdx + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="font-inter font-bold text-2xl md:text-3xl tracking-tight">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-mono text-sm font-medium tracking-tight">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-48 py-12 border-t border-black/5">
          <p className="font-mono text-[9px] text-black/30 text-center uppercase tracking-[0.4em] leading-relaxed">
            Specialty grade beans. <br />
            Handcrafted in small batches. <br />
            Loop Coffee Official Archive.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Menu;
