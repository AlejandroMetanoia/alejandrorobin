import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "¿Qué industrias se benefician más de sus servicios?",
    answer: "Aunque nuestra metodología es agnóstica a la industria, tenemos profunda experiencia en Finanzas, Logística, Salud y Retail de Lujo, donde el manejo de datos complejos y la experiencia del cliente son críticos."
  },
  {
    id: 2,
    question: "¿Necesito un equipo técnico interno para trabajar con Alejandro Robin?",
    answer: "No necesariamente. Podemos actuar como su brazo técnico completo o colaborar estrechamente con su equipo de TI existente para transferir conocimiento."
  },
  {
    id: 3,
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Nuestros sprints iniciales de 'Quick Wins' suelen mostrar valor en 4-6 semanas. Transformaciones profundas completas generalmente operan en un ciclo de 3 a 6 meses."
  },
  {
    id: 4,
    question: "¿Cómo garantizan la privacidad de nuestros datos?",
    answer: "La seguridad es primordial. Implementamos arquitecturas de IA privadas (on-premise o VPC), asegurando que sus datos nunca se utilicen para entrenar modelos públicos."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-silver-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-lilac-500 font-medium tracking-widest uppercase text-sm mb-2 block">Dudas Comunes</span>
          <h2 className="text-4xl md:text-5xl font-serif text-silver-900">
            Claridad ante todo
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`border border-silver-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-lilac-50/50 shadow-sm' : 'hover:bg-silver-50'}`}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg font-medium ${openIndex === index ? 'text-lilac-900' : 'text-silver-700'}`}>
                  {item.question}
                </span>
                <span className="text-lilac-500 ml-4">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-silver-500 leading-relaxed">
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