import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const letters = ['S', 'T', 'R', 'I', 'K', 'E', 'R', 'S'];

  return (
    <section id="top" aria-label="STRIKERS Studio" className="relative min-h-screen bg-paper text-ink flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 grid-lines overflow-hidden">
      {/* Top Banner Tagline */}
      <div className="flex justify-between items-start pt-4 border-t border-ink/20 text-xs font-semibold tracking-wider text-ink-soft uppercase">
        <span>CREATOR PRODUCTION &amp; GROWTH STUDIO</span>
        <span className="hidden sm:inline">STD / 24—26</span>
      </div>

      {/* Massive Typographic Hero Wordmark */}
      <div className="my-auto py-8">
        <div className="overflow-hidden flex items-baseline">
          <h1 className="hero-wordmark font-display font-extrabold flex">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-2xl sm:text-5xl md:text-7xl font-extralight ml-2 align-top text-ink"
          >
            ®
          </motion.span>
        </div>

        {/* Editorial Content Grid & Atmospheric Accent Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-8">
          {/* Main Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="md:col-span-7"
          >
            <p className="text-lg md:text-2xl font-medium leading-tight text-ink-soft max-w-2xl">
              We produce high-impact content, studio infrastructure, and bespoke digital platforms for top creators—built exclusively to elevate your audience growth and channel authority.
            </p>
          </motion.div>

          {/* User's Uploaded Gradient Image Editorial Accent Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="md:col-span-5 flex flex-col md:items-end"
          >
            <div className="relative group overflow-hidden rounded-lg border border-ink/15 p-2 bg-paper/60 backdrop-blur-sm w-full max-w-xs shadow-sm">
              <div className="relative h-28 w-full overflow-hidden rounded">
                <img 
                  src="/gradient-accent.jpg" 
                  alt="STRIKERS Studio Gradient Mesh" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink/10 mix-blend-overlay" />
              </div>
              <div className="flex justify-between items-center mt-2 px-1 text-[11px] font-mono text-ink-soft">
                <span>CREATOR GROWTH ENGINE</span>
                <span className="font-bold text-ink">©2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="flex justify-between items-center pt-6 border-t border-ink/20 text-xs font-mono">
        <div className="flex items-center gap-4 text-ink-soft">
          <span className="font-bold text-ink">01 / 07</span>
          <span className="hidden sm:inline">WE BACK CREATORS</span>
        </div>
        
        <a 
          href="#studio" 
          className="flex items-center gap-2 font-semibold hover:opacity-75 transition-opacity"
        >
          <span>EXPLORE CREATOR SERVICES</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
