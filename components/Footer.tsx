import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-silver-900 border-t border-white/10 py-12 text-center text-silver-500 text-sm">
      <div className="container mx-auto px-6">
        <p className="mb-4">© 2024 Alejandro Robin. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;