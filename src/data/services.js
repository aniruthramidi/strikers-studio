/**
 * @typedef {Object} Service
 * @property {string} num
 * @property {string} title
 * @property {string} desc
 * @property {string} image
 */

/** @type {Service[]} */
export const services = [
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

export default services;
