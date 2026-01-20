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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pearl/20 to-pearl z-10 mix-blend-overlay"></div>
          <img
            src="https://yrqlsyfpunmiisijauob.supabase.co/storage/v1/object/sign/Web/0109-ezgif.com-video-to-webp-converter.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iOTA1MTQzYy05ZWU2LTQ3YTQtODRhNy04ZDYxZDkwMDE0ZTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIvMDEwOS1lemdpZi5jb20tdmlkZW8tdG8td2VicC1jb252ZXJ0ZXIud2VicCIsImlhdCI6MTc2Nzk1NjU4NywiZXhwIjoxODMxMDI4NTg3fQ.zrRxiI3_wvcDjOtznkq5_Ws3nl2s7aaWRgHsFrfeQUE"
            alt="AI Transformation"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/10 backdrop-contrast-125 z-0"></div>
        </div>

        {/* Content Overlay */}
        <div
          className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 md:px-0"
          style={{ opacity: opacity, transform: `translateY(${-scrollProgress * 50}px)` }}
        >
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center animate-fade-in-up">

            {/* Text Group */}
            <div className="space-y-4 mt-4 md:mt-8">
              <h2 className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-silver-900 mb-4">
                Inteligencia Artificial & Estrategia
              </h2>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic font-bold text-silver-900 tracking-tighter mb-2 mix-blend-multiply">
                Alejandro Robin
              </h1>
              <p className="text-2xl md:text-4xl font-light text-silver-500 mb-8 tracking-wide">
                Transformación de pensamiento
              </p>
              <p className="text-lg text-silver-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Redefinimos el futuro de su empresa integrando inteligencia artificial.
              </p>
            </div>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center mt-24 sm:mt-20 md:mt-32">
              <GradientButton
                onClick={() => scrollToSection('proceso')}
                className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base"
              >
                Conocer Más
              </GradientButton>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;