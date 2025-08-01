import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science student with a passion for AI and deep learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science student at the National Institute of Technology, Durgapur with a strong foundation 
              in deep learning, computer vision, and system programming. Proficient in C, C++, Python, and Java, 
              with hands-on experience in TensorFlow, OpenCV, and MediaPipe.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Skilled in developing AI models and database management (SQL, PostgreSQL). Passionate about solving 
              real-world problems through technology, optimizing algorithms, and building intelligent applications.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Education & Training
            </h3>
            
            {/* B.Tech */}
            <Card className="p-6 bg-card border-card-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    B.Tech in Computer Science and Engineering
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    National Institute of Technology, Durgapur
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Nov 2022 – Present | GPA: 8.55/10.0
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Courses: DSA, OS, DBMS, Deep Learning, CV, Compiler, CN, Embedded Systems
                  </p>
                </div>
              </div>
            </Card>

            {/* Winter School */}
            <Card className="p-6 bg-card border-card-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    Winter School - Deep Learning for Vision and Language
                  </h4>
                  <p className="text-accent font-medium mb-2">
                    IIT Guwahati
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Dec 2024 – Jan 2025
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Topics: NLP, Transformers, Computer Vision
                  </p>
                </div>
              </div>
            </Card>

            {/* Summer School */}
            <Card className="p-6 bg-card border-card-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    Summer School Adhyayan – Mathematics & CS
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    IIT Kanpur
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    2023
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Topics: Discrete Math, Complexity Theory
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;