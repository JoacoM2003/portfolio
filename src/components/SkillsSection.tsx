import { Code, Database, BarChart3, Cloud, GitBranch, Brain } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Lenguajes & Backend",
      icon: <Code className="w-8 h-8" />,
      color: "primary",
      skills: ["Python", "Django", "FastAPI", "Flask", "SQL"],
    },
    {
      title: "Data & Analytics / BI",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "accent",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Jupyter", "Excel"],
    },
    {
      title: "Bases de Datos",
      icon: <Database className="w-8 h-8" />,
      color: "success",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="w-8 h-8" />,
      color: "primary",
      skills: ["Git", "Docker", "Postman", "Linux", "AWS"],
    },
    {
      title: "Testing & CI/CD",
      icon: <GitBranch className="w-8 h-8" />,
      color: "accent",
      skills: ["Unit Testing", "Integration Testing", "GitHub Actions"],
    },
    {
      title: "Machine Learning (Intro)",
      icon: <Brain className="w-8 h-8" />,
      color: "success",
      skills: ["Scikit-learn", "TensorFlow", "Keras", "OpenCV", "Statistics"],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        icon: "text-primary bg-primary/10 border-primary/20",
        chip: "bg-primary/20 text-primary",
      },
      accent: {
        icon: "text-accent bg-accent/10 border-accent/20",
        chip: "bg-accent/20 text-accent",
      },
      success: {
        icon: "text-success bg-success/10 border-success/20",
        chip: "bg-success/20 text-success",
      },
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Habilidades <span className="gradient-text">Técnicas</span>
            </h2>
            <div className="h-1 w-24 mx-auto hero-gradient rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especializado en desarrollo backend con Python, análisis de datos y Business Intelligence
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <div
                  key={category.title}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Category header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg border ${colorClasses.icon} mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills list as chips */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses.chip}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Aprendizaje Continuo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mi pasión por la tecnología me impulsa a mantenerme actualizado con las últimas 
                tendencias en desarrollo backend, ciencia de datos y análisis de datos. Constantemente 
                expandiendo mis conocimientos a través de proyectos prácticos, cursos especializados 
                y contribuciones a la comunidad de código abierto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
