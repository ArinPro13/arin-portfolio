import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              Arin Pramanick
            </h3>
            <p className="text-muted-foreground">
              Computer Science Student | AI Enthusiast | Deep Learning Researcher
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Skills
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Experience
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform duration-300"
                onClick={() => window.open('https://github.com/ArinPro13', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform duration-300"
                onClick={() => window.open('https://linkedin.com/in/arin-pramanick', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform duration-300"
                onClick={() => window.open('mailto:arinpro2004@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-card-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Arin Pramanick. Made with <Heart className="h-4 w-4 text-red-500" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;