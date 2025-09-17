import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pipeline ETL de Ecommerce",
      description: "Sistema de extracción, transformación y carga de datos de un ecommerce usando Python y SQL. Automatización completa con validación de calidad de datos y visualización de KPIs en Power BI. Exposición de datos mediante API.",
      technologies: ["Python", "Pandas", "SQL", "Apache Airflow", "Docker", "Power BI"],
      github: "https://github.com/JoacoM2003/ecommerceData",
      demo: "#",
      category: "Data Engineering"
    },
    {
      title: "Webapp Ecommerce con Django",
      description: "Plataforma web de ecommerce desarrollada con Django y PostgreSQL. Gestión de productos, usuarios, carrito de compras y pagos. Implementación de frontend responsive y panel de administración.",
      technologies: ["Python", "Django", "PostgreSQL", "Bootstrap", "Docker"],
      github: "https://github.com/JoacoM2003/ecommerce",
      demo: "#",
      category: "Full Stack"
    },
    {
      title: "Gestor Académico",
      description: "Aplicación para la gestión académica de alumnos, materias y calificaciones. Implementa funcionalidades para registrar inscripciones, administrar horarios y generar reportes de desempeño.",
      technologies: ["Python", "Django", "Postgres", "Bootstrap", "Docker"],
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
              Una selección de mis trabajos más significativos en Backend Python, Análisis de Datos y Business Intelligence
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
