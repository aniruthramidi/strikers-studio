import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
  const [activeImage, setActiveImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      num: '001',
      title: 'PRODUCTION',
      desc: '4K multi-cam studio recording, lighting, sound & flagship video editing',
      image: '/project-1.jpg'
    },
    {
      num: '002',
      title: 'VIRAL CLIPS',
      desc: 'Short-form video editing, hook pacing, dynamic captions & social scaling',
      image: '/project-2.jpg'
    },
    {
      num: '003',
      title: 'PODCASTS',
      desc: 'Broadcast video podcast production, multi-camera switching & audio mastering',
      image: '/project-3.jpg'
    },
    {
      num: '004',
      title: 'CREATOR OS',
      desc: 'Bespoke creator websites, digital product storefronts & subscriber communities',
      image: '/project-4.jpg'
    }
  ];

  return (
    <section id="services" aria-label="Services" className="relative bg-paper text-ink py-24 px-6 md:px-12 grid-lines">
      {/* Section Header */}
      <div className="flex justify-between items-start pb-8 border-b border-ink/20 text-xs font-mono tracking-widest text-ink-soft uppercase">
        <span>CREATOR SERVICES</span>
        <span>04 / 07</span>
      </div>

      {/* Main Title */}
      <div className="py-12">
        <h2 className="section-wordmark font-display font-extrabold text-ink">
          SERVICES
        </h2>
        <div className="flex items-center gap-4 text-base md:text-xl font-medium text-ink-soft mt-2">
          <span>we support creators</span>
          <span className="w-12 h-[1px] bg-ink/30" />
          <span>we build for growth.</span>
        </div>
      </div>

      {/* Services List */}
      <div className="border-t border-ink/30 my-8">
        {services.map((item) => (
          <div
            key={item.num}
            onMouseEnter={() => setActiveImage(item.image)}
            onMouseLeave={() => setActiveImage(null)}
            className="group relative border-b border-ink/20 py-8 md:py-12 px-2 md:px-4 flex flex-col md:flex-row md:items-center justify-between transition-colors duration-300 hover:bg-ink/5 cursor-pointer"
          >
            <div className="flex items-baseline gap-6 md:gap-12">
              <span className="font-mono text-sm md:text-xl font-semibold text-ink-soft group-hover:text-ink transition-colors">
                {item.num}
              </span>
              <h3 className="text-3xl md:text-6xl font-extrabold font-display tracking-tight text-ink group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h3>
            </div>

            <p className="text-sm md:text-xl font-medium text-ink-soft max-w-md mt-4 md:mt-0 group-hover:text-ink transition-colors">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Image Cursor Follower */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed pointer-events-none z-30 hidden md:block w-72 h-48 rounded-lg overflow-hidden border border-paper shadow-2xl"
            style={{
              left: `${mousePos.x + 20}px`,
              top: `${mousePos.y - 100}px`
            }}
          >
            <img
              src={activeImage}
              alt="Service Preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
