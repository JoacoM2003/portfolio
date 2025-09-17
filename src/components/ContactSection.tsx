import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "joaco.munoz04@gmail.com",
      href: "mailto:joaco.munoz04@gmail.com",
      color: "success"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/JoacoM2003",
      href: "https://github.com/JoacoM2003/",
      color: "primary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/joaquin-munoz-dev",
      href: "https://www.linkedin.com/in/joaquin-munoz-dev/",
      color: "accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Ubicación",
      value: "Argentina",
      href: null,
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground",
      accent: "bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground",
      success: "bg-success/10 text-success border-success/20 hover:bg-success hover:text-success-foreground"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hablemos sobre tu <span className="gradient-text">Proyecto</span>
            </h2>
            <div className="h-1 w-24 mx-auto hero-gradient rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto interesante en mente? Me encantaría conocer más detalles y explorar cómo puedo contribuir
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estoy siempre abierto a nuevas oportunidades, colaboraciones y proyectos desafiantes. 
                  Ya sea que busques un desarrollador backend, analista de datos o alguien con experiencia en BI, 
                  no dudes en contactarme.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`flex items-center p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${getColorClasses(info.color)}`}
                      >
                        <div className="mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-sm opacity-80">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className={`flex items-center p-4 rounded-xl border ${getColorClasses(info.color).replace('hover:', '')}`}>
                        <div className="mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-sm opacity-80">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="bg-card border border-border rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  🚀 ¿Listo para comenzar?
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Me especializo en crear soluciones robustas y escalables. Desde APIs hasta pipelines de datos, 
                  estoy aquí para ayudarte a materializar tus ideas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge text-xs">Full Time</span>
                  <span className="skill-badge text-xs">Part Time</span>
                  <span className="skill-badge text-xs">Prácticas</span>
                  <span className="skill-badge text-xs">Pasantías</span>

                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="joaco.munoz04@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="¿De qué quieres hablar?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto, ideas o cómo puedo ayudarte..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full hero-gradient text-white hover:scale-105 transition-all duration-300 shadow-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Respondo generalmente en 24-48 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;