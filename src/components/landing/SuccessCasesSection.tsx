import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import antesNuevo01 from "@/assets/antes-nuevo-01.png";
import despuesNuevo01 from "@/assets/despues-nuevo-01.png";

const beforeAfterImages = [
  { src: antesNuevo01, alt: "Antes del tratamiento" },
  { src: despuesNuevo01, alt: "Después del tratamiento" },
];

const SuccessCasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Counter animation hook
  const useCounter = (end: number, duration: number = 2000, suffix: string = "") => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!hasAnimated) return;

      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, hasAnimated]);

    return count + suffix;
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    { number: useCounter(500, 3000, "+"), label: "Pacientes Felices" },
    { number: useCounter(100, 3000, "%"), label: "Satisfacción" },
    { number: useCounter(10, 3000, "+"), label: "Años de Experiencia" },
  ];

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <section ref={sectionRef} id="casos" className="py-20 md:py-28 bg-gradient-to-b from-hb-dark via-hb-dark/95 to-hb-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pattern-dots" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium font-body mb-4">
            Resultados Reales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hb-white mb-4">
            Conoce Algunas <span className="text-gradient">Experiencias</span>
          </h2>
          <p className="text-hb-white/70 font-body text-lg max-w-2xl mx-auto">
            Cuando una sonrisa se transforma, todo alrededor también cambia: experiencias reales en HB Clinic.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={beforeAfterImages[currentIndex].src} 
              alt={beforeAfterImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevCase}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center transition-all shadow-lg"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextCase}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center transition-all shadow-lg"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-white/50 w-2 hover:bg-white/80"
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl" className="group" asChild>
            <a href="https://wa.me/56996008545" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5" />
              Agenda tu sesión con nosotros
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                {stat.number}
              </div>
              <div className="text-sm text-hb-white/60 font-body mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;
