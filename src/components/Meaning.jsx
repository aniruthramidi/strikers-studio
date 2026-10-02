import React from 'react';
import { motion } from 'framer-motion';

export default function Meaning() {
  return (
    <section id="meaning" aria-label="The Meaning" className="relative min-h-screen bg-paper text-ink overflow-hidden py-24 flex flex-col justify-between px-6 md:px-12 grid-lines">
      {/* Top Header */}
      <div className="flex justify-between items-start pb-8 border-b border-ink/20 text-xs font-mono tracking-widest text-ink-soft uppercase">
        <span>THE MEANING</span>
        <span>05 / 07</span>
      </div>

      {/* Main Image Frame Container incorporating user's gradient-accent.jpg */}
      <div className="relative my-auto w-full max-w-6xl mx-auto h-[65vh] rounded-2xl overflow-hidden border border-ink/20 shadow-xl group">
        <img
          src="/gradient-accent.jpg"
          alt="The Meaning Aesthetic Mesh"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-ink/40 mix-blend-multiply" />

        {/* Overlay Giant Heading */}
        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between text-paper">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-7xl md:text-9xl font-extrabold font-display tracking-tight"
          >
            THE MEANING
          </motion.h2>

          {/* Floating Editorial Quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs md:text-sm text-paper-soft border-t border-paper/20 pt-6">
            <div>
              <span className="text-paper font-bold block mb-1">01 / BRAND</span>
              <p>not only a brand</p>
            </div>
            <div>
              <span className="text-paper font-bold block mb-1">02 / PURPOSE</span>
              <p>an idea with a reasoning</p>
            </div>
            <div>
              <span className="text-paper font-bold block mb-1">03 / EXPERIENCE</span>
              <p>something to discover</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-ink/20 flex justify-between items-center text-xs font-mono text-ink-soft">
        <span>STRIKERS STUDIO® PHILOSOPHY</span>
        <span>©2026</span>
      </div>
    </section>
  );
}
