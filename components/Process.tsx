import React from 'react';

const steps = [
  {
    number: "01",
    title: "Diagnóstico y Estrategia ROI (Sin coste)",
    text: "Realizamos una inmersión gratuita para detectar fricciones y diseñar una solución alineada a tus objetivos. Definimos el alcance estratégico asegurando que cada inversión genere un retorno financiero tangible y medible."
  },
  {
    number: "02",
    title: "Arquitectura y Desarrollo IA",
    text: "Construimos la infraestructura técnica utilizando los stacks de IA más avanzados. Desarrollamos sistemas robustos y personalizados que se integran orgánicamente en tu operativa, transformando la visión estratégica en una realidad funcional."
  },
  {
    number: "03",
    title: "Optimización y Refinamiento",
    text: "Sometemos la solución a pruebas de estrés y análisis de datos reales para garantizar máxima precisión. Ajustamos cada parámetro de los modelos para asegurar una eficiencia operativa óptima antes del despliegue final."
  },
  {
    number: "04",
    title: "Despliegue y Escalabilidad",
    text: "Lanzamos la solución y lideramos la adopción tecnológica en tu equipo. Establecemos las bases para un crecimiento continuo, permitiendo que el sistema escale y evolucione al ritmo de las necesidades de tu negocio."
  }
];

const Process: React.FC = () => {
  const renderText = (text: string) => {
    return text.split('*').map((part, index) => {
      // Even indices are normal text, odd indices are bold text
      if (index % 2 === 1) {
        return <strong key={index} className="font-semibold text-black">{part}</strong>;
      }
      return part;
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="proceso" className="bg-black relative h-screen pt-24 overflow-hidden flex flex-col md:flex-row">
      {/* Left Column: Content */}
      <div className="w-full md:w-1/2 px-6 h-full flex flex-col justify-center pb-8">
        <div className="max-w-2xl mx-auto md:mx-0 md:ml-auto md:pr-6 w-full">
          <div className="text-left mb-6">
            <span className="text-lilac-500 font-medium tracking-widest uppercase text-xs md:text-sm mb-1 block">Metodología</span>
            <h2 className="text-2xl md:text-4xl font-serif text-white">
              ¿Cómo Trabajamos?
            </h2>
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="w-full">
                <div className="bg-gray-200 border border-gray-300 p-4 px-6 flex flex-row items-center text-left shadow-lg hover:-translate-y-1 transition-all duration-300 gap-5">
                  <div className="min-w-[2.5rem] w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-purple-700 font-serif font-bold text-lg shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-purple-700 mb-0.5">{step.title}</h3>
                    <p className="text-xs text-black leading-snug">
                      {renderText(step.text)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Section */}
            <div className="mt-5 pt-3 border-t border-gray-800/30">
              <p className="text-gray-300 text-xs md:text-sm italic leading-relaxed">
                "El primer paso hacia la eficiencia no tiene coste. <button onClick={scrollToContact} className="text-lilac-400 hover:text-lilac-300 underline underline-offset-2 font-medium transition-colors">Agenda tu sesión de diagnóstico estratégico</button> y descubramos juntos las oportunidades de escala que la IA tiene para tu negocio."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-full relative text-right">
        <img
          src="/process-image.png"
          alt="Process"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent"></div>
      </div>
    </section>
  );
};

export default Process;