import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import developerAvatar from "@/assets/developer-avatar.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
              <img 
                src={developerAvatar} 
                alt="Desarrollador Backend Python y Data Science" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main heading */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Backend Python</span>
              <br />
              <span className="text-foreground">& Data Science</span>
            </h1>
            <div className="h-1 w-24 mx-auto hero-gradient rounded-full"></div>
          </div>

          {/* Description */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Estudiante avanzado de <span className="text-primary font-semibold">Ingeniería en Sistemas</span> en la UTN
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Especializado en Backend Python y Análisis de Datos. Experiencia en frameworks Django, Flask, FastAPI, SQL y Power BI. 
              <span className="text-accent font-medium"> Busco proyectos desafiantes y con impacto real.</span>
            </p>
          </div>

          {/* Tech highlights */}
          <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'FastAPI', 'SQL', 'Power BI', 'Pandas'].map((tech, index) => (
                <span 
                  key={tech}
                  className="skill-badge"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="hero-gradient text-white px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-glow"
              onClick={scrollToProjects}
            >
              Ver Proyectos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={scrollToContact}
            >
              Contactar
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <a 
              href="https://github.com/JoacoM2003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/joaquin-munoz-dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:joaco.munoz04@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:bg-success hover:text-success-foreground transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <button 
              onClick={scrollToProjects}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6 mx-auto animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;