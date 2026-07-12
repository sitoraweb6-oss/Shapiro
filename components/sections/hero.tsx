'use client';

import { motion } from 'framer-motion';
import { ConsultationForm } from '@/components/shared/consultation-form';
import { useEffect, useRef, useState } from 'react';

function MagneticButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-32 pb-16 lg:pt-0 lg:pb-0 flex items-center overflow-hidden bg-bg">
      {/* Background Layers */}
      
      {/* 1. Subtle Animated Grain */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }} 
      />

      {/* 2. Legal Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(10, 27, 79, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 27, 79, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* 3. Floating Blob */}
      <motion.div 
        animate={{ 
          x: [0, 40, -20, 0], 
          y: [0, -30, 20, 0] 
        }} 
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-[10%] right-[30%] w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(18,58,155,0.15) 0%, transparent 70%)' }}
      />

      {/* 4. Scales of Justice SVG Outline (Animated Draw) */}
      <div className="absolute top-1/2 left-[40%] -translate-y-1/2 -translate-x-1/2 z-0 opacity-[0.04] pointer-events-none w-[800px] h-[800px]">
        <motion.svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="var(--color-primary)" 
          strokeWidth="0.2" 
          className="w-full h-full"
          initial={{ strokeDashoffset: 100, strokeDasharray: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
        >
          <path d="M12 3v18" />
          <path d="M3 8h18" />
          <path d="M5 8v6a3 3 0 0 0 6 0V8" />
          <path d="M13 8v6a3 3 0 0 0 6 0V8" />
          <path d="M9 3h6" />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="col-span-1 lg:col-span-7 pr-0 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-accent font-bold text-[11px] uppercase tracking-[0.2em] relative before:content-[''] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-px before:bg-accent pl-2">
                20+ Years &middot; 60,000+ Clients Represented
              </span>
            </motion.div>
            
            <h1 className="text-[56px] lg:text-[72px] leading-[0.95] font-display font-light mb-8 text-primary tracking-tight max-w-[500px]">
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
                  Justice.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
                  Built on Experience.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} className="italic font-normal">
                  Won Through Precision.
                </motion.div>
              </div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted leading-relaxed max-w-[460px] mb-10"
            >
              We level the playing field against powerful corporations. If you&apos;ve been injured by a defective medical device, dangerous drug, or toxic exposure, our national litigation team is ready to fight for your recovery.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <MagneticButton>
                <a 
                  href="#contact"
                  className="group relative overflow-hidden flex items-center justify-center px-8 py-4 bg-accent text-white text-[13px] font-bold uppercase tracking-widest rounded shadow-xl shadow-accent/20 w-full sm:w-auto text-center"
                >
                  <span className="relative z-10">Start Your Free Case Review</span>
                  <span className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </a>
              </MagneticButton>
              <a 
                href="#practice-areas"
                className="group flex items-center justify-center gap-3 text-[13px] font-bold uppercase tracking-widest text-primary w-full sm:w-auto py-4 sm:py-0 hover:text-accent transition-colors"
              >
                <span className="w-8 h-px bg-primary group-hover:w-12 group-hover:bg-accent transition-all duration-300"></span>
                View Practice Areas
              </a>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="col-span-1 lg:col-span-5 relative mt-12 lg:mt-0 perspective-1000">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: 5, rotateX: 2 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0],
                rotateY: 0,
                rotateX: 0
              }}
              transition={{ 
                opacity: { duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
                rotateY: { duration: 1, delay: 0.4, ease: "easeOut" },
                rotateX: { duration: 1, delay: 0.4, ease: "easeOut" }
              }}
              className="lg:-rotate-1 relative z-10"
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/60 shadow-[0_24px_60px_-12px_rgba(10,27,79,0.25)] pointer-events-none" />
              <div className="relative z-10">
                <ConsultationForm variant="hero" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
