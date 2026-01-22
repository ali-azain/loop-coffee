import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { MENU_DATA } from '../constants';

const Menu: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<typeof MENU_DATA[0]['items'][0] | null>(null);

  // Use a ref for the preview container to track mouse position if we wanted a floating cursor, 
  // but for now we'll do a fixed position preview.

  return (
    <Section id="menu" className="bg-white relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

        {/* Left/Top Content: Menu List */}
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-24 md:mb-32"
          >
            <h2 className="font-inter font-black text-5xl md:text-8xl tracking-tighter leading-none mb-4">
              MENU
            </h2>
            <div className="w-24 h-[1px] bg-[#FF0000]" />
          </motion.div>

          {/* Categories */}
          <div className="space-y-24 md:space-y-32">
            {MENU_DATA.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1, duration: 0.8 }}
                className="group pl-2"
              >
                <h3 className="font-mono text-[10px] tracking-[0.5em] text-[#FF0000] mb-8 md:mb-12 uppercase flex items-center gap-4">
                  <span>{category.title}</span>
                  <span className="flex-1 h-[1px] bg-black/5" />
                </h3>

                <div className="flex flex-col gap-6 md:gap-8">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={item.name}
                      className="flex flex-col group/item cursor-pointer relative"
                      onMouseEnter={() => setActiveItem(item)}
                      onMouseLeave={() => setActiveItem(null)}
                      onClick={() => setActiveItem(activeItem?.name === item.name ? null : item)} // Toggle for mobile
                    >
                      {/* Interactive Item Row */}
                      <div className="flex justify-between items-baseline py-2 transition-opacity duration-300 md:group-hover:opacity-20 md:group-hover/item:opacity-100">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[10px] text-black/20 group-hover/item:text-[#FF0000] transition-colors min-w-[1.5rem]">
                            {(itemIdx + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="font-inter font-bold text-lg md:text-3xl tracking-tight leading-none group-hover/item:translate-x-2 transition-transform duration-300">
                            {item.name}
                          </span>
                        </div>
                        <span className="font-mono text-xs md:text-sm font-medium tracking-tight whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>

                      {/* Mobile Description (Accordion style) */}
                      {activeItem?.name === item.name && (
                        <motion.div
                          className="lg:hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <p className="font-mono text-xs text-black/60 pt-2 pb-4 pl-10 max-w-sm">
                            {item.description}
                          </p>
                          {item.image && (
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 pl-10 grayscale" />
                          )}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content: Sticky Preview (Desktop Only) */}
        <div className="hidden lg:block w-2/5 relative">
          <div className="sticky top-32 h-[calc(100vh-8rem)] flex items-center justify-center">
            <motion.div
              className="relative w-full aspect-[3/4] bg-[#F5F5F5] overflow-hidden flex items-center justify-center border border-black/5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: activeItem ? 1 : 0.95 }}
              transition={{ duration: 0.5 }}
            >
              {activeItem ? (
                <>
                  {activeItem.image ? (
                    <motion.img
                      key={activeItem.image}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7 }}
                      src={activeItem.image}
                      alt={activeItem.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                    />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/5"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />

                  <motion.div
                    key={activeItem.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="absolute bottom-12 left-12 right-12"
                  >
                    <h4 className="font-mono text-xs text-[#FF0000] tracking-widest uppercase mb-4">Tasting Notes</h4>
                    <p className="font-inter font-medium text-2xl leading-tight">
                      {activeItem.description}
                    </p>
                  </motion.div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 opacity-20">
                  <span className="font-mono text-xs tracking-widest uppercase">Select an item</span>
                  <div className="w-1 h-12 bg-black" />
                </div>
              )}
            </motion.div>
          </div>
        </div>

      </div>

      <div className="mt-48 py-12 border-t border-black/5">
        <p className="font-mono text-[9px] text-black/30 text-center uppercase tracking-[0.4em] leading-relaxed">
          Specialty grade beans. <br />
          Handcrafted in small batches. <br />
          Loop Coffee Official Archive.
        </p>
      </div>
    </Section>
  );
};

export default Menu;
