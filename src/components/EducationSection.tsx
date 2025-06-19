
import { Trophy, Award, Star } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      degree: 'B.Tech (CSE)',
      institute: 'Kakatiya Institute of Technology Science',
      year: '2023–Present',
      result: '9.61',
      resultType: 'CGPA',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-sage-green to-sage-green/70'
    },
    {
      degree: 'Intermediate',
      institute: 'Sri Chaitanya Jr. College',
      year: '2023',
      result: '947',
      resultType: '/ 1000',
      icon: <Award className="w-6 h-6" />,
      color: 'from-sage-green/80 to-sage-green/60'
    },
    {
      degree: 'SSC',
      institute: 'SPR School of Excellence',
      year: '2021',
      result: '10.0',
      resultType: '/ 10',
      icon: <Star className="w-6 h-6" />,
      color: 'from-sage-green/60 to-sage-green/40'
    }
  ];

  return (
    <section id="education" className="py-20 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-sage-green mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group animate-fade-in bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color} text-white`}>
                    {edu.icon}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{edu.year}</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                  {edu.degree}
                </h3>
                
                <p className="text-gray-600 font-body mb-4 text-sm leading-relaxed">
                  {edu.institute}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Result:</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-sage-green">{edu.result}</span>
                    <span className="text-gray-500 text-sm ml-1">{edu.resultType}</span>
                  </div>
                </div>

                {/* Progress bar for visual appeal */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${edu.color} transition-all duration-1000 group-hover:w-full`}
                      style={{ 
                        width: edu.resultType === 'CGPA' ? '96%' : 
                               edu.resultType === '/ 1000' ? '95%' : '100%' 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
