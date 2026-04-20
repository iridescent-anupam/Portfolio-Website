import { Navigation } from "./components/Navigation";
import { motion } from "framer-motion";
import { ScrollExpandHero } from "./components/ScrollExpandHero";
import { HeroContent } from "./components/HeroContent";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import heroBg from "./assets/hero-bg.png";
import heroLandscape from "./assets/hero-landscape-bg.png";

export default function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#090d1a', color: '#e2e8f0' }}>
      {/* Deep layered dark background with skeuomorphic depth */}
      <div className="fixed inset-0 -z-50">
        {/* Base deep-space dark */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, #0d1530 0%, #060a14 60%, #020408 100%)' }}></div>
        {/* Subtle atmospheric glow — warm upper right */}
        <div className="absolute top-0 right-0 w-[900px] h-[600px] opacity-20" style={{ background: 'radial-gradient(ellipse, #1e3a5f 0%, transparent 70%)' }}></div>
        {/* Cool ambient lower left */}
        <div className="absolute bottom-0 left-0 w-[700px] h-[500px] opacity-15" style={{ background: 'radial-gradient(ellipse, #0f2240 0%, transparent 70%)' }}></div>
        {/* Skeuomorphic grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '200px 200px' }}></div>
      </div>

      <Navigation />

      {/* Scroll Expansion Hero */}
      <ScrollExpandHero
        mediaSrc={heroBg}
        bgImageSrc={heroLandscape}
        title="Anupam Sanidhya"
        subtitle="Technical Product Manager"
        scrollHint="Scroll to explore"
      >
        {/* All content revealed after expansion */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Elevation tier: surface — base */}
          <div style={{ background: '#0f1320' }}>
            <HeroContent />
          </div>
          {/* Elevation tier: surface-container-low — slightly raised */}
          <div style={{ background: '#0a0e1b' }}>
            <Projects />
          </div>
          {/* Elevation tier: surface — back to base */}
          <div style={{ background: '#0f1320' }}>
            <Experience />
          </div>
          {/* Elevation tier: surface-container-lowest */}
          <div style={{ background: '#0a0e1b' }}>
            <Skills />
          </div>
          {/* Elevation tier: surface */}
          <div style={{ background: '#0f1320' }}>
            <About />
          </div>
          {/* Elevation tier: surface-container-low */}
          <div style={{ background: '#0a0e1b' }}>
            <Education />
          </div>
          {/* Elevation tier: surface — base  */}
          <div style={{ background: '#0f1320' }}>
            <Contact />
          </div>
        </motion.main>
        <div style={{ background: '#060a14' }}>
          <Footer />
        </div>
      </ScrollExpandHero>

        <ScrollProgress />
      </div>
      <BackToTop />
    </>
  );
}