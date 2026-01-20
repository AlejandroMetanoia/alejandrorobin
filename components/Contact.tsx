import React from 'react';
import { GradientButton } from './ui/gradient-button';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-silver-900 text-pearl relative overflow-hidden">
      {/* Abstract decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lilac-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif italic mb-6">
              Hablemos del futuro.
            </h2>
            <p className="text-silver-300 text-lg mb-10 max-w-md font-light">
              ¿Listo para el siguiente nivel? Cuéntenos sobre sus desafíos y descubra cómo la IA puede elevar su estándar corporativo.
            </p>

            <div className="space-y-4 text-silver-300">
              <p>Madrid, España</p>
              <p>halo@alejandrorobin.com</p>
              <p>+34 912 345 678</p>
            </div>
          </div>

          <form className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-silver-500 mb-2">Nombre</label>
                  <input type="text" className="w-full bg-transparent border-b border-silver-700 py-2 text-white focus:outline-none focus:border-lilac-500 transition-colors" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-silver-500 mb-2">Empresa</label>
                  <input type="text" className="w-full bg-transparent border-b border-silver-700 py-2 text-white focus:outline-none focus:border-lilac-500 transition-colors" placeholder="Empresa S.A." />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-silver-500 mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-silver-700 py-2 text-white focus:outline-none focus:border-lilac-500 transition-colors" placeholder="juan@empresa.com" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-silver-500 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-silver-700 py-2 text-white focus:outline-none focus:border-lilac-500 transition-colors resize-none" placeholder="¿Cómo podemos ayudarle?"></textarea>
              </div>

              <GradientButton type="button" className="w-full mt-4">
                Enviar Solicitud
              </GradientButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;