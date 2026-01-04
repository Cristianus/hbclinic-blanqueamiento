import { Shield, Clock, Users, Heart, Stethoscope } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantía de Calidad",
    description: "Materiales premium y estándares internacionales en todos nuestros tratamientos. Garantía de 10 años sobre el implante.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos tu tiempo. Sin esperas innecesarias.",
  },
  {
    icon: Users,
    title: "Profesionales Capacitados",
    description: "Equipo de especialistas con formación continua y certificaciones actualizadas.",
  },
];

const certifications = [
  "Clínica Certificada",
  "Tecnología de Vanguardia",
  "Protocolos Internacionales",
  "Materiales Premium",
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-hb-dark via-hb-dark/95 to-hb-dark relative overflow-hidden border-y border-primary/10">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20 pattern-dots" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Certifications Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-hb-white/70 font-body text-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>{cert}</span>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-center md:text-left md:flex-row flex-col items-center md:items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-hb-white mb-1">
                  {item.title}
                </h4>
                <p className="text-hb-white/60 font-body text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-hb-white/5 backdrop-blur-sm border border-hb-white/10 rounded-full">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-destructive fill-current" />
              <span className="text-sm font-body text-hb-white/70">
                Más de 500 vidas transformadas desde 2014
              </span>
            </div>
            <div className="w-px h-4 bg-hb-white/20" />
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-hb-white/70">
                Equipo de especialistas certificados
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
