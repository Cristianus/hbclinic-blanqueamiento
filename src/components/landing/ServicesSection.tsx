import {
  Heart,
  Zap,
  Syringe,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Periodoncia",
    description: "Tratamiento de encías, la base de una sonrisa saludable y duradera.",
  },
  {
    icon: Zap,
    title: "Implantología",
    description: "Recupera dientes perdidos con tecnología de última generación.",
  },
  {
    icon: Stethoscope,
    title: "Rehabilitación Oral",
    description: "Restauración completa de la función y estética de tu boca.",
  },
  {
    icon: Syringe,
    title: "Endodoncia",
    description: "Tratamientos de conducto para salvar dientes dañados sin dolor.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 pattern-dots" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Services */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium font-body mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Especialidades <span className="text-gradient">Odontológicas</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Todo lo que tu salud oral necesita, desde prevenir hasta transformar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium p-6 group hover:border-primary/30 border border-transparent"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
