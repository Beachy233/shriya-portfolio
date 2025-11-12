import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 0.5;
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

  // Simple rectangular photos with varying dimensions
  const photoShapes = [
    { width: "w-64", height: "h-72" },
    { width: "w-80", height: "h-80" },
    { width: "w-72", height: "h-64" },
    { width: "w-96", height: "h-72" },
    { width: "w-64", height: "h-80" },
    { width: "w-72", height: "h-72" },
    { width: "w-80", height: "h-64" },
    { width: "w-72", height: "h-80" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Moving background photos - top half */}
      <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-1 h-full overflow-x-hidden py-8"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Duplicate photos for infinite scroll effect */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-1 h-full items-center">
              {/* TODO: Replace these with your actual photos */}
              {photoShapes.map((shape, num) => (
                <div
                  key={`${setIndex}-${num + 1}`}
                  className={`${shape.width} ${shape.height} flex-shrink-0 bg-gradient-to-br from-primary/30 to-secondary/40 flex items-center justify-center text-foreground/80 border border-primary/20`}
                >
                  Photo {num + 1}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background pointer-events-none"></div>
      
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
