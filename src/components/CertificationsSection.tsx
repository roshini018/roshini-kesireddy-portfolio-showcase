
import { Award, Book, Trophy } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Introduction to AI Tools',
      issuer: 'Tech Program (College)',
      icon: <Award className="w-6 h-6" />,
      color: 'from-sage-green to-sage-green/70',
      badge: '🤖'
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'LetsUpgrade',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-sage-green/80 to-sage-green/60',
      badge: '🔒'
    },
    {
      title: 'JAVA Programming',
      issuer: 'NPTEL',
      icon: <Book className="w-6 h-6" />,
      color: 'from-sage-green/70 to-sage-green/50',
      badge: '☕'
    }
  ];

  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Certifications & Courses
          </h2>
          <div className="w-24 h-1 bg-sage-green mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group animate-fade-in bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6 text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white mb-4`}>
                    {cert.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {cert.badge}
                  </div>
                </div>

                <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-sage-green font-medium text-sm mb-4">
                  {cert.issuer}
                </p>

                <div className="inline-flex items-center px-3 py-1 bg-sage-green/10 text-sage-green text-xs font-medium rounded-full">
                  ✅ Completed
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
