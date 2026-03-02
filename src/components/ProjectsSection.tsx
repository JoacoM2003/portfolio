import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Señalizador Urbano de Reclamos",
      description: "Plataforma integral para reportar y gestionar reclamos urbanos. Proyecto principal que demuestra integración completa entre un backend robusto y una interfaz moderna.",
      technologies: ["FastAPI", "React", "PostgreSQL", "Docker"],
      github: "#",
      demo: "#",
      category: "Full Stack"
    },
    {
      title: "Sistema de Reservas",
      description: "Aplicación para gestionar reservas de forma eficiente con una arquitectura moderna orientada a servicios y contenedores.",
      technologies: ["FastAPI", "React", "PostgreSQL", "Docker"],
      github: "https://github.com/JoacoM2003/Reclamos",
      demo: "https://reclamos-gray.vercel.app/",
      category: "Full Stack"
    },
    {
      title: "Webapp Ecommerce",
      description: "Plataforma web de ecommerce con gestión de productos, usuarios, carrito de compras y pagos. Implementación de un panel de administración completo.",
      technologies: ["Django", "PostgreSQL", "Docker"],
      github: "https://github.com/JoacoM2003/ecommerce",
      demo: "https://ecommerce-g2jg.onrender.com/",
      category: "Backend Development"
    },
    {
      title: "Gestor Académico",
      description: "Aplicación para la gestión académica de alumnos, materias y calificaciones. Implementa funcionalidades para registrar inscripciones y administrar horarios.",
      technologies: ["Django", "PostgreSQL", "Docker"],
      github: "https://github.com/JoacoM2003/gestorAlum",
      demo: "https://gestoralum.onrender.com",
      category: "Backend Development"
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Data Engineering": "bg-primary/10 text-primary border-primary/20",
      "Business Intelligence": "bg-accent/10 text-accent border-accent/20",
      "Backend Development": "bg-success/10 text-success border-success/20",
      "Data Analysis": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Full Stack": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "Machine Learning": "bg-pink-500/10 text-pink-600 border-pink-500/20"
    };
    return colors[category as keyof typeof colors] || colors["Data Engineering"];
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Proyectos</span> Destacados
            </h2>
            <div className="h-1 w-24 mx-auto hero-gradient rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selección de mis trabajos más significativos en Ingeniería de Software, Arquitectura Backend y Desarrollo Full Stack.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>

                {/* Project content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              ¿Interesado en colaborar o conocer más detalles de algún proyecto?
            </p>
            <Button
              size="lg"
              className="hero-gradient text-white px-8 py-6 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/JoacoM2003" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Ver más en GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
