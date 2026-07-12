'use client';

import { motion } from 'framer-motion';
import { ConsultationForm } from '@/components/shared/consultation-form';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-32 pb-16 lg:pt-0 lg:pb-0 flex items-center overflow-hidden bg-bg">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(10, 27, 79, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 27, 79, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

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
              <span className="text-accent font-bold text-[11px] uppercase tracking-[0.2em]">
                20+ Years &middot; 60,000+ Clients Represented
              </span>
            </motion.div>
            
            <h1 className="text-[56px] lg:text-[72px] leading-[0.95] font-display font-light mb-8 text-primary tracking-tight max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Justice.<br/>Built on Experience.<br/><span className="italic font-normal">Won Through Precision.</span>
              </motion.div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted leading-relaxed max-w-xl mb-10"
            >
              We level the playing field against powerful corporations. If you&apos;ve been injured by a defective medical device, dangerous drug, or toxic exposure, our national litigation team is ready to fight for your recovery.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a 
                href="#contact"
                className="px-8 py-4 bg-primary text-white text-[13px] font-bold uppercase tracking-widest rounded-sm hover:-translate-y-0.5 transition-transform shadow-xl shadow-primary/10 w-full sm:w-auto text-center"
              >
                Start Your Free Case Review
              </a>
              <a 
                href="#practice-areas"
                className="group flex items-center justify-center gap-3 text-[13px] font-bold uppercase tracking-widest text-primary w-full sm:w-auto py-4 sm:py-0"
              >
                <span className="w-8 h-px bg-primary group-hover:w-12 transition-all"></span>
                View Practice Areas
              </a>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="col-span-1 lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:-rotate-1"
            >
              <ConsultationForm variant="hero" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
