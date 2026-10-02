import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'creator-labs',
      code: "S'01",
      title: 'CREATOR LABS',
      category: 'Full-Scale Video Production / Studio Infrastructure / 4K Editing',
      year: '©24.26',
      client: 'Top-Tier YouTube & Twitch Creators',
      role: 'Production Studio & Post-Production Lead',
      image: '/project-1.jpg',
      description: 'End-to-end video production infrastructure for flagship YouTube channels. We engineer cinematic 4K multi-cam studio setups, high-retention pacing, custom thumbnails, and channel growth architecture that scales viewership past millions.',
      deliverables: [
        'Cinematic 4K Multi-Cam Production',
        'Custom Studio Lighting & Sound Design',
        'Thumbnail & Hook Optimization',
        'Channel Growth Architecture'
      ]
    },
    {
      id: 'viral-wave',
      code: "S'02",
      title: 'VIRAL WAVE',
      category: 'Short-Form Content Engine / TikTok & Reels Acceleration',
      year: '©24.26',
      client: 'Global Digital Creators & Influencers',
      role: 'Short-Form Content Director & Editor',
      image: '/project-2.jpg',
      description: 'A high-velocity short-form content machine designed to repurpose long-form broadcasts into viral TikToks, YouTube Shorts, and Instagram Reels with dynamic captions, sound design, and hook-focused editing.',
      deliverables: [
        'High-Retention Motion Editing',
        'Pacing & Hook Optimization',
        'Cross-Platform Distribution',
        'Viral Audio & SFX Design'
      ]
    },
    {
      id: 'podcast-pulse',
      code: "S'03",
      title: 'PODCAST PULSE',
      category: 'Video Podcast Production / Sound & Visual Branding',
      year: '©24.26',
      client: 'Independent Podcasters & Thought Leaders',
      role: 'Audio/Video Producer & Director',
      image: '/project-3.jpg',
      description: 'Turn-key video podcast production featuring multi-camera live switching, broadcast-grade audio mastering, episode highlight clips, and custom set aesthetics that build loyal listener communities.',
      deliverables: [
        'Multi-Cam Video Podcast Recording',
        'Spatial Audio Mixing & Mastering',
        'Social Highlight Clips & Teasers',
        'Set Design & Visual Branding'
      ]
    },
    {
      id: 'creator-os',
      code: "S'04",
      title: 'CREATOR OS',
      category: 'Creator Monetization / Web Apps / Community Hubs',
      year: '©24.26',
      client: 'Creator Entrepreneurs & Digital Communities',
      role: 'Full-Stack Web & Platform Engineer',
      image: '/project-4.jpg',
      description: 'Custom web platforms, digital course portals, merchandise storefronts, and subscriber community hubs built specifically for creators to own their audience relationships and maximize revenue.',
      deliverables: [
        'Custom Creator Web Platform',
        'Digital Product Storefront',
        'Private Membership & Community Portal',
        'Analytics & Audience Insights'
      ]
    }
  ];

  return (
    <section id="work" aria-label="Selected Work" className="relative bg-paper text-ink py-24 px-6 md:px-12 grid-lines">
      {/* Section Top Bar */}
      <div className="flex justify-between items-start pb-8 border-b border-ink/20 text-xs font-mono tracking-widest text-ink-soft uppercase">
        <span>CREATOR SHOWCASE</span>
        <span>03 / 07</span>
      </div>

      {/* Sub-header grid matching creator focus */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-ink/20 text-sm md:text-base font-medium text-ink-soft">
        <p>we produce content for creators.<br />and accelerate audience growth.</p>
        <p className="md:text-center">studio production —<br />short-form &amp; long-form</p>
        <p className="md:text-right">focus on creating.<br />We handle production &amp; scale</p>
      </div>

      {/* Projects List */}
      <div className="my-16 flex flex-col gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer border border-ink/20 bg-ink text-paper rounded-xl overflow-hidden shadow-lg hover:border-ink/60 transition-all duration-500"
          >
            {/* Card Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-center">
              {/* Media Preview Frame */}
              <div className="lg:col-span-7 overflow-hidden rounded-lg border border-paper/15 relative h-64 md:h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Code Badge */}
                <div className="absolute top-4 left-4 font-mono text-xl md:text-3xl font-extrabold text-paper bg-ink/80 px-3 py-1 rounded border border-paper/20">
                  {project.code}
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-paper-soft mb-2">
                    <span>{project.year}</span>
                    <span className="flex items-center gap-1 group-hover:text-paper transition-colors">
                      VIEW CASE STUDY <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-paper group-hover:text-paper-soft transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm font-medium text-paper-soft mt-3 line-clamp-2">
                    {project.category}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-paper/15 flex justify-between items-center text-xs font-mono text-paper-soft">
                  <span>{project.client}</span>
                  <span className="px-3 py-1 rounded-full border border-paper/30 text-paper group-hover:bg-paper group-hover:text-ink transition-colors">
                    DETAILS ↘
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="flex justify-center pt-8">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink text-paper font-mono text-sm md:text-base font-bold hover:bg-ink/80 transition-all hover:scale-105"
        >
          <span>WORK WITH OUR PRODUCTION TEAM</span>
          <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={18} />
        </a>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
