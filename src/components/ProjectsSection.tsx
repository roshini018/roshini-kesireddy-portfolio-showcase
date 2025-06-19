
import { Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      subtitle: 'React + Tailwind',
      date: 'May 2025',
      description: 'Built and deployed a personal portfolio showcasing projects, skills, resume, and contact info. Designed a modern, responsive layout with Tailwind and React.',
      tags: ['React', 'Tailwind', 'JavaScript', 'Responsive'],
      icon: '🧠',
      gradient: 'from-sage-green to-sage-green/70'
    },
    {
      title: 'To-Do List Web App',
      subtitle: 'HTML/CSS/JS',
      date: 'Nov 2024',
      description: 'A fully responsive To-Do app using local storage for task persistence. Clean UI with add/delete/complete task features.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      icon: '✅',
      gradient: 'from-sage-green/80 to-sage-green/60'
    },
    {
      title: 'Amazon Clone',
      subtitle: 'HTML/CSS',
      date: 'Nov 2024',
      description: 'A static homepage clone of Amazon with navbar, product listings, and responsive design.',
      tags: ['HTML', 'CSS', 'Responsive', 'Clone'],
      icon: '🛍️',
      gradient: 'from-sage-green/70 to-sage-green/50'
    },
    {
      title: 'Tic Tac Toe Game',
      subtitle: 'Java',
      date: 'Oct 2023',
      description: 'Console-based game using OOP in Java. Includes input validation and game win/tie logic.',
      tags: ['Java', 'OOP', 'Console', 'Game'],
      icon: '🎮',
      gradient: 'from-sage-green/60 to-sage-green/40'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-sage-green mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{project.icon}</span>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-gray-800 group-hover:text-sage-green transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sage-green font-medium text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {project.date}
                  </span>
                </div>

                <p className="text-gray-600 font-body mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-sage-green/10 text-sage-green text-xs font-medium rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-sage-green hover:bg-sage-green/90 text-white flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white flex items-center gap-2"
                  >
                    <Code size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white px-8 py-3"
            onClick={() => window.open('https://github.com/roshini018', '_blank')}
          >
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
