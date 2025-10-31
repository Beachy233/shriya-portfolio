import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  // TODO: Replace with your actual social links
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
    },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Social links */}
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(social.url, "_blank")}
                  className="hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon className="w-5 h-5" />
                </Button>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Shriya Sharma
            </p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
