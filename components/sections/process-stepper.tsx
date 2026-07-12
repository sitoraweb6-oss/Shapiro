'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FileSearch, Stethoscope, Scale, Gavel, HandCoins } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const STEPS = [
  {
    id: 1,
    title: 'Free Review',
    description: 'A confidential, no-obligation conversation to understand your situation.',
    icon: FileSearch
  },
  {
    id: 2,
    title: 'Case Evaluation',
    description: 'Our medical and legal experts review your records to build a strong foundation.',
    icon: Stethoscope
  },
  {
    id: 3,
    title: 'Evidence Gathering',
    description: 'We collect testimonies, documents, and expert opinions to support your claim.',
    icon: Scale
  },
  {
    id: 4,
    title: 'Litigation',
    description: 'Filing your case in the appropriate venue and fighting relentlessly on your behalf.',
    icon: Gavel
  },
  {
    id: 5,
    title: 'Compensation',
    description: 'Securing the settlement or verdict you deserve for your injuries and losses.',
    icon: HandCoins
  }
];

export function ProcessStepper() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 lg:py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-label text-accent mb-4 block">The Path to Justice</span>
          <h2 className="font-display text-display-l text-primary max-w-2xl mx-auto">
            Our Proven Process
          </h2>
        </div>

        {/* Desktop Horizontal Stepper */}
        <div className="hidden lg:block relative" ref={containerRef}>
          {/* Background Line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-border" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute top-12 left-0 right-0 h-[2px] bg-accent origin-left"
            style={{ scaleX }}
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col relative group">
                  <div className="flex items-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-surface border border-border shadow-sm flex flex-col items-center justify-center transition-colors group-hover:border-secondary/30 relative">
                      {/* Read progress to highlight active step (conceptual approach) */}
                      <span className="font-mono text-label text-muted mb-1 absolute top-3">0{step.id}</span>
                      <Icon size={24} className="text-primary mt-4" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-display text-[22px] text-primary mb-2 pr-4">{step.title}</h3>
                  
                  {/* Hover Tooltip (Conceptual) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-4">
                    <p className="text-body-s text-muted">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Accordion */}
        <div className="lg:hidden">
          <Accordion.Root type="single" defaultValue="step-1" collapsible className="space-y-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <Accordion.Item 
                  key={step.id} 
                  value={`step-${step.id}`}
                  className="bg-surface border border-border rounded-lg overflow-hidden data-[state=open]:border-secondary/30 transition-colors"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-bg flex items-center justify-center text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="font-mono text-label text-muted block mb-1">0{step.id}</span>
                          <h3 className="font-display text-[20px] text-primary">{step.title}</h3>
                        </div>
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="p-6 pt-0 pl-[88px] text-body-m text-muted">
                      {step.description}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              );
            })}
          </Accordion.Root>
        </div>

      </div>
    </section>
  );
}
