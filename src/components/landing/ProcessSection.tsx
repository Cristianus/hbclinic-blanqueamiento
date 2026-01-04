import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Contáctanos y agenda tu sesión por nuestro canal de WhatsApp",
      description: "Escríbenos un mensaje directo. Te responderemos en menos de 1 hora.",
      iconColor: "#25D366",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Recibe tu evaluación personalizada",
      description: "Te agendamos una cita gratuita para analizar tu caso y diseñar tu plan.",
    },
    {
      number: "03",
      icon: ArrowRight,
      title: "Comienza tu transformación",
      description: "Inicia tu tratamiento con tecnología de vanguardia y resultados visibles.",
    },
  ];

  return (
    <section id="proceso" className="py-20 md:py-28 bg-gradient-to-b from-card via-background to-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pattern-dots" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium font-body mb-4">
            <MessageCircle className="w-4 h-4" />
            Simple y Rápido
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Así de Fácil es <span className="text-gradient">Comenzar</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            En solo 3 pasos puedes estar camino a la sonrisa de tus sueños.
            Sin complicaciones, sin esperas innecesarias.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
              )}

              <div className="card-premium p-8 text-center relative z-10 h-full">
                {/* Step number */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-body ${
                  index === 0 ? 'bg-[#25D366] text-white' : index === 2 ? 'bg-[#FF00FF] text-white' : 'bg-primary text-primary-foreground'
                }`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  index === 0 ? 'bg-[#25D366]/10' : index === 2 ? 'bg-[#FF00FF]/10' : 'bg-gradient-to-br from-primary/10 to-accent/10'
                }`}>
                  <step.icon className={`w-8 h-8 ${index === 0 ? 'text-[#25D366]' : index === 2 ? 'text-[#FF00FF]' : 'text-primary'}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
