const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo placeholder - circular */}
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-muted-foreground">
                {/* TODO: Add your photo here */}
                <span className="text-sm text-center px-6">Your Photo Here</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/50 rotate-45"></div>
          </div>

          {/* About content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hi! I'm <span className="text-foreground font-semibold">Shriya Sharma</span> — a Computer Science student passionate about building practical and impactful tech solutions.
              </p>
              
              <p className="text-lg">
                I love transforming ideas into simple, meaningful tools that bridge the gap between technology and real-world problems.
              </p>
            </div>

            {/* Quick stats or highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">CS</div>
                <div className="text-sm text-muted-foreground">Student</div>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">Tech</div>
                <div className="text-sm text-muted-foreground">Enthusiast</div>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">Builder</div>
                <div className="text-sm text-muted-foreground">Problem Solver</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
