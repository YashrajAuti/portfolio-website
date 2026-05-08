
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

export default function App() {

  return (
    <div className="dark">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Layout */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          {/* Divider */}
          <SectionDivider />

          <About />
          <SectionDivider />

          <Skills />
          <SectionDivider />

          <Projects />
          <SectionDivider />

          <Certificates />
          <SectionDivider />

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-px w-full" style={{
        background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.15), rgba(79,172,254,0.1), transparent)'
      }} />
    </div>
  );
}
