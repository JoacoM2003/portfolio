import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = {
    degree: "Ingeniería en Sistemas",
    institution: "Universidad Tecnológica Nacional (UTN)",
    status: "Estudiante Avanzado",
    period: "2021 - Actualidad",
    description: "Formación integral en desarrollo de software, análisis de sistemas, bases de datos y metodologías de gestión de proyectos tecnológicos."
  };

  const certifications = [
    {
      title: "Python for Data Science and Machine Learning",
      provider: "Udemy",
      date: "2024",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"]
    },
  ];

  const continuousLearning = [
    "Documentación oficial de Python y sus librerías",
    "Comunidades de desarrolladores en Discord y Reddit",
    "Proyectos de código abierto en GitHub",
    "Blogs técnicos y newsletters especializados",
    "Kaggle competitions para práctica en Data Science",
    "Stack Overflow y foros técnicos especializados"
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Educación & <span className="gradient-text">Certificaciones</span>
            </h2>
            <div className="h-1 w-24 mx-auto hero-gradient rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Formación académica sólida complementada con aprendizaje continuo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* University degree */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up flex flex-col">
              <div className="flex items-start mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary border border-primary/20 mr-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-accent font-semibold mb-1">
                    {education.institution}
                  </p>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {education.period} • {education.status}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed flex-1">
                {education.description}
              </p>

              <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  💡 Enfoque especial en desarrollo de software, bases de datos y análisis de sistemas
                </p>
              </div>
            </div>

            {/* Continuous Learning */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up flex flex-col" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-accent/10 text-accent border border-accent/20 mr-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Aprendizaje Autodidacta
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Mi formación se complementa con aprendizaje continuo a través de múltiples fuentes y práctica constante:
              </p>

              <ul className="space-y-3 flex-1">
                {continuousLearning.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-muted-foreground animate-fade-in-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;