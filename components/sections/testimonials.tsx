'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "When the pharmaceutical company denied responsibility, Shapiro Legal Group stepped in. They didn't just take my case; they made me feel heard for the first time in years. The settlement changed my family's life.",
    author: "M. Ramirez",
    case: "Defective Medical Device Settlement",
    rating: 5,
  },
  {
    id: 2,
    quote: "Their precision and dedication are unmatched. The entire team was always available to answer my questions. They navigated a highly complex multi-district litigation with confidence and secured a phenomenal result.",
    author: "James T.",
    case: "Toxic Exposure Plaintiff",
    rating: 5,
  },
  {
    id: 3,
    quote: "I was overwhelmed and in pain. The attorneys here handled everything so I could focus on recovery. Their reputation for not backing down from trial forced a settlement far beyond our expectations.",
    author: "Sarah L.",
    case: "Product Liability Case",
    rating: 5,
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setActiveIndex((curr) => (curr === TESTIMONIALS.length - 1 ? 0 : curr + 1));
  const prev = () => setActiveIndex((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-primary overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-label text-accent mb-4 block">Client Testimonials</span>
          <h2 className="font-display text-display-l text-white max-w-2xl mx-auto">
            Advocacy that Changes Lives
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={containerRef}>
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div 
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 shadow-glass relative group transition-transform hover:scale-[1.01]"
                    // Subtle 3D tilt effect could be added here via onMouseMove, kept simple for reliability
                  >
                    <Quote className="absolute top-8 right-8 text-white/10 w-16 h-16" />
                    
                    {/* Stars Draw In (conceptual implementation using framer-motion) */}
                    <div className="flex space-x-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-5 h-5 fill-accent text-accent" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="font-display text-display-m text-white mb-10 leading-snug">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    <div>
                      <div className="font-semibold text-white text-body-l mb-1">{testimonial.author}</div>
                      <div className="text-white/60 text-body-s">{testimonial.case}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12 px-4">
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white text-xl">Google</span>
                <div className="flex text-[#FBBC04]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white text-xl flex items-center gap-1">
                  <Star className="w-5 h-5 fill-[#00B67A] text-[#00B67A]" />
                  Trustpilot
                </span>
              </div>
            </div>

            {/* Arrows */}
            <div className="hidden sm:flex items-center space-x-4">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Mobile Dots */}
          <div className="flex sm:hidden justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-accent w-6' : 'bg-white/20'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
