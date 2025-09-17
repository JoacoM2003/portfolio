import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">
                Portfolio
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Desarrollador Backend Python y Analista de Datos especializado en crear 
                soluciones robustas y escalables con impacto real.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/JoacoM2003" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/joaquin-munoz-dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:joaco.munoz04@gmail.com"
                  className="p-3 rounded-lg bg-background border border-border hover:bg-success hover:text-success-foreground hover:border-success transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Navegación Rápida
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'Proyectos Destacados', href: '#projects' },
                  { name: 'Habilidades Técnicas', href: '#skills' },
                  { name: 'Educación', href: '#education' },
                  { name: 'Contacto', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Stack Principal
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'FastAPI', 'Django', 'SQL', 'Power BI', 
                  'Pandas', 'Docker', 'Git', 'PostgreSQL'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">
                  💼 Estado actual:
                </p>
                <p className="text-sm text-accent font-medium">
                  Disponible para trabajo, prácticas o pasantías
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border my-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>© {currentYear} Portfolio Backend Python & Data Science.</span>
              <span className="flex items-center">
                Hecho con <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> 
                y mucho código
              </span>
            </div>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Extra info */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              🚀 Este portfolio está construido con React, TypeScript, Tailwind CSS y mucha pasión por el desarrollo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;