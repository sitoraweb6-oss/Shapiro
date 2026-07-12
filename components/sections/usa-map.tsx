'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// A simplified US Map SVG for demonstration purposes to avoid huge payload
// In a real production build, a full TopoJSON or detailed SVG would be used.
const STATE_PATHS = [
  { id: 'CA', name: 'California', d: 'M100,50 L120,80 L110,120 L80,100 Z', clients: 8420 },
  { id: 'TX', name: 'Texas', d: 'M150,150 L180,130 L200,180 L160,200 L140,180 Z', clients: 5100 },
  { id: 'NY', name: 'New York', d: 'M250,60 L280,50 L270,80 L240,70 Z', clients: 4800 },
  { id: 'FL', name: 'Florida', d: 'M230,180 L260,180 L270,220 L240,230 L220,200 Z', clients: 3950 },
  // Adding a general representation of the rest of the US for visual weight
  { id: 'REST', name: 'Other States', d: 'M50,30 L250,30 L230,180 L150,150 L100,50 Z', clients: 37730 }
];

export function UsaMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeState = STATE_PATHS.find(s => s.id === hoveredState);

  return (
    <section className="py-24 lg:py-32 bg-bg border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-label text-accent mb-4 block">National Reach</span>
          <h2 className="font-display text-display-l text-primary max-w-2xl mx-auto">
            We Represent Clients Nationwide
          </h2>
          <p className="text-body-m text-muted mt-4 max-w-xl mx-auto">
            From our headquarters, our network of litigators and co-counsel fight for injured individuals in all 50 states.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto aspect-[4/3] sm:aspect-[16/9] bg-white rounded-xl shadow-card border border-border p-8"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
          }}
          onMouseLeave={() => setHoveredState(null)}
        >
          {/* Conceptual SVG - In a real app this would be a full detailed map */}
          <svg viewBox="0 0 300 250" className="w-full h-full drop-shadow-sm">
            {STATE_PATHS.map((state) => (
              <path
                key={state.id}
                d={state.d}
                fill={hoveredState === state.id ? 'var(--color-secondary)' : 'var(--color-border)'}
                stroke="white"
                strokeWidth="1"
                className="transition-colors duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredState(state.id)}
              />
            ))}
          </svg>

          {/* Custom Tooltip */}
          <AnimatePresence>
            {activeState && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute z-10 pointer-events-none bg-primary text-white px-4 py-3 rounded-md shadow-glass"
                style={{
                  left: mousePos.x,
                  top: mousePos.y - 10,
                  transform: 'translate(-50%, -100%)'
                }}
              >
                <div className="text-body-m font-semibold mb-1">{activeState.name}</div>
                <div className="text-body-s text-white/80">
                  <span className="font-mono text-white">{activeState.clients.toLocaleString()}</span> active clients
                </div>
                {/* Tooltip Arrow */}
                <div className="absolute left-1/2 bottom-0 w-3 h-3 bg-primary transform -translate-x-1/2 translate-y-1/2 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
