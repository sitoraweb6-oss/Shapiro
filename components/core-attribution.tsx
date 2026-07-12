'use client';

// Core Attribution Component
export function CoreAttribution() {
  return (
    <div className="fixed bottom-24 md:bottom-4 right-4 z-[100] pointer-events-none">
      <div className="bg-bg/80 backdrop-blur-md border border-border/50 px-3 py-1.5 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(255,77,45,0.15)] transition-shadow duration-300 pointer-events-auto">
        <span className="text-[10px] uppercase tracking-wider text-muted font-medium">
          Developed by{' '}
          <a
            href="https://sitora.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold hover:text-accent transition-colors duration-300"
          >
            Sitora Web
          </a>
        </span>
      </div>
    </div>
  );
}
