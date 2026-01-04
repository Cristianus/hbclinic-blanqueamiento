import { Check, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const benefits = [
  { text: "Evaluación y planificación por especialistas", value: "$45.000" },
  { text: "Cirugía de implante dental en pabellón clínico", value: "$480.000" },
  { text: "Implante de titanio de alta calidad y biocompatible", value: "$130.000" },
  { text: "Corona definitiva sobre implante incluida", value: "$520.000" },
  { text: "Cirugía con protocolo de mínima invasión", value: null },
  { text: "Controles postoperatorios incluidos", value: "$75.000" },
  { text: "Indicaciones claras y acompañamiento profesional", value: null },
  { text: "Garantía de hasta 10 años sobre el implante*", value: null },
];

const ImplantPackSection = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-primary/20 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 md:p-8 text-center">
              <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium font-body mb-3">
                Cupos limitados
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white">
                Pack Implante Integral
              </h2>
            </div>
            
            {/* Countdown Timer */}
            <div className="bg-destructive/10 border-b border-destructive/20 p-4">
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-destructive animate-pulse" />
                <span className="text-foreground font-body font-medium">
                  Oferta expira en:
                </span>
                <span className="text-2xl font-display font-bold text-destructive">
                  {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-10">
              {/* Pricing */}
              <div className="text-center mb-8">
                <p className="text-muted-foreground font-body text-lg mb-2">
                  Precio lanzamiento: desde
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <span className="text-4xl md:text-5xl font-display font-bold text-primary">
                    $749.990
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-muted-foreground/60 font-body">Antes:</span>
                    <span className="text-xl md:text-2xl font-body text-muted-foreground/60 line-through">
                      $1.250.000
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-center text-foreground font-body text-lg mb-8">
                Todo incluido para recuperar tu sonrisa con seguridad:
              </p>
              
              {/* Benefits list - Single column */}
              <div className="flex flex-col gap-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground font-body text-sm md:text-base">
                        {benefit.text}
                      </span>
                      {benefit.value && (
                        <span className="text-foreground font-body font-bold text-sm md:text-base mt-1">
                          Valor referencial {benefit.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="bg-muted/50 rounded-xl p-4 mb-6 text-center">
                <p className="text-muted-foreground font-body text-sm mb-1">
                  Valor total si contratas por separado:
                </p>
                <p className="text-2xl font-display font-bold text-foreground line-through">
                  $1.250.000
                </p>
              </div>

              {/* Highlighted launch price */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-6 text-center border border-primary/30">
                <p className="text-foreground font-body font-medium mb-2">
                  Precio de lanzamiento:
                </p>
                <p className="text-4xl md:text-5xl font-display font-bold text-primary">
                  $749.990
                </p>
                <p className="text-accent font-body font-bold text-lg mt-2">
                  ¡Ahorras más de $500.000!
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <Users className="w-4 h-4 text-destructive" />
                  <span className="text-destructive font-body font-bold">
                    ¡Solo 10 cupos disponibles!
                  </span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="text-center mb-6">
                <Button
                  variant="cta"
                  size="xl"
                  className="w-full"
                  onClick={() => window.open("https://wa.me/56912345678?text=Hola,%20me%20interesa%20el%20Pack%20Implante%20Integral", "_blank")}
                >
                  Quiero mi Pack Implante
                </Button>
              </div>
              
              {/* Disclaimer */}
              <p className="text-center text-muted-foreground/60 font-body text-xs md:text-sm">
                *La garantía aplica al implante y está sujeta al cumplimiento de controles y cuidados indicados por el profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantPackSection;
