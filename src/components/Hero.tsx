import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 0.3;
    const scrollInterval = 20;

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, scrollInterval);
    return () => clearInterval(interval);
  }, []);

  const photos = Array(8).fill(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen moving background with blur */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div
          ref={scrollRef}
          className="flex gap-0 h-full overflow-x-hidden"
          style={{ scrollBehavior: "auto", filter: "blur(8px)" }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-0 h-full">
              {photos.map((_, idx) => (
                <div
                  key={`${setIndex}-${idx}`}
                  className="min-w-[400px] h-full flex-shrink-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40"
                >
                  {/* TODO: Replace with actual images */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-background/40 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="block text-primary glow-text">Shriya Sharma</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science Student | Tech Enthusiast | Problem Solver
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
