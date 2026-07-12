import { Scale, Globe, Clock, Trophy, Users, ShieldAlert } from 'lucide-react';

export function WhyChooseBento() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="text-label text-accent mb-4 block">The Shapiro Difference</span>
          <h2 className="font-display text-display-l text-primary max-w-2xl">
            Uncompromising Standards. Unmatched Resources.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          
          {/* Large Tile */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 bg-bg rounded-xl p-8 lg:p-12 group flex flex-col relative overflow-hidden border border-border transition-colors hover:border-secondary/30">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-8 relative z-10 group-hover:-translate-y-1 transition-transform">
              <Scale size={24} strokeWidth={1.5} />
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="font-display text-display-m text-primary mb-3">Decades of Focused Experience</h3>
              <p className="text-body-m text-muted max-w-md">
                Unlike general practice firms, we focus exclusively on complex mass torts. Our dedicated litigation teams have spent years building the specific medical and scientific knowledge required to win.
              </p>
              <div className="h-0.5 bg-accent w-0 group-hover:w-12 transition-all duration-300 mt-6" />
            </div>
          </div>

          {/* Medium Tile 1 */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-primary rounded-xl p-8 group flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe size={120} strokeWidth={1} className="text-white" />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:-translate-y-1 transition-transform">
              <Globe size={24} strokeWidth={1.5} />
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="font-display text-display-m text-white mb-2">Nationwide Reach</h3>
              <p className="text-body-s text-white/70">Co-counseling with top litigators in all 50 states.</p>
              <div className="h-0.5 bg-accent w-0 group-hover:w-12 transition-all duration-300 mt-4" />
            </div>
          </div>

          {/* Small Tile 1 */}
          <div className="col-span-1 bg-surface rounded-xl p-8 border border-border group flex flex-col hover:border-secondary/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-bg flex items-center justify-center text-primary mb-auto group-hover:-translate-y-1 transition-transform">
              <Clock size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-[22px] text-primary mb-1">Fast Response</h3>
              <p className="text-body-s text-muted">Immediate action on urgent cases.</p>
              <div className="h-0.5 bg-accent w-0 group-hover:w-8 transition-all duration-300 mt-4" />
            </div>
          </div>

          {/* Small Tile 2 */}
          <div className="col-span-1 bg-surface rounded-xl p-8 border border-border group flex flex-col hover:border-secondary/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-bg flex items-center justify-center text-primary mb-auto group-hover:-translate-y-1 transition-transform">
              <Trophy size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-[22px] text-primary mb-1">Award-Winning</h3>
              <p className="text-body-s text-muted">Recognized by peers nationally.</p>
              <div className="h-0.5 bg-accent w-0 group-hover:w-8 transition-all duration-300 mt-4" />
            </div>
          </div>

          {/* Small Tile 3 */}
          <div className="col-span-1 bg-surface rounded-xl p-8 border border-border group flex flex-col hover:border-secondary/30 transition-colors hidden md:flex">
            <div className="w-10 h-10 rounded-full bg-bg flex items-center justify-center text-primary mb-auto group-hover:-translate-y-1 transition-transform">
              <Users size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-[22px] text-primary mb-1">Dedicated Team</h3>
              <p className="text-body-s text-muted">A specialized team for every client.</p>
              <div className="h-0.5 bg-accent w-0 group-hover:w-8 transition-all duration-300 mt-4" />
            </div>
          </div>

          {/* Small Tile 4 */}
          <div className="col-span-1 bg-surface rounded-xl p-8 border border-border group flex flex-col hover:border-secondary/30 transition-colors hidden lg:flex">
            <div className="w-10 h-10 rounded-full bg-bg flex items-center justify-center text-primary mb-auto group-hover:-translate-y-1 transition-transform">
              <ShieldAlert size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-[22px] text-primary mb-1">No Upfront Fees</h3>
              <p className="text-body-s text-muted">We only get paid if you win.</p>
              <div className="h-0.5 bg-accent w-0 group-hover:w-8 transition-all duration-300 mt-4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
