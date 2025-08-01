import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import arinHeadshot from "@/assets/arin-headshot.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="gradient-text animate-glow">
                  Arin Pramanick
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up">
                Computer Science Student | AI Enthusiast | Deep Learning Researcher
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-slide-up">
                I'm a passionate CSE undergrad from NIT Durgapur with experience in deep learning, 
                computer vision, and real-time systems. Building intelligent applications that solve real-world problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up">
              <Button variant="hero" size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-slide-up">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 scale-110"></div>
              <img
                src={arinHeadshot}
                alt="Arin Pramanick"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-card-border shadow-elegant hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;