import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Phone, ArrowRight } from "lucide-react";

interface CTASectionProps {
  variant?: "primary" | "dark";
  id?: string;
}

const CTASection = ({ variant = "primary", id = "agendar" }: CTASectionProps) => {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-hb-dark via-hb-dark to-primary/20"
          : "bg-gradient-to-br from-primary via-primary to-accent"
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-dots" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-hb-white/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-hb-white/5 rounded-full blur-2xl animate-float animation-delay-300" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hb-white mb-6">
            Visítanos en{" "}
            <span className="relative">
              Las Condes
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-accent"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </h2>

          {/* Ubicación */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <MapPin className="w-6 h-6 text-accent" />
              <p className="text-lg md:text-2xl text-hb-white font-body font-medium">
                Av. Manquehue Norte 151, Las Condes
              </p>
            </div>
            <p className="text-sm md:text-base text-hb-white/70 font-body">
              A pasos del metro Manquehue
            </p>
          </div>

          <p className="text-lg md:text-xl text-hb-white/80 font-body mb-8 max-w-xl mx-auto">
            Agenda tu evaluación gratuita hoy. Nuestro equipo te espera para
            diseñar el plan perfecto para tu sonrisa.
          </p>

          {/* Google Maps */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.3461944587745!2d-70.60364!3d-33.40858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf7f8f7b8b8b%3A0x1!2sAv.%20Manquehue%20Nte.%20151%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación HB Clinic"
            ></iframe>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant={isDark ? "hero" : "heroOutline"}
              size="xl"
              className="group"
              asChild
            >
              <a href="https://wa.me/56996008545" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Agendar por WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="tel:+56996008545">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
