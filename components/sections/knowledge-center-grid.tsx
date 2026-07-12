'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Flame, Clock, Search, ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const ARTICLES = [
  {
    id: 1,
    title: 'Understanding the Camp Lejeune Justice Act',
    category: 'Toxic Exposure',
    readTime: '6 min read',
    trending: true,
    excerpt: 'Detailed analysis of the new legislation allowing veterans and families to seek compensation for water contamination.',
  },
  {
    id: 2,
    title: 'What to Do if Your Medical Implant is Recalled',
    category: 'Medical Devices',
    readTime: '4 min read',
    trending: false,
    excerpt: 'A step-by-step guide on preserving evidence and protecting your health and legal rights following a recall.',
  },
  {
    id: 3,
    title: 'The Hidden Dangers of PFAS "Forever Chemicals"',
    category: 'Environmental',
    readTime: '8 min read',
    trending: true,
    excerpt: 'How widespread contamination is affecting communities and what legal avenues exist for affected municipalities.',
  }
];

const FAQS = [
  {
    q: "How do I know if I have a valid mass tort claim?",
    a: "A valid claim generally requires proving that you used a specific product or were exposed to a specific substance, and that you suffered a qualifying injury as a direct result. Our initial free case review is designed to determine if your circumstances fit these criteria."
  },
  {
    q: "How much does it cost to hire Shapiro Legal Group?",
    a: "We work strictly on a contingency fee basis. This means there are no upfront costs, and we only get paid if we successfully recover compensation for you. If we don't win your case, you owe us nothing."
  },
  {
    q: "Will I have to go to court?",
    a: "The vast majority of mass tort cases are resolved through global settlements rather than individual trials. However, we prepare every case as if it will go to trial, which often pressures defendants into offering fair settlements."
  },
  {
    q: "How long does a mass tort lawsuit take?",
    a: "Mass torts are complex and can take anywhere from a few months to several years to resolve. The timeline depends on the stage of the litigation, the number of plaintiffs, and the defendant's willingness to settle."
  }
];

export function KnowledgeCenterGrid() {
  const [search, setSearch] = useState('');

  return (
    <section id="knowledge-center" className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-label text-accent mb-4 block">Knowledge Center</span>
            <h2 className="font-display text-display-l text-primary max-w-2xl">
              Legal Insights & Resources
            </h2>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-border rounded-sm py-3 pl-12 pr-4 text-body-s focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {ARTICLES.map((article) => (
            <Link 
              key={article.id}
              href="#"
              className="bg-white rounded-xl overflow-hidden border border-border hover:border-secondary/30 hover:shadow-card transition-all group flex flex-col h-full"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] uppercase tracking-wider font-semibold text-secondary bg-secondary/5 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  {article.trending && (
                    <div className="flex items-center text-accent gap-1 text-[12px] font-semibold">
                      <Flame size={14} /> Trending
                    </div>
                  )}
                </div>
                
                <h3 className="font-display text-[22px] text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-body-s text-muted mb-8 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-muted text-[12px] font-medium gap-1.5 mt-auto pt-4 border-t border-border">
                  <Clock size={14} />
                  {article.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-display-m text-primary mb-4">Frequently Asked Questions</h3>
            <p className="text-body-m text-muted">Clear answers to help you understand your legal options.</p>
          </div>

          <Accordion.Root type="multiple" className="space-y-4">
            {FAQS.map((faq, i) => (
              <Accordion.Item 
                key={i} 
                value={`faq-${i}`}
                className="bg-white border border-border rounded-lg overflow-hidden data-[state=open]:border-secondary/30 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group">
                    <span className="font-display text-[20px] text-primary group-hover:text-secondary transition-colors">{faq.q}</span>
                    <ChevronDown className="text-muted group-data-[state=open]:rotate-180 transition-transform duration-300" size={20} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="p-6 pt-0 text-body-m text-muted leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

      </div>
    </section>
  );
}
