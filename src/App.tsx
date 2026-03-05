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
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#050810' }}>
      {/* Deep space background layers */}
      <div className="fixed inset-0 -z-50">
        {/* Base gradient */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, #0d1225 0%, #050810 70%)' }}></div>

        {/* Subtle animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-cyan-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.02) 2px, rgba(0,240,255,0.02) 4px)',
        }}></div>
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
          transition={{ duration: 0.8 }}
        >
          <HeroContent />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Education />
          <Contact />
        </motion.main>
        <Footer />
      </ScrollExpandHero>

      <ScrollProgress />
      <BackToTop />
    </div>
  );
}