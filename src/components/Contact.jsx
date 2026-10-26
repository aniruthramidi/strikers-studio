import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@strikers.studio';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const socials = [
    { name: 'Git / Hub', href: 'https://github.com' },
    { name: 'X / Twitter', href: 'https://x.com' },
    { name: 'Insta / gram', href: 'https://instagram.com' },
    { name: 'Dribb / ble', href: 'https://dribbble.com' },
    { name: 'Linked / In', href: 'https://linkedin.com' },
  ];

  return (
    <section id="contact" aria-label="Contact" className="relative bg-paper text-ink pt-24 pb-12 px-6 md:px-12 grid-lines overflow-hidden flex flex-col justify-between min-h-screen">
      {/* Top Section Header */}
      <div className="flex justify-between items-start pb-8 border-b border-ink/20 text-xs font-mono tracking-widest text-ink-soft uppercase">
        <span>CONTACT &amp; COMMISSIONS</span>
        <span>07 / 07</span>
      </div>

      <div className="py-16 md:py-24 my-auto">
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-5xl font-medium tracking-tight text-ink max-w-3xl leading-snug"
        >
          Connect, collaborate, or just say hello
        </motion.p>

        {/* Email Copy Box with Tactile Spring Feedback */}
        <div className="mt-10 mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <motion.button
            type="button"
            onClick={handleCopy}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group flex items-center gap-4 text-3xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tight text-ink hover:text-ink-soft transition-colors cursor-pointer text-left select-none"
          >
            <span>{email}</span>
            <span className="p-3.5 rounded-full bg-ink text-paper text-base group-hover:scale-110 transition-transform duration-300 shadow-md">
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="checked"
                    initial={{ scale: 0.4, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0.4, rotate: 45 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    className="inline-block"
                  >
                    <Check size={24} className="text-emerald-400" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    <Copy size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </motion.button>

          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, scale: 0.85, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.85, x: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-3.5 py-1.5 rounded-full shadow-sm"
              >
                COPIED TO CLIPBOARD!
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Social Links List with Butter-Smooth Gliding Arrows */}
        <div className="pt-12 border-t border-ink/20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm font-mono font-semibold">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="group flex items-center gap-1 text-ink-soft hover:text-ink transition-colors select-none"
            >
              <span>[ {social.name} ]</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Giant Footer Wordmark with Butter-Smooth Hover Wave */}
      <div className="pt-12 border-t border-ink/20">
        <div className="flex justify-between items-baseline text-xs font-mono text-ink-soft mb-2">
          <span>STRIKERS STUDIO®</span>
          <span>24.26®</span>
        </div>
        
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="section-wordmark font-display font-extrabold text-ink tracking-tighter text-center sm:text-left select-none"
          >
            STRIKERS
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
