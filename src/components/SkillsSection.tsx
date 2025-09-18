import { Code, Database, BarChart3, Cloud, GitBranch, Brain, Workflow } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Lenguajes & Backend",
      icon: <Code className="w-8 h-8" />,
      color: "primary",
      skills: ["Python", "Django", "FastAPI", "Flask", "REST APIs", "Microservicios"],
    },
    {
      title: "Data Engineering & ETL",
      icon: <Workflow className="w-8 h-8" />,
      color: "accent",
      skills: [
        "ETL Pipelines",
        "Airflow",
        "Pandas",
        "NumPy",
        "PySpark (intro)",
        "Data Lakes",
        "Data Warehousing",
      ],
    },
    {
      title: "Data & Analytics / BI",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "success",
      skills: ["Matplotlib", "Seaborn", "Power BI", "Jupyter", "Excel", "SQL Analytics"],
    },
    {
      title: "Bases de Datos",
      icon: <Database className="w-8 h-8" />,
      color: "primary",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="w-8 h-8" />,
      color: "accent",
      skills: ["Git", "Docker", "Linux", "AWS", "Postman", "CI/CD Pipelines"],
    },
    {
      title: "Testing & QA",
      icon: <GitBranch className="w-8 h-8" />,
      color: "success",
      skills: ["Unit Testing", "Integration Testing", "Pytest", "GitHub Actions"],
    },
    {
      title: "Machine Learning (Intro)",
      icon: <Brain className="w-8 h-8" />,
      color: "primary",
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
              Especializado en desarrollo backend, ingeniería de datos y BI, con experiencia en la construcción de APIs, pipelines ETL y automatización de procesos.
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
                Me mantengo en constante aprendizaje sobre desarrollo backend, arquitectura de microservicios e ingeniería de datos. 
                Trabajo en proyectos prácticos, cursos especializados y contribuyo en iniciativas open-source para fortalecer mis 
                habilidades y mantenerme alineado con las demandas del mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
