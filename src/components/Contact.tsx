import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss opportunities, collaborations, or just connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-card-border hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">arinpro2004@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-card-border hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91-8337003108</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-card-border hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Keota Brick Field Lane, Hooghly, West Bengal</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                  onClick={() => window.open('https://github.com/ArinPro13', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                  onClick={() => window.open('https://linkedin.com/in/arin-pramanick', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                  onClick={() => window.open('mailto:arinpro2004@gmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-card border-card-border shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-input border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    className="bg-input border-border resize-none"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;