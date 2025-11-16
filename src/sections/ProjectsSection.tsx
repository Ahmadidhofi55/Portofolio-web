import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Warehouse Managemenet System',
    description: 'A comprehensive Warehouse Management System (WMS) built using the Laravel framework. This application is designed to manage the entire inventory lifecycle, from receiving goods (Inbound) and dispatching goods (Outbound), to real-time stock tracking, and precise product location lookup within the warehouse.',
    image: 'https://image2url.com/images/1762594214738-35ec2829-66e4-41e2-afed-380e4f3f5571.png',
    tags: ['Laravel', 'PHP', 'Javascript','Boostrapt'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ahmadidhofi55/Warehouse-Management-System',
  },
  {
    title: 'Search Film Favorit App',
    description: 'Web Search for Film Favorit fecth form Imdb Api',
    image: 'https://image2url.com/images/1762596856000-c3af2580-a84a-4edc-9422-938b28623b03.png',
    tags: ['React', 'Fetch Api Imdb', 'Javascript'],
    liveUrl: 'https://ornot-film-34u2jkh3l-ahmadidhofi4-gmailcom.vercel.app/ ',
    githubUrl: 'https://github.com/Ahmadidhofi55/ORNOT-FILM',
  },
   {
    title: 'Ornotnet Landing Page',
    description: 'Landing Page Website Ornotnet Internet Service Provider Built with next js , react , and tailwindcss',
    image: 'https://image2url.com/images/1763228142195-493f029b-d73b-4833-a9de-ea4e82c6c8d9.png',
    tags: ['React', 'Next Js', 'Tailwindcss'],
    liveUrl: 'https://ornot-net-internet-service-provider.vercel.app/ ',
    githubUrl: 'https://github.com/Ahmadidhofi55/OrnotNet-Internet-Service-Provider',
  },

];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0e14]">
      <div data-aos="zoom-in" className="container mx-auto px-4">
        <SectionHeading
          title="My Projects"
          subtitle="A showcase of my recent work and personal projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;