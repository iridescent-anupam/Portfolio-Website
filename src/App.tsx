import { Navigation } from "./components/Navigation";
import { motion } from "framer-motion";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#050810' }}>
      {/* Deep space background layers */}
      <div className="fixed inset-0 -z-50">
        {/* Base gradient */}
        <div className="absolute inset-0 gradient-void"></div>

        {/* Atmospheric image overlays */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-lighten"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MzM2NzczM3ww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        {/* Neon light overlay */}
        <div
          className="absolute inset-0 opacity-3 mix-blend-screen"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1618902345120-77758161d808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwY3liZXJwdW5rfGVufDF8fHx8MTc2MzM4MzUxMnww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.03) 2px, rgba(0,240,255,0.03) 4px)',
        }}></div>
      </div>

      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Education />
        <Contact />
      </motion.main>
      <ScrollProgress />
      <BackToTop />
      <Footer />
    </div>
  );
}