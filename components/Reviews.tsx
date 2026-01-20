import React from 'react';
import { Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    author: "Elena Vasquez",
    role: "CTO",
    company: "FinTech Nova",
    content: "Alejandro Robin no solo implementó tecnología, cambió nuestra forma de pensar sobre los datos. El ROI fue evidente en el primer trimestre."
  },
  {
    id: 2,
    author: "Marc Duchamp",
    role: "Director de Innovación",
    company: "Logística Global",
    content: "La elegancia de sus soluciones es incomparable. Simplificaron procesos complejos con una interfaz de IA que nuestro equipo adoptó de inmediato."
  },
  {
    id: 3,
    author: "Sarah Jenkings",
    role: "CEO",
    company: "Creative Arch",
    content: "Buscábamos eficiencia y encontramos una revolución. Su enfoque boutique nos hizo sentir como su único cliente."
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="opiniones" className="py-24 bg-pearl">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-silver-900 text-center mb-16">
          Voces de la Transformación
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-lilac-50 p-8 rounded-tr-3xl rounded-bl-3xl relative">
              <Quote className="text-lilac-200 absolute top-6 left-6" size={48} />
              <div className="relative z-10 pt-8">
                <p className="text-silver-600 italic mb-8 text-lg leading-relaxed">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-silver-200 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/100/100?random=${review.id}`} alt={review.author} className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                  <div>
                    <h4 className="font-bold text-silver-900 text-sm">{review.author}</h4>
                    <p className="text-xs text-lilac-900 uppercase tracking-wider">{review.role}, {review.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;