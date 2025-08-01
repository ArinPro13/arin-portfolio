import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Brain, Globe, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Python", "JavaScript", "Java"],
      color: "text-primary"
    },
    {
      title: "AI/ML Libraries",
      icon: Brain,
      skills: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Pillow"],
      color: "text-accent"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "text-primary-glow"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Communication", "Teamwork", "Strategic Planning", "Adaptability", "Leadership"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="p-6 bg-card border-card-border hover:shadow-elegant transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-primary/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 cursor-default animate-scale-in"
                      style={{
                        animationDelay: `${(index * 0.2) + (skillIndex * 0.05)}s`
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;