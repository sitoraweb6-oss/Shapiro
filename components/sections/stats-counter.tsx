'use client';

import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '@/hooks/use-count-up';

interface StatProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  trigger: boolean;
}

function StatItem({ end, prefix = '', suffix = '', label, trigger }: StatProps) {
  const count = useCountUp(end, 1600, trigger);
  
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-3xl font-mono font-bold text-primary mb-1 flex items-baseline justify-center">
        {prefix && <span>{prefix}</span>}
        <span>{trigger ? count.toLocaleString() : '0'}</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="text-[10px] uppercase tracking-widest font-bold text-muted whitespace-pre-line">{label}</div>
    </div>
  );
}

export function StatsCounter() {
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
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-white border-y border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 divide-x-0 lg:divide-x divide-border">
          
          <div className="px-0 lg:px-8 first:pl-0 last:pr-0">
            <StatItem end={20} suffix="+" label={"Years\nExperience"} trigger={isVisible} />
          </div>
          
          <div className="px-0 lg:px-8 first:pl-0 last:pr-0">
            <StatItem end={60000} suffix="+" label={"Clients\nRepresented"} trigger={isVisible} />
          </div>
          
          <div className="px-0 lg:px-8 first:pl-0 last:pr-0">
            <StatItem end={2500} suffix="+" label={"5-Star\nReviews"} trigger={isVisible} />
          </div>
          
          <div className="px-0 lg:px-8 first:pl-0 last:pr-0">
            <StatItem end={300} prefix="$" suffix="M+" label={"Total\nRecovered"} trigger={isVisible} />
          </div>

        </div>
      </div>
    </section>
  );
}
