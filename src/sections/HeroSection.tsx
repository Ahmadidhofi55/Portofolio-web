import React from 'react';
import { ArrowDownCircle, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../components/Button';
import Terminal from '../components/Terminal';

const terminalCommands = [
  'const developer = {',
  '  name: "Ahmad Idhofi",',
  '  title: "Freelance Web Developer",',
  '  skills: ["React", "Node.js", "TypeScript", "Laravel"],',
  '  education: "Vocational High School Gondang",',
  '  interests: ["WebApp", "API", "Open Source"]',
  '};',
  '',
  'console.log("Hello, World! I\'m " + developer.name);',
  'console.log("Welcome to my portfolio!");',
];

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="min-h-screen pt-16 flex flex-col justify-center bg-[#0d1117]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fade-in-up">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">
                Hello, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Ahmad Idhofi
                </span>
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
                Freelence Web Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
               I’m a freelance Web Developer specializing in creating interactive, responsive, and professional websites to help individuals and businesses stand out online.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button onClick={scrollToAbout} icon={<ArrowDownCircle size={18} />}>
                  Explore My Work
                </Button>
                <Button variant="outline" onClick={() => window.open('https://github.com/Ahmadidhofi55', '_blank')} icon={<Github size={18} />}>
                  GitHub
                </Button>
              </div>

              <div className="flex space-x-4 text-gray-400">
                <a href="https://github.com/Ahmadidhofi55" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 hover:scale-110 transform">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 hover:scale-110 transform">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 hover:scale-110 transform">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 mx-auto w-full max-w-lg">
            <div className="animate-fade-in">
              <Terminal commands={terminalCommands} />
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDownCircle size={24} />
      </div>
    </section>
  );
};

export default HeroSection;