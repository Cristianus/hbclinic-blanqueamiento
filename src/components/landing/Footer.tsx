import { Instagram, Facebook, Phone, Mail, MapPin, Train, Shield, Clock, Users, Heart, Stethoscope } from "lucide-react";

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hb-dark text-hb-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pattern-dots" />
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
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
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
        <div className="mb-16 text-center">
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

        {/* Footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold">
                HB <span className="text-primary">Clinic</span>
              </span>
            </a>
            <p className="text-hb-white/60 font-body text-sm leading-relaxed mb-6">
              Fusionamos la precisión clínica con el arte dental. Tu sonrisa, nuestra pasión.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/hebeaclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-hb-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/hbclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-hb-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Especialidades</h4>
            <ul className="space-y-3 font-body text-sm text-hb-white/60">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Periodoncia
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Implantología
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Rehabilitación Oral
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Endodoncia
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4 font-body text-sm text-hb-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Av. Manquehue Norte 151, of 708. Las Condes.</span>
              </li>
              <li className="flex items-center gap-3">
                <Train className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Metro Manquehue</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+56998845161" className="hover:text-primary transition-colors">
                    +569 9 884 5161
                  </a>
                  <a href="tel:+56995216190" className="hover:text-primary transition-colors">
                    +569 9 521 6190
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:hebeaclinic@gmail.com" className="hover:text-primary transition-colors">
                  hebeaclinic@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-hb-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hb-white/40 font-body text-sm">
            © {currentYear} HB Clinic. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm font-body text-hb-white/40">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
