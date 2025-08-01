import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Research Assistant – Human Activity Recognition",
      company: "NIT Durgapur",
      location: "NIT Durgapur",
      period: "Jan 2025 – Present",
      description: [
        "Developing lightweight DL models for real-time inference",
        "Using ONNX & TFLite for mobile/edge deployment",
        "Focus on embedded system integration"
      ],
      tags: ["Deep Learning", "ONNX", "TensorFlow Lite", "Embedded Systems"],
      current: true
    },
    {
      title: "Research Intern – Legal Statute Identification",
      company: "IIT Kharagpur",
      location: "IIT Kharagpur",
      period: "May 2025 – Present",
      description: [
        "Used BERT, Longformer, GPT on ILSI dataset",
        "Tackled label confusion and class imbalance",
        "Evaluated using macro-F1 and explainability metrics"
      ],
      tags: ["BERT", "Longformer", "GPT", "NLP", "Legal AI"],
      current: true
    },
    {
      title: "ISL to Text Model – Smart India Hackathon",
      company: "SIH 2024",
      location: "National Competition",
      period: "Sep 2024 – Nov 2024",
      description: [
        "Built gesture-to-text model using TensorFlow and MediaPipe",
        "Created custom dataset for Indian Sign Language",
        "Achieved finalist position in Smart India Hackathon"
      ],
      tags: ["TensorFlow", "MediaPipe", "Computer Vision", "Sign Language"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Work & Research Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building cutting-edge AI solutions and contributing to research
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary-glow opacity-50"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}>
                  <Card className="p-6 bg-card border-card-border hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                    {exp.current && (
                      <Badge variant="default" className="mb-4 bg-primary text-foreground">
                        Current Position
                      </Badge>
                    )}
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;