import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060a10] text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                DevPortfolio
              </span>
            </a>
            <p className="mt-2 max-w-xs text-sm">
              Building beautiful, functional, and accessible web experiences.
            </p>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold text-white mb-2">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-2">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110 transform">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110 transform">
                <Twitter size={20} />
              </a>
            </div>
            <a href="mailto:ornotdev@gmail.com" className="text-sm hover:text-white transition-colors">
              ornotdev@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#2a3446] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ahmad Idhofi. All rights reserved.
          </p>
          <p className="text-sm flex items-center mt-3 md:mt-0">
            Made with <Heart className="mx-1 text-red-500" size={14} /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;