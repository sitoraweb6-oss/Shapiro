'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      // Hide when near the bottom (approx 1000px from bottom)
      const scrolled = window.scrollY;
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000;
      
      setIsVisible(scrolled > 600 && !nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="desktop-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 hidden md:flex"
        >
          <div className="bg-surface shadow-glass rounded-full p-2 flex items-center border border-border">
            <a 
              href="tel:8665270306"
              className="flex items-center space-x-2 px-6 py-3 rounded-full hover:bg-bg transition-colors"
            >
              <Phone size={18} className="text-primary" />
              <span className="font-mono text-primary font-medium">(866) 527-0306</span>
            </a>
            <div className="w-px h-8 bg-border mx-2" />
            <Link
              href="#contact"
              className="bg-accent text-white px-8 py-3 rounded-full text-body-s font-semibold hover:bg-accent/90 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>
      )}

      {/* Mobile Sticky Bar */}
      {isVisible && (
        <motion.div
          key="mobile-cta"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface border-t border-border p-4 shadow-glass flex gap-4"
        >
          <a 
            href="tel:8665270306"
            className="flex-1 flex items-center justify-center space-x-2 border border-primary text-primary py-3 rounded-sm font-medium"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <Link
            href="#contact"
            className="flex-1 bg-accent text-white py-3 rounded-sm font-semibold text-center"
          >
            Book Free Review
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
