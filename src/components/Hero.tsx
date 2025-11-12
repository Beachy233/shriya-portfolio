import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
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
