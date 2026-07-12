'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Litigation Areas', href: '#practice-areas' },
  { name: 'Co-Counsel', href: '#co-counsel' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-border py-4'
            : 'bg-white/50 backdrop-blur-sm border-b border-border py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-4">
              <span className="font-display text-2xl font-bold tracking-tight text-primary leading-none uppercase">
                Shapiro Legal Group
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-muted border-l border-border pl-4 hidden sm:block">
                Justice Nationwide
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[13px] font-medium text-muted uppercase tracking-wider hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  {/* Note: Scrollspy underline logic would go here, omitting for brevity */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="tel:8665270306" className="font-mono text-sm font-semibold text-primary hover:text-accent transition-colors">
                (866) 527-0306
              </a>
              <Link
                href="#contact"
                className="bg-accent text-white px-6 py-2.5 rounded text-[12px] font-bold uppercase tracking-widest hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all"
              >
                Book Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg flex flex-col"
          >
            <div className="flex items-center justify-between p-4 sm:px-6 border-b border-border">
              <span className="font-display text-2xl font-semibold text-primary">
                Shapiro Legal Group
              </span>
              <button
                className="p-2 text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-display-m text-primary hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-8 flex flex-col items-center space-y-6 bg-surface"
            >
              <a href="tel:8665270306" className="font-mono text-primary text-2xl">
                (866) 527-0306
              </a>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-accent text-white px-8 py-4 rounded-sm text-body-m font-semibold w-full text-center"
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
