
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Computer Science Student',
    'Full-Stack Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const delay = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pale-mint/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-800 mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-sage-green to-sage-green/70 bg-clip-text text-transparent">
                Roshini
              </span>{' '}
              👋
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-body h-12 flex items-center justify-center">
              <span className="mr-2">A passionate</span>
              <span className="text-sage-green font-semibold border-r-2 border-sage-green animate-blink min-w-[300px] text-left">
                {displayText}
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-body leading-relaxed">
            with a love for building clean, functional web experiences and solving complex problems through innovative code solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-sage-green hover:bg-sage-green/90 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              View Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-sage-green hover:text-sage-green/70 transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
