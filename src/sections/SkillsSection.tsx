import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { Code, Database, Server,  PenTool,   } from 'lucide-react';

const skills = [
  { name: "Frontend", icon: <Code />, level: 70 },
  { name: "Backend", icon: <Server />, level: 85 },
  { name: "Databases", icon: <Database />, level: 80 },
  { name: "Web Design", icon: <PenTool />, level: 75 },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies and tools I work with" 
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="relative group">
              <SkillCard 
                icon={skill.icon} 
                name={skill.name} 
                level={skill.level}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1c2331] p-6 rounded-lg border border-[#2a3446]">
            <h3 className="text-xl font-bold mb-4 text-white">Frontend Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS','Boostrap', 'HTML5', 'CSS3', 'JavaScript'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-[#2a3446] text-gray-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-[#1c2331] p-6 rounded-lg border border-[#2a3446]">
            <h3 className="text-xl font-bold mb-4 text-white">Backend Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {['Laravel','Node.js', 'Next Js', 'Mysql', 'PostgreSQL', 'REST APIs'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-[#2a3446] text-gray-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;