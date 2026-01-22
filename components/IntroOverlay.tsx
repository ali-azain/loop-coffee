import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroOverlayProps {
    onComplete?: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
    // We trigger the exit animation via parent state or internal timing
    // Since we use AnimatePresence in App, we just need the enter/visible animations here
    // But actually, we want the "shutter" open effect initiated automatically.

    return (
        <div className="fixed inset-0 z-[999] pointer-events-none flex flex-col">
            {/* Top Shutter - Moves Up */}
            <motion.div
                initial={{ height: "50vh" }}
                animate={{ height: "0vh" }}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
                className="w-full bg-black relative border-b border-white/10 flex items-end justify-center overflow-hidden"
            >
                {/* Half Overlay Logo (Top) */}
                <div className="w-32 md:w-48 mb-[-32px] md:mb-[-48px] z-10 translate-y-1/2">
                    {/* We use a mask or container to only show top half? 
                 Simpler: Just place the logo in center of screen (absolute) and let shutters move behind it?
                 No, shutters are on top.
                 Let's place the logo ON the shutters. 
                 If we want the logo to split, we need two half-logos.
             */}
                </div>
            </motion.div>

            {/* Bottom Shutter - Moves Down */}
            <motion.div
                initial={{ height: "50vh" }}
                animate={{ height: "0vh" }}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
                className="w-full bg-black relative border-t border-white/10 flex items-start justify-center overflow-hidden"
                onAnimationComplete={onComplete}
            >
            </motion.div>

            {/* Center White Line to emphasize split */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 z-50 origin-center"
            />
            <motion.div
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }} // Fade out line before split
                className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 z-50 origin-center"
            />

            {/* The Logo Overlay */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center z-40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.div
                    animate={{ color: "#000000" }} // Not really working on image
                    className="relative w-32 md:w-48"
                >
                    {/* White Logo for Black Background */}
                    <motion.img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        className="w-full h-auto invert"
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 2.2 }} // Fade out before split
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default IntroOverlay;
