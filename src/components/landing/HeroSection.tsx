import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-600" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-900" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div>
            {/* Badge */}
            <div className="opacity-0 animate-fade-in mb-6 text-center px-2">
              <div className="inline-block px-3 py-2 md:px-6 md:py-3 rounded-full bg-primary/10 border border-primary/20">
                <div className="flex items-center justify-center gap-2 text-primary font-body font-semibold">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-sm md:text-xl lg:text-2xl">
                    Tenemos una{" "}
                    <span className="font-bold text-base md:text-2xl lg:text-3xl">Oportunidad única</span>
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> para ti en </span>
                    <span className="md:hidden"> en </span>
                    <span className="relative whitespace-nowrap font-bold text-base md:text-2xl lg:text-3xl">
                      Las Condes
                      <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5C20 2 40 2 60 5C80 8 100 8 118 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="opacity-0 animate-fade-in animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 text-center">
              Vuelve a <span className="text-gradient">sonreír, comer y hablar</span> con seguridad.
            </h1>

            {/* Subtitle */}
            <p className="opacity-0 animate-fade-in animation-delay-200 text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8 max-w-2xl mx-auto text-center">
              No es solo un diente. Es tu <strong className="font-bold text-foreground">sonrisa</strong>, tu <strong className="font-bold text-foreground">seguridad</strong> y tu <strong className="font-bold text-foreground">tranquilidad</strong>. Diseñamos implantes dentales que se ven, se sienten y funcionan como un diente <strong className="font-bold text-foreground">natural</strong>, utilizando tecnología y materiales premium, con un <strong className="font-bold text-foreground">enfoque humano</strong> para un proceso <strong className="font-bold text-foreground">cómodo</strong>, <strong className="font-bold text-foreground">seguro</strong> y <strong className="font-bold text-foreground">sin dolor</strong>.
            </p>

            {/* Video Section */}
            <div className="opacity-0 animate-fade-in animation-delay-300 mb-8 max-w-2xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: '<script src="https://fast.wistia.com/player.js" async></script><script src="https://fast.wistia.com/embed/vfrkdgny63.js" async type="module"></script><wistia-player media-id="vfrkdgny63" aspect="1.7777777777777777" style="width:100%;height:100%"></wistia-player>'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="opacity-0 animate-fade-in animation-delay-300 flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://wa.me/56996008545" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Agenda tu sesión con nosotros
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="opacity-0 animate-fade-in animation-delay-400 flex flex-wrap gap-6 items-center justify-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-xs font-bold text-hb-white"
                    >
                      {["A", "M", "J", "R"][i - 1]}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-body">+500 vidas transformadas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
