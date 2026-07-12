'use client';

import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '@/hooks/use-count-up';
import { motion } from 'framer-motion';

const RESULTS = [
  { id: 1, end: 120, prefix: '$', suffix: 'M+', label: 'Product Liability\nSettlement' },
  { id: 2, end: 45, prefix: '$', suffix: 'M', label: 'Toxic Exposure\nJury Verdict' },
  { id: 3, end: 18, prefix: '$', suffix: 'M', label: 'Defective Medical\nDevice Settlement' },
  { id: 4, end: 0, label: 'Confidential\nSettlement', isConfidential: true },
];

function ResultCard({ result, trigger }: { result: typeof RESULTS[0], trigger: boolean }) {
  const count = useCountUp(result.end, 1800, trigger);

  return (
    <div className="bg-surface border border-border p-8 rounded-xl shadow-sm hover:shadow-card hover:border-secondary/30 transition-all group flex flex-col justify-center min-h-[200px]">
      <div className="font-mono text-display-m lg:text-display-l text-primary font-medium mb-3 flex items-baseline">
        {result.isConfidential ? (
          <span className="text-display-m">Confidential</span>
        ) : (
          <>
            {result.prefix && <span>{result.prefix}</span>}
            <span>{trigger ? count.toLocaleString() : '0'}</span>
            {result.suffix && <span className="text-accent ml-1">{result.suffix}</span>}
          </>
        )}
      </div>
      <div className="text-body-m text-muted whitespace-pre-line leading-snug">{result.label}</div>
    </div>
  );
}

export function CaseResults() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-label text-accent mb-4 block">Proven Track Record</span>
            <h2 className="font-display text-display-l text-primary">
              Significant Recoveries
            </h2>
          </div>
          <p className="text-body-s text-muted max-w-sm">
            Our results speak to our commitment. We prepare every case as if it will go to trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {RESULTS.map((result, i) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ResultCard result={result} trigger={isVisible} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[12px] text-muted/80 max-w-3xl mx-auto uppercase tracking-wider">
            Disclaimer: Past results do not guarantee, warrant, or predict future case outcomes. Every case is unique and must be evaluated on its own merits.
          </p>
        </div>

      </div>
    </section>
  );
}
