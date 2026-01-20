import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GradientButton } from './ui/gradient-button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Proyectos', id: 'proyectos' },
    { name: 'Proceso', id: 'proceso' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 backdrop-blur-sm ${isScrolled
        ? 'bg-pearl/80 border-b border-silver-100 py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`text-2xl font-serif italic font-bold tracking-tight transition-colors duration-300 drop-shadow-lg ${isScrolled ? 'text-silver-900' : 'text-silver-900'}`}
        >
          Alejandro Robin.
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-silver-500 hover:text-lilac-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <GradientButton
            onClick={() => scrollToSection('contacto')}
            className="px-6 py-2 min-w-[120px] rounded-full text-sm"
          >
            Contacto
          </GradientButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-silver-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-pearl border-b border-silver-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-lg font-medium text-silver-900"
            >
              {link.name}
            </button>
          ))}
          <GradientButton
            onClick={() => scrollToSection('contacto')}
            className="w-full"
          >
            Contacto
          </GradientButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;