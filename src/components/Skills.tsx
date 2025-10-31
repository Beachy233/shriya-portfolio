import { Code, Layers, Wrench, BookOpen, GraduationCap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      // TODO: Add your programming languages here
      "Python", "Java", "C++", "JavaScript", "TypeScript"
    ],
  },
  {
    title: "Libraries/Frameworks",
    icon: Layers,
    skills: [
      // TODO: Add your frameworks here
      "React", "Node.js", "Express", "TailwindCSS", "Django"
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      // TODO: Add your tools here
      "Git", "Docker", "MongoDB", "PostgreSQL", "AWS"
    ],
  },
  {
    title: "Other Skills",
    icon: BookOpen,
    skills: [
      // TODO: Add your other skills here
      "Problem Solving", "Team Collaboration", "UI/UX Design", "Agile", "Leadership"
    ],
  },
  {
    title: "Coursework",
    icon: GraduationCap,
    skills: [
      // TODO: Add your coursework here
      "Data Structures", "Algorithms", "Database Systems", "Web Development", "Machine Learning"
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-background/50 border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
