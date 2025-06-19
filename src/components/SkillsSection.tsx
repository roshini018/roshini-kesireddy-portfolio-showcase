
import { Code, Github, File } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['C', 'Java', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-sage-green to-sage-green/70'
    },
    {
      title: 'Tools',
      icon: <Github className="w-6 h-6" />,
      skills: ['Git', 'VS Code', 'Postman', 'GitHub'],
      color: 'from-sage-green/80 to-sage-green/60'
    },
    {
      title: 'Databases',
      icon: <File className="w-6 h-6" />,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-sage-green/70 to-sage-green/50'
    },
    {
      title: 'Technologies',
      icon: <Code className="w-6 h-6" />,
      skills: ['React', 'Node.js', 'Tailwind CSS', 'Express.js'],
      color: 'from-sage-green/60 to-sage-green/40'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-sage-green mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-500 group-hover:w-full`}
                          style={{ width: `${85 + skillIndex * 3}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-heading font-semibold text-gray-700 mb-8">
            Additional Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Responsive Design', 'REST APIs', 'OOP', 'Data Structures', 'Algorithms', 'Problem Solving'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-sage-green/10 text-sage-green rounded-full text-sm font-medium hover:bg-sage-green/20 transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
