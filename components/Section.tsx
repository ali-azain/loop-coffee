
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  noBottomPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', noBottomPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`
        px-[5vw] md:px-[15vw] 
        pt-[100px] md:pt-[200px] 
        ${noBottomPadding ? 'pb-0' : 'pb-[100px] md:pb-[200px]'}
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
