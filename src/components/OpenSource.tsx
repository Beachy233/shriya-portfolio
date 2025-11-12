import { GitPullRequest, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

// TODO: Replace with your actual contributions
const contributions = [
  {
    title: "Contribution Title 1",
    project: "Project Name",
    description: "Brief description of your contribution and its impact.",
    link: "https://github.com/project/repo/pull/123",
  },
  {
    title: "Contribution Title 2",
    project: "Project Name",
    description: "Brief description of your contribution and its impact.",
    link: "https://github.com/project/repo/pull/456",
  },
];

const OpenSource = () => {
  return (
    <section id="opensource" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My open source Contributions - <span className="text-primary">Active Microsoft Contributor</span>
        </h2>

        <div className="space-y-6">
          {contributions.map((contribution, index) => (
            <div
              key={contribution.title}
              className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GitPullRequest className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold">{contribution.title}</h3>
                  </div>
                  
                  <p className="text-sm text-primary/80 mb-2">{contribution.project}</p>
                  
                  <p className="text-muted-foreground">
                    {contribution.description}
                  </p>
                </div>

                <Button
                  variant="outline"
                  onClick={() => window.open(contribution.link, "_blank")}
                  className="shrink-0"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View PR
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
