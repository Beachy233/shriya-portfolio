import { ExternalLink, Github, FileText, Video } from "lucide-react";
import { Button } from "./ui/button";

// TODO: Replace with your actual projects
const projects = [
  {
    title: "Project Name 1",
    description: "Brief description of your project. Explain what it does and what technologies were used.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project1",
    readme: "https://github.com/yourusername/project1#readme",
    demo: "https://youtube.com/watch?v=demo1",
  },
  {
    title: "Project Name 2",
    description: "Brief description of your project. Explain what it does and what technologies were used.",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/yourusername/project2",
    readme: "https://github.com/yourusername/project2#readme",
    demo: "https://youtube.com/watch?v=demo2",
  },
  {
    title: "Project Name 3",
    description: "Brief description of your project. Explain what it does and what technologies were used.",
    tags: ["TypeScript", "React", "TailwindCSS"],
    github: "https://github.com/yourusername/project3",
    readme: "https://github.com/yourusername/project3#readme",
    demo: "https://youtube.com/watch?v=demo3",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(project.readme, "_blank")}
                >
                  <FileText className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <Video className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
