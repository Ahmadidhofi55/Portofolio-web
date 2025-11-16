import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import { AosProvider } from './components/AosProvider';
import './styles/animations.css';

function App() {
  useEffect(() => {
    document.title = 'Ahmad Idhofi | Web Developer Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300">
      <AosProvider>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </AosProvider>
    </div>
  );
}

export default App;