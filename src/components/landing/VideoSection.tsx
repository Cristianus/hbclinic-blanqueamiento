import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium font-body mb-4">
            Descubre HB Clinic
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Conoce Nuestra <span className="text-gradient">Experiencia</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Mira cómo transformamos sonrisas y vidas con tecnología de vanguardia y un equipo apasionado.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg group w-full">
            {/* Video Placeholder/Thumbnail */}
            {!isPlaying ? (
              <div className="absolute inset-0 bg-black/5">
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300"
                    aria-label="Reproducir video"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                  </button>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 text-hb-white/50 font-display text-sm">
                  HB Clinic
                </div>
                <div className="absolute bottom-4 right-4 text-hb-white/50 font-body text-sm">
                  2:45
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Replace with actual video embed */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="HB Clinic Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Video caption */}
          <p className="text-center text-muted-foreground font-body text-sm mt-4">
            * Resultados reales de pacientes de HB Clinic
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
