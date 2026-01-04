import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Duele el tratamiento con implantes?",
    answer:
      "No. Con nuestra anestesia computarizada y protocolo especial, los pacientes reportan estar 'casi dormidos' durante el procedimiento. El post-operatorio puede tener molestia leve, completamente controlable con medicación.",
  },
  {
    question: "¿Cuánto dura un implante dental?",
    answer:
      "Con higiene adecuada, 20-30 años o más. Algunos llegan a 40+ años. Lo importante es el mantenimiento periódico y seguir las indicaciones de cuidado.",
  },
  {
    question: "¿Las carillas se ven falsas?",
    answer:
      "No en HB Clinic. Diseñamos carillas que se ven como tus dientes naturales, solo mejorados. Respetamos la forma de tu cara y tus proporciones faciales para un resultado 100% natural.",
  },
  {
    question: "¿Es verdad que sangrar es normal al cepillarse?",
    answer:
      "¡No! Si tu encía sangra al cepillarte, es una señal de alerta de inflamación gingival. Debe ser evaluado profesionalmente para evitar problemas mayores como pérdida dental.",
  },
  {
    question: "¿Cuánto cuesta un tratamiento?",
    answer:
      "Cada caso es diferente. Por eso ofrecemos evaluación inicial gratuita donde te damos presupuesto transparente, sin sorpresas, y opciones de financiación. No hay compromiso.",
  },
  {
    question: "¿Qué incluye la evaluación gratuita?",
    answer:
      "Una consulta de 45 minutos que incluye: diagnóstico digital completo, explicación clara de tu situación, opciones de tratamiento, presupuesto por escrito y tiempo para resolver todas tus dudas.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pattern-dots" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium font-body mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Resolvemos Tus <span className="text-gradient">Dudas</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Las preguntas más comunes que nos hacen nuestros pacientes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium border-0 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body mb-4">
            ¿Tienes más preguntas?
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline"
          >
            Escríbenos por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
