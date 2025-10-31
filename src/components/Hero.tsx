import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background animate-gradient opacity-50"></div>
      
      {/* Floating shapes for visual interest */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block mb-2">Shriya Sharma</span>
            <span className="text-primary glow-text">Portfolio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science Student | Tech Enthusiast | Problem Solver
          </p>

          {/* Placeholder for hero images - user can add their photos here */}
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            {/* TODO: Add your photos here */}
            <div className="w-48 h-48 glass-card rounded-lg flex items-center justify-center text-muted-foreground">
              Photo 1
            </div>
            <div className="w-48 h-48 glass-card rounded-lg flex items-center justify-center text-muted-foreground">
              Photo 2
            </div>
            <div className="w-48 h-48 glass-card rounded-lg flex items-center justify-center text-muted-foreground">
              Photo 3
            </div>
          </div>
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
