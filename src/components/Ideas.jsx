import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Ideas() {
  const [activeTab, setActiveTab] = useState(0);

  const quotes = [
    {
      id: '01',
      title: 'an idea takes root',
      quote: 'When an idea takes root, it breaks free from chaos, demanding a shape and a space to exist.'
    },
    {
      id: '02',
      title: 'execution meets intent',
      quote: 'When execution meets intent, complexity turns into fluidity, forging every pixel and line of code with purpose.'
    },
    {
      id: '03',
      title: 'vision shapes the future',
      quote: 'When vision shapes the future, design stops following trends and starts leaving a permanent mark.'
    },
    {
      id: '04',
      title: 'precision becomes art',
      quote: 'When precision becomes art, the boundary between function and emotion completely disappears.'
    }
  ];

  return (
    <section id="ideas" aria-label="Ideas" className="relative bg-ink text-paper py-28 px-6 md:px-12 grid-lines-dark">
      {/* Top Header */}
      <div className="flex justify-between items-start pb-8 border-b border-paper/15 text-xs font-mono tracking-widest text-paper-soft uppercase">
        <span>IDEAS &amp; PRINCIPLES</span>
        <span className="tabular-nums font-bold text-paper">0{activeTab + 1} / 04</span>
      </div>

      <div className="max-w-6xl mx-auto py-16">
        {/* Tab Selection with Butter-Smooth Gliding Spring Indicator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-b border-paper/15 pb-6">
          {quotes.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`relative text-left p-3.5 rounded-lg font-mono text-xs md:text-sm transition-colors cursor-pointer select-none ${
                  isActive ? 'text-ink font-bold' : 'text-paper-soft hover:text-paper'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePrincipleTabPill"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-paper rounded-lg -z-10 shadow-md gpu-accelerated"
                  />
                )}
                <span className="relative z-10">{item.id}. </span>
                <span className="relative z-10 capitalize">{item.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Display Quote with Butter-Smooth Crossfade */}
        <div className="min-h-[220px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity, filter' }}
              className="flex flex-col gap-6"
            >
              <span className="font-mono text-xs text-paper-soft tracking-widest uppercase">
                PRINCIPLE // {quotes[activeTab].id}
              </span>
              <p className="text-3xl md:text-6xl font-medium leading-tight text-paper font-display tracking-tight">
                "{quotes[activeTab].quote}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
