import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-gradient-to-b from-card via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pattern-dots" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium font-body mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Fusionamos <span className="text-gradient">Salud y Estética</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-6 leading-relaxed">
              En HB Clinic creemos en un principio fundamental:{" "}
              <strong className="text-foreground">no hay belleza sin salud</strong>. 
              Nuestro enfoque integral combina la precisión clínica con el arte dental 
              para crear sonrisas que son tanto funcionales como hermosas.
            </p>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              Cada tratamiento es personalizado, considerando tus facciones, tu personalidad 
              y tus objetivos. No creemos en sonrisas "de catálogo" – buscamos que tus 
              dientes se vean como tuyos, solo mejorados.
            </p>

            {/* Philosophy cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-display font-semibold text-foreground mb-1">
                  Well-Aging Dental
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  El bien-envejecer no solo aplica al rostro. Tu sonrisa es el marco de tu cara.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                <h4 className="font-display font-semibold text-foreground mb-1">
                  Experiencia Sin Estrés
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Protocolo "Sin Miedo" diseñado para pacientes que temen al dentista.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="card-premium p-8 md:p-10">
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">
              Visítanos
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Ubicación
                  </h4>
                  <p className="text-muted-foreground font-body">
                    Av. Manquehue Norte 151, of 708. Las Condes.
                    <br />
                    <span className="text-primary text-sm">Metro Manquehue</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Horarios
                  </h4>
                  <p className="text-muted-foreground font-body">
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                    <br />
                    Sábados: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Teléfono / WhatsApp
                  </h4>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+56998845161"
                      className="text-primary font-body hover:underline"
                    >
                      +569 9 884 5161
                    </a>
                    <a
                      href="tel:+56995216190"
                      className="text-primary font-body hover:underline"
                    >
                      +569 9 521 6190
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:hebeaclinic@gmail.com"
                    className="text-primary font-body hover:underline"
                  >
                    hebeaclinic@gmail.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Síguenos
                </h4>
                <a
                  href="https://instagram.com/hbclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-body font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  @hbclinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
