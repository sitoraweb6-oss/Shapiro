'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const MILESTONES = [
  {
    year: '2004',
    title: 'Firm Founded',
    description: 'Established with a core mission to level the playing field for injured individuals against powerful corporations.',
  },
  {
    year: '2012',
    title: 'National Expansion',
    description: 'Expanded our footprint to represent clients in all 50 states for complex medical device litigation.',
  },
  {
    year: '2018',
    title: 'Mass Tort Practice Established',
    description: 'Secured landmark settlements in major defective drug cases, solidifying our reputation in complex litigation.',
  },
  {
    year: '2026',
    title: '60,000+ Clients Represented',
    description: 'A legacy of relentless advocacy, continuing to secure life-changing compensation for those wronged by negligence.',
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="about" className="py-24 lg:py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="text-label text-accent mb-4 block">Our Trajectory</span>
          <h2 className="font-display text-display-l text-primary">A Legacy of Precision</h2>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Vertical Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-accent -translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-16 lg:space-y-24">
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={milestone.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-border -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-accent"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    />
                  </div>

                  {/* Content Area */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24 text-left md:text-right'}`}>
                    <div className="font-mono text-display-m text-primary/20 mb-2">{milestone.year}</div>
                    <h3 className="font-display text-display-m text-primary mb-3">{milestone.title}</h3>
                    <p className="text-body-m text-muted">{milestone.description}</p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
