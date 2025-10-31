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

  // Asymmetrical shapes for photos
  const photoShapes = [
    { style: "clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);", width: "w-72", height: "h-80" },
    { style: "clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);", width: "w-64", height: "h-72" },
    { style: "clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);", width: "w-80", height: "h-96" },
    { style: "clip-path: circle(50% at 50% 50%);", width: "w-64", height: "h-64" },
    { style: "clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);", width: "w-72", height: "h-72" },
    { style: "clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);", width: "w-64", height: "h-80" },
    { style: "clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);", width: "w-80", height: "h-72" },
    { style: "clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);", width: "w-72", height: "h-96" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Moving background photos - top half */}
      <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 h-full overflow-x-hidden py-8"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Duplicate photos for infinite scroll effect */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 h-full items-center">
              {/* TODO: Replace these with your actual photos */}
              {photoShapes.map((shape, num) => (
                <div
                  key={`${setIndex}-${num + 1}`}
                  className={`${shape.width} ${shape.height} flex-shrink-0 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-foreground border-2 border-primary/30`}
                  style={{ clipPath: shape.style.split(": ")[1].replace(";", "") }}
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
