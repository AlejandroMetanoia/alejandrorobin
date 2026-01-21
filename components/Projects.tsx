import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    link?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Neverita",
        category: "App Web para Seguimiento de Dieta",
        description: "Con ayuda de la IA, hemos creado esta aplicación web con funciones inteligentes, para registrar alimentos y llevar un seguimiento de dieta. Haz click para echarle un vistazo.",
        image: "/neverita-project.png",
        link: "https://neverita-indol.vercel.app/"
    },
    {
        id: 2,
        title: "Quantum Logistics",
        category: "Supply Chain",
        description: "Optimización de rutas de distribución global utilizando algoritmos genéticos para reducir la huella de carbono un 40%.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 3,
        title: "Aether Health",
        category: "MedTech",
        description: "Plataforma de diagnóstico asistido por IA que procesa imágenes médicas con una precisión del 99.8%.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 4,
        title: "Nexus Retail",
        category: "E-Commerce",
        description: "Personalización hiper-segmentada para experiencias de compra de lujo, incrementando la conversión un 150%.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600",
    }
];

const Projects: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.7; // Scroll by roughly one card width
            const currentScroll = container.scrollLeft;
            const targetScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    const handleProjectClick = (link?: string) => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <section id="proyectos" className="pt-12 pb-12 bg-gray-50 border-b border-silver-100 overflow-hidden flex flex-col relative">
            <div className="container mx-auto px-6 mb-8 flex items-end justify-between flex-shrink-0">
                <div>
                    <span className="text-lilac-500 font-medium tracking-widest uppercase text-sm mb-2 block animate-fade-in">
                        Portafolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-black animate-fade-in-up">
                        Proyectos
                    </h2>
                </div>

                {/* Navigation Controls */}
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="p-3 rounded-full border border-silver-300 text-silver-500 hover:border-lilac-500 hover:text-lilac-500 transition-all duration-300"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-3 rounded-full border border-silver-300 text-silver-500 hover:border-lilac-500 hover:text-lilac-500 transition-all duration-300"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-8 px-6 pb-4 snap-x snap-mandatory no-scrollbar flex-shrink-0"
                style={{ scrollPaddingLeft: '24px', scrollPaddingRight: '24px' }}
            >
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => handleProjectClick(project.link)}
                        className="min-w-[90vw] md:min-w-[70vw] snap-center group relative overflow-hidden bg-silver-50 cursor-pointer"
                    >
                        {/* Image Layer */}
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>

                        {/* Content Layer */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-gray-300 text-sm font-medium tracking-wider uppercase mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-serif text-white mb-2">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <ArrowUpRight className="text-white" size={24} />
                                </div>
                            </div>

                            <p className="text-lilac-300 text-lg line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Spacer for right-side padding in scroll */}
                <div className="min-w-[1px] h-full"></div>
            </div>
        </section>
    );
};

export default Projects;
