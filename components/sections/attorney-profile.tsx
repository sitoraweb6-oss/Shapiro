'use client';

import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function AttorneyProfile() {
  return (
    <section id="co-counsel" className="py-24 lg:py-32 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Portrait */}
          <div className="relative group rounded-xl overflow-hidden aspect-[3/4] bg-bg max-w-md mx-auto lg:mx-0 w-full">
            <Image
              src="https://picsum.photos/seed/attorney/800/1066"
              alt="David Shapiro, Esq."
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            
            {/* Hover Reveal Card */}
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-primary/90 backdrop-blur-md">
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:david@shapirolegal.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <span className="text-label text-accent mb-4 block">Managing Partner</span>
            <h2 className="font-display text-display-l text-primary mb-2">
              David Shapiro, Esq.
            </h2>
            <p className="text-body-m font-mono text-muted mb-8">Lead National Litigator</p>
            
            <div className="space-y-6 text-body-m text-muted mb-10">
              <p>
                David Shapiro has built a reputation as one of the nation&apos;s most formidable advocates for the injured. With over two decades of focused experience in complex mass torts, he has successfully taken on the world&apos;s largest pharmaceutical and medical device manufacturers.
              </p>
              <p>
                Known for his meticulous preparation and courtroom presence, David&apos;s approach is rooted in an uncompromising standard of precision. He believes that every client deserves the level of representation typically reserved for major corporations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-border">
              <div>
                <h4 className="text-label text-primary mb-2">Education</h4>
                <p className="text-body-s text-muted">Harvard Law School, J.D.<br/>University of Pennsylvania, B.A.</p>
              </div>
              <div>
                <h4 className="text-label text-primary mb-2">Admissions</h4>
                <p className="text-body-s text-muted">New York, California, Texas<br/>Supreme Court of the United States</p>
              </div>
            </div>
            
            <div className="mt-8 relative h-10 w-64">
              <Image src="https://picsum.photos/seed/badges/400/80" alt="Awards and Accolades Placeholder" fill className="object-contain opacity-50 mix-blend-multiply" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
