import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time HAR System",
      description: "ESP32 with Supabase backend for motion data streaming and real-time ML model inference for human activity recognition.",
      technologies: ["ESP32", "Supabase", "Machine Learning", "IoT", "Real-time Systems"],
      github: "https://github.com/ArinPro13/Motion_Predict_Sense",
      featured: true
    },
    {
      title: "Plant Disease Classifier",
      description: "CNN model trained on leaf images for plant disease detection using TensorFlow, Keras, and OpenCV. A precision agriculture tool.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "CNN", "Computer Vision"],
      github: "https://github.com/ArinPro13/Plant_Disease_Classification",
      featured: true
    },
    {
      title: "Movie Recommendation System",
      description: "Intelligent recommendation system using collaborative and content-based filtering with Python, Scikit-learn, and Matplotlib.",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Recommendation Systems", "Machine Learning"],
      github: "https://github.com/ArinPro13/Movie-Recommendation-System",
      featured: false
    },
    {
      title: "Medical Insurance Cost Predictor",
      description: "Linear regression model for predicting medical insurance costs based on demographic and health data using real-world datasets.",
      technologies: ["Python", "Linear Regression", "Data Analysis", "Healthcare", "Predictive Modeling"],
      github: "https://github.com/ArinPro13/Medical_Insuarance_Cost-Prediction-Model",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions combining AI, IoT, and web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`p-6 bg-card border-card-border hover:shadow-elegant transition-all duration-300 hover:scale-105 group animate-fade-in-up ${
                project.featured ? 'md:col-span-1' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {project.featured && (
                <Badge variant="default" className="mb-4 bg-accent text-accent-foreground">
                  Featured Project
                </Badge>
              )}

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/ArinPro13', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;