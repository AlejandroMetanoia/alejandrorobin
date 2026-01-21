import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "¿Cómo garantizan que la inversión en IA sea rentable?",
    answer: "Nuestro proceso comienza con un diagnóstico gratuito donde evaluamos la viabilidad financiera. No implementamos tecnología por moda; diseñamos soluciones basadas en el ROI proyectado, asegurando que el ahorro operativo o el incremento en ingresos justifique plenamente la inversión."
  },
  {
    id: 2,
    question: "¿Es seguro el manejo de los datos de mi empresa?",
    answer: "Totalmente. La privacidad es el pilar de nuestra arquitectura. Implementamos capas de seguridad avanzadas y utilizamos modelos que garantizan la confidencialidad absoluta: tus datos corporativos nunca se utilizan para entrenar modelos públicos y siempre permanecen bajo tu control."
  },
  {
    id: 3,
    question: "¿Necesita mi equipo conocimientos técnicos avanzados?",
    answer: "No. En Metanoia creamos soluciones con un enfoque de \"complejidad invisible\". Entregamos sistemas intuitivos que se integran en tus flujos actuales. Además, te acompañamos en la fase de adopción para asegurar que tu equipo saque el máximo provecho de la IA desde el primer día."
  },
  {
    id: 4,
    question: "¿Cuánto tiempo tarda en implementarse una solución?",
    answer: "Depende del alcance, pero nuestra metodología está diseñada para la agilidad. Priorizamos \"Quick Wins\" (victorias rápidas) que permiten ver resultados operativos en pocas semanas, permitiendo que la solución escale y evolucione de forma modular según crezcan tus necesidades."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-28 h-screen flex flex-col bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-lilac-500 font-medium tracking-widest uppercase text-sm mb-2 block">Dudas Comunes</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Claridad ante todo
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/5 shadow-sm border-lilac-500/30' : 'hover:bg-white/5'}`}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg font-medium ${openIndex === index ? 'text-lilac-300' : 'text-gray-200'}`}>
                  {item.question}
                </span>
                <span className="text-lilac-500 ml-4">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;