import { Award, Trophy } from "lucide-react";

// TODO: Replace with your actual certifications and activities
const certifications = [
  {
    title: "Certification Name 1",
    issuer: "Issuing Organization",
    date: "Month Year",
  },
  {
    title: "Certification Name 2",
    issuer: "Issuing Organization",
    date: "Month Year",
  },
  {
    title: "Certification Name 3",
    issuer: "Issuing Organization",
    date: "Month Year",
  },
];

const extracurricular = {
  title: "Activity/Achievement 1",
  organization: "Organization Name",
  description: "Brief description of the activity or achievement",
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Certifications & <span className="text-primary">Extracurricular</span>
        </h2>

        <div className="space-y-8">
          {/* Extracurricular - Single Box */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Activity Achievement
            </h3>
            
            <div className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2">{extracurricular.title}</h4>
              <p className="text-primary text-sm mb-2">{extracurricular.organization}</p>
              <p className="text-muted-foreground text-sm">{extracurricular.description}</p>
            </div>
          </div>

          {/* Certifications - 3 Boxes */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
