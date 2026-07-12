import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="font-display text-2xl font-semibold mb-4 opacity-90">Shapiro Legal Group</h2>
            <p className="text-white/70 text-body-s mb-6 max-w-xs">
              Justice. Built on Experience. Won Through Precision. Representing injured people nationwide.
            </p>
            {/* Animated Logo / Wordmark breathing loop would go here */}
          </div>
          
          <div>
            <h3 className="text-label text-white/50 mb-6">Firm</h3>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-body-s text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#co-counsel" className="text-body-s text-white/80 hover:text-white transition-colors">Co-Counsel</Link></li>
              <li><Link href="#testimonials" className="text-body-s text-white/80 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="#knowledge-center" className="text-body-s text-white/80 hover:text-white transition-colors">Knowledge Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-label text-white/50 mb-6">Litigation Areas</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-body-s text-white/80 hover:text-white transition-colors">Mass Tort</Link></li>
              <li><Link href="#" className="text-body-s text-white/80 hover:text-white transition-colors">Medical Devices</Link></li>
              <li><Link href="#" className="text-body-s text-white/80 hover:text-white transition-colors">Product Liability</Link></li>
              <li><Link href="#" className="text-body-s text-white/80 hover:text-white transition-colors">Environmental</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-label text-white/50 mb-6">Contact</h3>
            <ul className="space-y-4 text-body-s text-white/80">
              <li className="font-mono text-lg text-white">
                <a href="tel:8665270306">(866) 527-0306</a>
              </li>
              <li>contact@shapirolegal.com</li>
              <li className="pt-4">
                <Link href="#contact" className="text-accent hover:text-accent/80 font-medium transition-colors">
                  Book Free Consultation &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-white/50 text-[12px] space-y-2 max-w-3xl">
            <p>Past results do not guarantee future outcomes. The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</p>
            <p>&copy; {new Date().getFullYear()} Shapiro Legal Group, PLLC. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-body-s">Privacy Policy</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-body-s">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
