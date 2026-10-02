import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Studio from './components/Studio';
import Work from './components/Work';
import Services from './components/Services';
import Meaning from './components/Meaning';
import Vision from './components/Vision';
import Ideas from './components/Ideas';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-paper text-ink selection:bg-ink selection:text-paper font-sans">
      {/* Interactive Preloader Screen */}
      <Preloader />

      {/* Fixed Navbar & Menu Drawer */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero />
        <Studio />
        <Work />
        <Services />
        <Meaning />
        <Vision />
        <Ideas />
        <Contact />
      </main>
    </div>
  );
}
