import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Check } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-md flex justify-end overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl min-h-full bg-paper text-ink p-8 md:p-14 flex flex-col justify-between overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-ink/15 text-xs font-mono text-ink-soft">
              <span>PROJECT CASE STUDY</span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-ink text-paper hover:scale-105 transition-transform cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Project Title & Category */}
            <div className="mt-8 mb-6">
              <span className="font-mono text-sm font-semibold text-ink-soft">{project.code} — {project.year}</span>
              <h2 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-ink mt-2">
                {project.title}
              </h2>
              <p className="text-base md:text-lg font-medium text-ink-soft mt-3">
                {project.category}
              </p>
            </div>

            {/* Project Mockup Hero Image */}
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border border-ink/15 shadow-md my-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Overview */}
            <div className="flex flex-col gap-6 py-6 border-y border-ink/15">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">Overview &amp; Architecture</h3>
              <p className="text-base md:text-xl font-medium leading-relaxed text-ink">
                {project.description}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8 border-b border-ink/15 text-xs font-mono">
              <div>
                <span className="text-ink-soft block mb-1">CLIENT</span>
                <span className="font-bold text-ink text-sm">{project.client}</span>
              </div>
              <div>
                <span className="text-ink-soft block mb-1">ROLE</span>
                <span className="font-bold text-ink text-sm">{project.role}</span>
              </div>
              <div>
                <span className="text-ink-soft block mb-1">YEAR</span>
                <span className="font-bold text-ink text-sm">{project.year}</span>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="py-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft mb-4">Key Deliverables</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
                {project.deliverables?.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-ink">
                    <Check size={16} className="text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-8 border-t border-ink/15 flex justify-between items-center">
            <span className="font-mono text-xs text-ink-soft">STRIKERS STUDIO®</span>
            <button
              type="button"
              onClick={() => alert(`Launching live preview for ${project.title}`)}
              className="px-6 py-3 rounded-full bg-ink text-paper font-mono text-xs font-bold flex items-center gap-2 hover:bg-ink/80 transition-colors cursor-pointer"
            >
              <span>VISIT LIVE PREVIEW</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
