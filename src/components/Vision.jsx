import React from 'react';
import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section id="vision" aria-label="Vision" className="relative bg-paper text-ink py-24 overflow-hidden border-y border-ink/20">
      {/* Top Header */}
      <div className="px-6 md:px-12 flex justify-between items-start pb-8 border-b border-ink/20 text-xs font-mono tracking-widest text-ink-soft uppercase">
        <span>IDEOLOGY / VISION</span>
        <span>05 / 07</span>
      </div>

      {/* Kinetic Infinite Marquee */}
      <div className="py-12 bg-ink text-paper overflow-hidden select-none my-12">
        <div className="animate-marquee whitespace-nowrap flex gap-12 font-display text-5xl md:text-8xl font-extrabold tracking-tighter uppercase">
          <span>STRIKERS STUDIO IN IDEOLOGY — VISION</span>
          <span>•</span>
          <span>BESPOKE DIGITAL CRAFT</span>
          <span>•</span>
          <span>HIGH-PERFORMANCE ENGINEERING</span>
          <span>•</span>
          <span>STRIKERS STUDIO IN IDEOLOGY — VISION</span>
          <span>•</span>
          <span>BESPOKE DIGITAL CRAFT</span>
          <span>•</span>
        </div>
      </div>

      {/* Editorial Content Block */}
      <div className="px-6 md:px-12 max-w-5xl mx-auto py-12">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-medium leading-tight text-ink tracking-tight"
        >
          White and space are not mere absence of color: it is the archetype of clarity, the absolute sum of every wavelength within the visible spectrum. It is totality encapsulated in a single perception.
        </motion.p>

        <p className="text-lg md:text-2xl font-normal text-ink-soft mt-8 leading-snug">
          At its core, minimalism embodies the fertile void—not a void of emptiness, but an open, generative space, akin to the blank page before writing or the silence that precedes sound.
        </p>
      </div>
    </section>
  );
}
