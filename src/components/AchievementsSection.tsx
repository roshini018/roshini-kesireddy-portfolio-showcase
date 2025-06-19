
import { Trophy, Award } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Hackathon 2024',
      description: 'Selected for Round 2',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-sage-green to-sage-green/70',
      badge: '🥈'
    },
    {
      title: 'Classical Dance Competitions',
      description: 'Participated in College Events',
      icon: <Award className="w-6 h-6" />,
      color: 'from-sage-green/80 to-sage-green/60',
      badge: '💃'
    }
  ];

  return (
    <section className="py-20 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-sage-green mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group animate-fade-in bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${achievement.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} text-white mr-4`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-gray-800">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 font-body">
                      {achievement.description}
                    </p>
                  </div>
                  <div className="text-3xl">
                    {achievement.badge}
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

export default AchievementsSection;
