'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Practice Areas', href: '#practice-areas', id: 'practice-areas' },
  { name: 'Co-Counsel', href: '#co-counsel', id: 'co-counsel' },
  { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

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

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Scrollspy logic
      const sections = NAV_ITEMS.map((item) => item.id);
      let currentActive = 'home';
      for (const section of sections) {
        if (section === 'home') continue;
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentActive = section;
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        currentActive = 'home';
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-[24px] border-b border-border/50 py-4 shadow-[0_4px_32px_-12px_rgba(10,27,79,0.05)]'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-4 group">
              <span className="font-display text-2xl font-bold tracking-tight text-primary leading-none uppercase group-hover:opacity-80 transition-opacity">
                Shapiro Legal Group
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-muted border-l border-border pl-4 hidden sm:block">
                Justice Nationwide
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-[12px] font-bold uppercase tracking-[0.15em] transition-colors relative group py-2 ${isActive ? 'text-primary' : 'text-muted hover:text-primary'}`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="tel:8665270306" className="font-mono text-sm font-semibold text-primary hover:text-accent transition-colors">
                (866) 527-0306
              </a>
              <MagneticButton>
                <Link
                  href="#contact"
                  className="group relative overflow-hidden bg-accent text-white px-6 py-3 rounded text-[11px] font-bold uppercase tracking-[0.15em] shadow-[0_8px_24px_-8px_rgba(255,77,45,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(255,77,45,0.5)] transition-all flex items-center justify-center"
                >
                  <span className="relative z-10">Book Free Consultation</span>
                  <span className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </Link>
              </MagneticButton>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-3xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 sm:px-6 border-b border-border/50">
              <span className="font-display text-2xl font-semibold text-primary uppercase">
                Shapiro Legal Group
              </span>
              <button
                className="p-2 text-primary hover:bg-black/5 rounded-full transition-colors"
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
                  transition={{ delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-4xl text-primary hover:text-accent transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute top-1/2 -left-8 w-4 h-px bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-8 flex flex-col items-center space-y-6 bg-white border-t border-border/50"
            >
              <a href="tel:8665270306" className="font-mono text-primary text-2xl hover:text-accent transition-colors">
                (866) 527-0306
              </a>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative overflow-hidden bg-accent text-white px-8 py-4 rounded-sm text-[13px] font-bold uppercase tracking-widest w-full text-center shadow-[0_8px_24px_-8px_rgba(255,77,45,0.4)]"
              >
                <span className="relative z-10">Book Free Consultation</span>
                <span className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
