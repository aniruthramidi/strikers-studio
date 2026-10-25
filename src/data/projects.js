/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} code
 * @property {string} title
 * @property {string} category
 * @property {string} year
 * @property {string} client
 * @property {string} role
 * @property {string} image
 * @property {string} description
 * @property {string[]} deliverables
 */

/** @type {Project[]} */
export const projects = [
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

export default projects;
