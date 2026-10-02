import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1600; // ms
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-paper text-ink flex flex-col justify-between p-6 md:p-12 font-sans select-none"
        >
          {/* Top Line */}
          <div className="flex justify-between items-center text-xs font-bold tracking-wider text-ink-soft">
            <span>STRIKERS STUDIO®</span>
            <span>2024 — 2026</span>
          </div>

          {/* Center Expanding Line */}
          <div className="relative w-full h-[1px] bg-ink/15 my-auto overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-ink"
              style={{ width: `${count}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Bottom Counter */}
          <div className="flex justify-between items-end">
            <div className="text-sm font-medium text-ink-soft">
              <span>DESIGN &amp; DEVELOPMENT STUDIO</span>
            </div>
            <div className="font-mono text-3xl md:text-5xl font-bold tracking-tighter">
              {String(count).padStart(3, '0')}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
