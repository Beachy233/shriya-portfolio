import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";

// TODO: Replace with actual reviews from teachers and friends
const reviews = [
  {
    name: "Teacher Name 1",
    role: "Professor / Subject",
    review: "Add a testimonial from your teacher here. This could be about your academic performance, projects, or dedication.",
  },
  {
    name: "Friend/Colleague Name 1",
    role: "Classmate / Position",
    review: "Add a testimonial from a friend or colleague here. This could be about teamwork, collaboration, or skills.",
  },
  {
    name: "Teacher Name 2",
    role: "Professor / Subject",
    review: "Add another testimonial from your teacher here. Highlight different aspects of your abilities.",
  },
  {
    name: "Friend/Colleague Name 2",
    role: "Classmate / Position",
    review: "Add another testimonial from a friend or colleague here. Share their perspective on your work ethic.",
  },
];

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, scrollInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-24 px-6 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          What People <span className="text-primary">Say</span>
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-6"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate reviews for infinite scroll effect */}
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-xl min-w-[350px] md:min-w-[400px] flex-shrink-0"
          >
            <Quote className="w-8 h-8 text-primary mb-4" />
            
            <p className="text-muted-foreground mb-6 italic">
              "{review.review}"
            </p>

            <div className="border-t border-border pt-4">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-primary">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
