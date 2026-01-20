import React, { useRef, useEffect, useState } from 'react';
import { GradientButton } from './ui/gradient-button';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress relative to the container's sticky duration
      // 'top' is negative as we scroll down
      const distance = height - windowHeight;
      const scrolled = -top;

      let progress = scrolled / distance;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Visual transformations
  // Scale starts at 1.08 as requested
  const scale = 1.08 + scrollProgress * 0.3;
  const opacity = 1 - scrollProgress * 1.5;
  const blur = scrollProgress * 8;

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-pearl">

        {/* Background Layer */}
        <div
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            transform: `scale(${scale})`,
            filter: `blur(${blur}px)`,
            transition: 'transform 0.05s linear' // Smooth out jitter
          }}
        >
          <img
            src="/alejandro-robin-hero.jpg"
            alt="Alejandro Robin"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Overlay */}
        <div
          className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 md:px-0"
          style={{ opacity: opacity, transform: `translateY(${-scrollProgress * 50}px)` }}
        >
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center animate-fade-in-up">

            {/* Text Group */}
            {/* Text Group */}
            {/* Text Group - Decoupled */}
            <h2 className="absolute top-[43vh] left-0 right-0 text-center mx-auto text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-gray-300 mb-2 drop-shadow-xl z-30">
              Inteligencia Artificial & Estrategia
            </h2>

            <h1 className="absolute top-[48vh] left-0 right-0 text-center mx-auto text-6xl md:text-8xl lg:text-9xl font-serif italic font-bold text-white tracking-tighter mix-blend-normal drop-shadow-xl z-30">
              Alejandro Robin
            </h1>

            <div className="absolute top-[75vh] left-0 right-0 flex justify-center z-30">
              <GradientButton
                onClick={() => scrollToSection('proceso')}
                className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base"
              >
                Conocer Más
              </GradientButton>
            </div>

            <p className="absolute bottom-10 left-8 text-lg text-white text-left max-w-2xl px-4 leading-relaxed drop-shadow-xl font-medium">
              Redefinimos el futuro de su empresa integrando inteligencia artificial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;