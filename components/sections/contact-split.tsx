'use client';

import Image from 'next/image';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { ConsultationForm } from '@/components/shared/consultation-form';

export function ContactSplit() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Info */}
          <div>
            <span className="text-label text-accent mb-4 block">Take Action</span>
            <h2 className="font-display text-display-l text-primary mb-6">
              Start Your Free Case Evaluation
            </h2>
            <p className="text-body-l text-muted mb-12">
              Time is often critical in mass tort and injury claims due to statutes of limitations. Contact our team today to ensure your rights are protected.
            </p>

            <div className="space-y-8">
              {/* HQ Card */}
              <div className="bg-bg border border-border p-8 rounded-xl">
                <h3 className="font-display text-[22px] text-primary mb-6">National Headquarters</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-secondary shrink-0 mt-1" size={20} />
                    <div className="text-body-m text-muted">
                      1200 Legal Plaza, Suite 400<br />
                      New York, NY 10004
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="text-secondary shrink-0 mt-1" size={20} />
                    <div className="text-body-m text-muted">
                      Available 24/7 for urgent inquiries.<br />
                      Office Hours: Mon-Fri, 8am-6pm EST.
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-secondary shrink-0 mt-1" size={20} />
                    <div className="text-body-m font-mono text-primary font-medium">
                      (866) 527-0306
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-secondary shrink-0 mt-1" size={20} />
                    <div className="text-body-m text-primary">
                      intake@shapirolegal.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Map Embed Placeholder */}
              <div className="h-[240px] bg-border rounded-xl overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group">
                <Image 
                  src="https://picsum.photos/seed/map/800/400" 
                  alt="Map location" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform">
                  <MapPin className="text-accent" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <div className="sticky top-32">
              {/* Reuse the shared consultation form with contact variant */}
              <ConsultationForm variant="contact" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
