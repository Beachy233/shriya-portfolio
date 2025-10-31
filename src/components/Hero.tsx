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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Moving background photos - top half */}
      <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden opacity-20">
        <div
          ref={scrollRef}
          className="flex gap-4 h-full overflow-x-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Duplicate photos for infinite scroll effect */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-4 h-full">
              {/* TODO: Replace these with your actual photos */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={`${setIndex}-${num}`}
                  className="h-full w-64 flex-shrink-0 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground border border-border"
                >
                  Photo {num}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      
      {/* Floating shapes for visual interest */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

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
