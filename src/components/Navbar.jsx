import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Menu, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setTimeStr(now.toLocaleTimeString('en-US', options) + ' EST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { num: '01', label: 'STUDIO', href: '#studio' },
    { num: '02', label: 'WORK', href: '#work' },
    { num: '03', label: 'SERVICES', href: '#services' },
    { num: '04', label: 'VISION', href: '#vision' },
    { num: '05', label: 'IDEAS', href: '#ideas' },
    { num: '06', label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5 md:px-12 md:py-7 pointer-events-none">
        {/* Brand Wordmark Left */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('#top'); }}
          className="pointer-events-auto text-lg md:text-xl font-extrabold tracking-tighter text-ink mix-blend-difference hover:opacity-75 transition-opacity"
        >
          STRIKERS®
        </a>

        {/* Menu Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="pointer-events-auto p-3 rounded-full bg-ink text-paper mix-blend-difference hover:scale-105 active:scale-95 transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Navigation Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-md flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl h-full bg-ink text-paper flex flex-col justify-between p-8 md:p-14 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Top Header */}
              <div className="flex justify-between items-center pb-8 border-b border-paper/15 text-xs font-mono tracking-widest text-paper-soft">
                <span>STRIKERS STUDIO®</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                  AVAILABLE FOR Q4 2026
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="my-10 flex flex-col gap-4">
                {navLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(item.href); }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.06, duration: 0.4 }}
                    className="group flex items-baseline gap-6 py-2 border-b border-paper/10 text-3xl md:text-5xl font-extrabold tracking-tight hover:text-paper-soft transition-colors cursor-pointer"
                  >
                    <span className="font-mono text-xs md:text-sm font-normal text-paper-soft group-hover:text-paper transition-colors">
                      {item.num}
                    </span>
                    <span>{item.label}</span>
                    <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={28} />
                  </motion.a>
                ))}
              </nav>

              {/* Drawer Footer Info */}
              <div className="pt-8 border-t border-paper/15 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-xs text-paper-soft">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 font-mono text-paper font-semibold">
                    <Clock size={14} />
                    <span>{timeStr || 'NEW YORK, US'}</span>
                  </div>
                  <p>Bespoke Digital Craft &amp; Engineering</p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40">Direct Contact</span>
                  <a href="mailto:hello@strikers.studio" className="text-paper hover:underline font-mono text-sm">
                    hello@strikers.studio
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
