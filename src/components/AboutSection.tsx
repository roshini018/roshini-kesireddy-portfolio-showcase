
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-sage-green mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-sage-green/20 to-pale-mint/30 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👩‍💻</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-sage-green/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pale-mint/30 rounded-full blur-xl"></div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="prose prose-lg text-gray-600 font-body">
              <p className="text-lg leading-relaxed mb-6">
                I'm currently pursuing <span className="font-semibold text-sage-green">B.Tech in Computer Science</span> at 
                KITS Warangal with a strong interest in full-stack development. I enjoy building responsive web apps 
                and solving logical problems through clean code.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                I've completed hands-on projects ranging from personal portfolios to e-commerce clones, 
                and actively participate in technical and cultural events. My passion lies in creating 
                user-friendly applications that solve real-world problems.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-cream/50 rounded-lg">
                  <div className="text-2xl font-bold text-sage-green">9.61</div>
                  <div className="text-sm text-gray-600">Current CGPA</div>
                </div>
                <div className="text-center p-4 bg-pale-mint/30 rounded-lg">
                  <div className="text-2xl font-bold text-sage-green">5+</div>
                  <div className="text-sm text-gray-600">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
