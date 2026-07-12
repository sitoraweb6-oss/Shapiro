'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

const AREAS = [
  {
    title: 'Mass Tort',
    description: 'Representing thousands against negligent corporations in complex, consolidated litigation.',
    image: 'https://picsum.photos/seed/legal1/800/600',
    href: '#'
  },
  {
    title: 'Medical Devices',
    description: 'Seeking justice for patients harmed by defective implants and surgical equipment.',
    image: 'https://picsum.photos/seed/legal2/800/600',
    href: '#'
  },
  {
    title: 'Product Liability',
    description: 'Holding manufacturers accountable for releasing dangerous products to the public.',
    image: 'https://picsum.photos/seed/legal3/800/600',
    href: '#'
  },
  {
    title: 'Environmental',
    description: 'Advocating for communities affected by toxic exposure, contaminated water, and chemical spills.',
    image: 'https://picsum.photos/seed/legal4/800/600',
    href: '#'
  },
  {
    title: 'Drug Injury',
    description: 'Litigating against pharmaceutical companies for severe, undisclosed medication side effects.',
    image: 'https://picsum.photos/seed/legal5/800/600',
    href: '#'
  },
  {
    title: 'Consumer Protection',
    description: 'Protecting the public from widespread fraudulent practices and data breaches.',
    image: 'https://picsum.photos/seed/legal6/800/600',
    href: '#'
  }
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-label text-accent mb-4 block">Litigation Areas</span>
            <h2 className="font-display text-display-l text-primary max-w-2xl">
              Specialized Advocacy for Complex Cases
            </h2>
          </div>
          <Link 
            href="#contact"
            className="text-body-m font-medium text-secondary hover:text-primary transition-colors flex items-center gap-2 group whitespace-nowrap"
          >
            Review My Case
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AREAS.map((area) => (
            <Link 
              key={area.title} 
              href={area.href}
              className="group block relative h-[400px] rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={area.image} 
                  alt={area.title}
                  fill
                  className="object-cover saturate-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-[6000ms] ease-out"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90" />
              
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <h3 className="font-display text-display-m text-white mb-3">{area.title}</h3>
                <p className="text-body-s text-white/80 mb-6">{area.description}</p>
                
                <div className="mt-auto self-end w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
