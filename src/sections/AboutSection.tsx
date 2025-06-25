import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { FileText } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0e14]">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better and what I do"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full aspect-square rounded-lg overflow-hidden border-4 border-[#1c2331] shadow-xl">
                <img
                  src="https://placehold.co/994x1500.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg -z-10"></div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Freelence Web Developer
            </h3>

            <div className="space-y-6 text-gray-300">
              <p>
                Hi! I'm Ahmad Idhofi, a freelance Web Developer focused on building modern, fast, and interactive websites.
              </p>

              <p>
                Although I haven’t worked with many clients yet, I’ve built several personal projects and case studies to sharpen my skills. I believe that commitment, clear communication, and clean, well-structured work are key to delivering client satisfaction.
              </p>

              <p>
                I'm ready to work with you to create a website that’s not only visually appealing, but also highly functional and aligned with your business goals.
              </p>

              <p>
                🌟 I'm always open to discussing new projects and eager to prove my quality through a professional and thoughtful approach from the very beginning.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-white font-bold mb-2">Location</h4>
                  <p>Indonesian,Pekalongan</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Experience</h4>
                  <p>5+ Years</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Education</h4>
                  <p>Vocational High School Gondang</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Languages</h4>
                  <p>English, Indonesia</p>
                </div>
              </div>

              <Button
                variant="primary"
                icon={<FileText size={18} />}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;