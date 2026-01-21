import React from 'react';

const steps = [
  {
    number: "01",
    title: "Estudio",
    text: "Analizaremos tus procesos actuales *de forma gratuita* y entenderemos en qué áreas la IA te ahorraría *dinero* y *horas* de trabajo."
  },
  {
    number: "02",
    title: "Honestidad",
    text: "Si, por el contrario su empresa *no necesita* IA ahora mismo (o creemos que no podemos ayudarle), *se informará* con total honestidad."
  },
  {
    number: "03",
    title: "Demostración",
    text: "Diseñamos la infraestructura. La prueba en su empresa, *sin compromiso*. Si no resulta productivo o no ve el valor, quedará en una *experiencia gratuita*."
  },
  {
    number: "04",
    title: "Implementación",
    text: "Si funciona, definimos detalles, precios, e integramos el *sistema final*."
  },
  {
    number: "05",
    title: "Evolución",
    text: "La IA se encuentra en constante evolución. *Nosotros* nos encargamos de integrar las *últimas novedades* para asegurar una *mejora* constante."
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

  return (
    <section id="proceso" className="bg-black relative h-screen overflow-hidden flex flex-col md:flex-row scroll-mt-20">
      {/* Left Column: Content */}
      <div className="w-full md:w-1/2 px-6 h-full flex flex-col justify-center">
        <div className="max-w-xl mx-auto md:mx-0 md:ml-auto md:pr-12 w-full">
          <div className="text-left mb-6">
            <span className="text-lilac-500 font-medium tracking-widest uppercase text-xs md:text-sm mb-1 block">Metodología</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              ¿Cómo Trabajamos?
            </h2>
          </div>

          <div className="flex flex-col gap-3 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="w-full">
                <div className="bg-gray-200 border border-gray-300 p-3 px-5 flex flex-row items-center text-left shadow-lg hover:-translate-y-1 transition-all duration-300 gap-4">
                  <div className="min-w-[2.5rem] w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-purple-700 font-serif font-bold text-lg shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-0.5">{step.title}</h3>
                    <p className="text-xs md:text-sm text-black leading-snug">
                      {renderText(step.text)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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