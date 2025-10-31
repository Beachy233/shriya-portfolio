import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Certifications from "@/components/Certifications";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="scroll-fade-in">
        <About />
      </div>
      <div className="scroll-fade-in">
        <Skills />
      </div>
      <div className="scroll-fade-in">
        <Projects />
      </div>
      <div className="scroll-fade-in">
        <OpenSource />
      </div>
      <div className="scroll-fade-in">
        <Certifications />
      </div>
      <div className="scroll-fade-in">
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
