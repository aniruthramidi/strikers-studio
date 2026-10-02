import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@strikers.studio';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
        <p className="text-2xl md:text-5xl font-medium tracking-tight text-ink max-w-3xl leading-snug">
          Connect, collaborate, or just say hello
        </p>

        {/* Email Copy Box */}
        <div className="mt-10 mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button
            type="button"
            onClick={handleCopy}
            className="group flex items-center gap-4 text-3xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tight text-ink hover:text-ink-soft transition-colors cursor-pointer text-left"
          >
            <span>{email}</span>
            <span className="p-3 rounded-full bg-ink text-paper text-base group-hover:scale-110 transition-transform">
              {copied ? <Check size={24} className="text-emerald-400" /> : <Copy size={24} />}
            </span>
          </button>

          {copied && (
            <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-full animate-bounce">
              COPIED TO CLIPBOARD!
            </span>
          )}
        </div>

        {/* Social Links List */}
        <div className="pt-12 border-t border-ink/20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm font-mono font-semibold">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-ink-soft hover:text-ink transition-colors"
            >
              <span>[ {social.name} ]</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>

      {/* Giant Footer Wordmark */}
      <div className="pt-12 border-t border-ink/20">
        <div className="flex justify-between items-baseline text-xs font-mono text-ink-soft mb-2">
          <span>STRIKERS STUDIO®</span>
          <span>24.26®</span>
        </div>
        
        <div className="overflow-hidden">
          <h2 className="section-wordmark font-display font-extrabold text-ink tracking-tighter text-center sm:text-left select-none">
            STRIKERS
          </h2>
        </div>
      </div>
    </section>
  );
}
