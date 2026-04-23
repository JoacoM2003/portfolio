export type ProjectStatus = "En producción" | "En desarrollo" | "Completado";
export type ProjectCategory = "Full Stack" | "Backend" | "Backend / Data";

export interface Project {
  slug: string;
  nombre: string;
  categoria: ProjectCategory;
  estado: ProjectStatus;
  descripcionCorta: string;
  descripcionCompleta: string;
  stack: string[];
  queResuelve: string;
  decisionesTecnicas: string[];
  demo: string | null;
  codigo: string;
  capturas: string[] | number;
}

const projects: Project[] = [
  {
    slug: "reclamos-urbanos",
    nombre: "Reclamos Urbanos",
    categoria: "Full Stack",
    estado: "En producción",
    descripcionCorta:
      "Plataforma fullstack para reportar y gestionar reclamos urbanos con autenticación por roles y trazabilidad completa.",
    descripcionCompleta:
      "Plataforma fullstack para la gestión de reclamos urbanos. Los ciudadanos pueden reportar problemas, los agentes municipales gestionan el flujo de estados y los administradores tienen visibilidad completa del sistema. Incluye autenticación, control de acceso por roles, historial de auditoría y CI/CD automatizado.",
    stack: ["FastAPI", "React", "PostgreSQL", "Docker", "GitHub Actions", "Firebase Auth"],
    queResuelve:
      "Digitaliza el proceso de reporte y seguimiento de reclamos urbanos. Los ciudadanos reportan problemas geolocalizados, los agentes gestionan la resolución con flujo de estados controlado y los administradores tienen métricas y trazabilidad completa de cada reclamo.",
    decisionesTecnicas: [
      "Arquitectura en capas (routers → dependencies → services → models) con separación estricta de responsabilidades — cambiar la lógica de negocio no requiere tocar los endpoints",
      "RBAC granular por endpoint mediante dependency injection en FastAPI: cada ruta declara explícitamente el rol requerido sin lógica de autorización duplicada",
      "Historial de estados inmutable (append-only) para auditoría completa — nunca se modifica un registro, solo se insertan nuevos, permitiendo reconstruir el ciclo de vida de cualquier reclamo",
      "CI/CD con GitHub Actions: tests automáticos con cobertura mínima del 70% en cada PR, deploy automático a Render al publicar un release",
      "Multi-stage Dockerfile (builder/runtime) para imagen de producción liviana sin compiladores ni dependencias de desarrollo",
      "NullPool para conexión con Neon (PostgreSQL serverless) — evita conexiones idle que impiden la suspensión de la instancia",
    ],
    demo: "https://reclamos-gray.vercel.app/home",
    codigo: "https://github.com/JoacoM2003/reclamos-public",
    capturas: [],
  },
  {
    slug: "movies-etl",
    nombre: "Movies ETL Pipeline & Analytics Dashboard",
    categoria: "Backend / Data",
    estado: "Completado",
    descripcionCorta:
      "Pipeline ETL end-to-end con dashboard analítico interactivo: extracción desde API externa, transformación con Pandas, carga en PostgreSQL y visualización con Streamlit y Plotly.",
    descripcionCompleta:
      "Sistema de ingeniería de datos completo que extrae información de series de televisión desde TVMaze, la procesa y almacena en PostgreSQL, y la expone mediante una API REST consumida por un dashboard analítico interactivo. El pipeline ETL se dispara desde la interfaz del dashboard y corre en background. Incluye visualizaciones de KPIs, top géneros y explorador de datos crudos.",
    stack: ["Python", "FastAPI", "Streamlit", "Pandas", "PostgreSQL", "Plotly", "Docker"],
    queResuelve:
      "Demuestra un flujo de ingeniería de datos end-to-end: desde la extracción de datos de una API pública hasta su visualización en un dashboard interactivo, pasando por transformación, validación y persistencia. El usuario dispara el pipeline desde el dashboard y ve los resultados en tiempo real sin configuración adicional.",
    decisionesTecnicas: [
      "Arquitectura separada en tres capas: ETL (extract/transform/load como módulos independientes), API REST con FastAPI y dashboard con Streamlit — cada capa es reemplazable sin afectar las demás",
      "Pipeline disparado desde el dashboard via POST /etl/run: FastAPI delega a un worker en background para no bloquear la respuesta HTTP mientras corre el proceso",
      "Separación extract/transform/load en módulos con responsabilidad única: extract.py llama a TVMaze, transform.py limpia con Pandas, load.py persiste en PostgreSQL y CSV",
      "Streamlit + Plotly para el dashboard analítico: visualizaciones de KPIs, distribución por géneros y explorador de datos crudos consumiendo la API REST",
      "Arquitectura multi-contenedor con Docker Compose: API, dashboard y base de datos orquestados en un solo comando",
    ],
    demo: "https://moviesetl.streamlit.app/",
    codigo: "https://github.com/JoacoM2003/moviesETL",
    capturas: [
      "/projects/moviesETL/1.jpg",
    ]
  },
  {
    slug: "gestor-academico",
    nombre: "GestorAlum — Gestión Académica",
    categoria: "Backend",
    estado: "En producción",
    descripcionCorta:
      "Plataforma para centralizar la administración académica: inscripciones, calificaciones y dashboards por rol.",
    descripcionCompleta:
      "Sistema integral de gestión académica con tres perfiles diferenciados: alumnos, profesores y administradores. Los alumnos pueden inscribirse a materias con control de cupos en tiempo real, ver su historial de calificaciones y agenda de horarios. Los profesores gestionan sus comisiones y cargan notas. Los administradores configuran materias, comisiones y cuentas desde un panel dedicado.",
    stack: ["Django", "PostgreSQL", "Docker", "Bootstrap", "Gunicorn"],
    queResuelve:
      "Reemplaza planillas de cálculo dispersas por un único punto de verdad para la información académica. Automatiza el control de cupos por comisión, previene doble inscripción, lleva historial histórico por alumno (incluyendo recursantes sin pisar datos anteriores) y genera dashboards con promedios y estados de cursada automáticos.",
    decisionesTecnicas: [
      "RBAC mediante decoradores y mixins personalizados de Django: cada perfil (Alumno, Profesor, Admin) accede únicamente a las vistas y datos de su rol",
      "Modelo de datos en 3NF: extensión del User nativo de Django con relaciones OneToOne hacia Alumno y Profesor, desacoplando autenticación de información académica",
      "Entidad MateriaComision como núcleo del sistema: conecta una materia con una comisión específica y define el cupo máximo, permitiendo múltiples turnos de la misma materia",
      "Inscripcion vincula Alumno con MateriaComision por año_cursada — los recursantes generan un nuevo registro sin pisar el historial de años anteriores",
      "Django Admin para el panel administrativo out-of-the-box, focalizando el desarrollo en los portales específicos de alumnos y profesores",
      "Gunicorn como servidor WSGI en producción; configuración por variables de entorno para paridad desarrollo/producción",
    ],
    demo: "https://gestoralum.onrender.com/",
    codigo: "https://github.com/JoacoM2003/gestorAlum",
    capturas: [
      "/projects/gestorAlum/1.jpg",
      "/projects/gestorAlum/2.jpg",
      "/projects/gestorAlum/3.jpg",
      "/projects/gestorAlum/4.jpg",
      "/projects/gestorAlum/5.jpg",
      "/projects/gestorAlum/6.jpg",
      "/projects/gestorAlum/7.jpg"
    ]
  },
  {
    slug: "sistema-reservas",
    nombre: "Sistema de Gestión de Turnos",
    categoria: "Full Stack",
    estado: "Completado",
    descripcionCorta:
      "Plataforma fullstack para gestión de turnos y reservas con arquitectura hexagonal, workers asíncronos y frontend en React + TypeScript.",
    descripcionCompleta:
      "Sistema integral para que organizaciones (gimnasios, consultorios, centros deportivos) gestionen turnos, recursos y servicios. Construido con Arquitectura Hexagonal (Puertos y Adaptadores) para desacoplar completamente la lógica de negocio de la infraestructura. Incluye control de disponibilidad en tiempo real, bloqueos y excepciones, gestión de proveedores y procesamiento de tareas en background con Celery y Redis.",
    stack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "Celery", "Docker", "Nginx"],
    queResuelve:
      "Centraliza la gestión de turnos para organizaciones con múltiples recursos y proveedores. Controla disponibilidad en tiempo real, previene conflictos de reserva, gestiona bloqueos por mantenimiento o feriados, y procesa tareas pesadas (notificaciones, liberación de turnos caducados) en background sin bloquear la experiencia del usuario.",
    decisionesTecnicas: [
      "Arquitectura Hexagonal (Puertos y Adaptadores): el Dominio no conoce la base de datos ni FastAPI — la lógica de negocio es testeable de forma aislada sin levantar infraestructura",
      "Cuatro capas explícitas: api (presentación) → application (casos de uso) → domain (entidades y puertos) → infrastructure (adaptadores SQL, Redis, repositorios)",
      "Celery + Redis para tareas asíncronas en background: liberación de turnos caducados y notificaciones sin bloquear las respuestas HTTP",
      "Frontend en React 18 + TypeScript + Vite con arquitectura modular: contexts para estado global, hooks para lógica reutilizable, services para comunicación con la API",
      "Nginx como proxy inverso para el frontend compilado, separando el servidor de estáticos del servidor de la API",
      "Evolución de una versión anterior en Django MVC — rediseñado desde cero para aplicar arquitectura hexagonal y soporte asíncrono real",
    ],
    demo: "https://reservas-xi.vercel.app/",
    codigo: "https://github.com/JoacoM2003/reservas-public",
    capturas: [
      "/projects/reservas/1.jpg",
      "/projects/reservas/2.jpg",
      "/projects/reservas/3.jpg",
      "/projects/reservas/4.jpg",
      "/projects/reservas/5.jpg",
      "/projects/reservas/6.jpg",
      "/projects/reservas/7.jpg",
    ],
  },
  {
    slug: "recomendador-peliculas",
    nombre: "Recomendador de Películas RAG",
    categoria: "Backend / Data",
    estado: "Completado",
    descripcionCorta:
      "Motor de recomendación con arquitectura RAG híbrida: búsqueda vectorial semántica con FAISS y generación de respuestas con Google Gemini.",
    descripcionCompleta:
      "Sistema de recomendación de películas que combina búsqueda vectorial semántica con un modelo de lenguaje para entender peticiones en lenguaje natural. El usuario describe lo que busca ('una película de los 90s con Tom Hanks sobre amistad') y el sistema extrae entidades con spaCy, filtra el dataset, busca semánticamente en FAISS y genera una respuesta justificada con Gemini.",
    stack: ["Python", "FastAPI", "FAISS", "Google Gemini", "SentenceTransformers", "spaCy", "Pandas"],
    queResuelve:
      "Búsqueda de películas por concepto o descripción en lenguaje natural, no por palabras clave exactas. El usuario puede pedir 'películas de terror psicológico de los 2000s' y el sistema entiende la intención, filtra por restricciones exactas (actores, géneros, años) y busca semánticamente dentro del subconjunto resultante.",
    decisionesTecnicas: [
      "Arquitectura RAG (Retrieval-Augmented Generation) híbrida en dos etapas: pipeline offline para generar embeddings e indexar en FAISS, pipeline online para cada consulta del usuario",
      "spaCy con modelo multilingüe para NER: extrae actores, géneros y años del prompt antes de la búsqueda semántica, combinando filtrado exacto con búsqueda por similitud",
      "FAISS (Meta) como base de datos vectorial para búsqueda semántica ultrarrápida sobre embeddings generados con SentenceTransformers multilingüe",
      "Google Gemini como capa de generación: recibe las películas candidatas de FAISS y produce una respuesta natural y justificada al usuario",
      "Pipeline offline separado (setup_data.py) para descarga, limpieza y generación de índices — el servidor levanta con los índices ya construidos, sin recalcular embeddings en cada request",
    ],
    demo: null,
    codigo: "https://github.com/JoacoM2003/RecomendadorPeliculas",
    capturas: [
      "/projects/recomendador/1.jpg",
      "/projects/recomendador/2.jpg",
    ],
  },
  {
    slug: "ecommerce",
    nombre: "Modern Ecommerce Hub",
    categoria: "Backend",
    estado: "En producción",
    descripcionCorta:
      "Plataforma de ecommerce modular con carrito persistente, gestión de catálogo, checkout y CDN de imágenes con Cloudinary.",
    descripcionCompleta:
      "Plataforma de comercio electrónico construida con Django. Arquitectura monolítica modular con 4 apps independientes: catálogo de productos con soporte para ofertas, carrito basado en sesiones con merge automático al autenticar, flujo de checkout con registro inmutable de órdenes y panel de administración para gestión de inventario y pedidos. Deploy en producción con Cloudinary como CDN y WhiteNoise para estáticos.",
    stack: ["Django", "PostgreSQL", "Docker", "Cloudinary", "WhiteNoise"],
    queResuelve:
      "Tienda online completa que resuelve tres desafíos concretos: persistencia del carrito para usuarios anónimos que luego se autentican, escalabilidad de medios delegando imágenes a un CDN global, y trazabilidad financiera con registros de órdenes inmutables vinculados al estado del catálogo en el momento de la compra.",
    decisionesTecnicas: [
      "Arquitectura MTV con 4 apps Django de alta cohesión: store (catálogo y perfiles), cart (motor transaccional), payment (checkout y órdenes), ecom (configuración y enrutamiento)",
      "Carrito implementado como diccionario JSON en sesión nativa de Django — sin tabla adicional en base de datos. Al autenticar, merge automático con old_cart del perfil del usuario",
      "Extensión del modelo User nativo con señales post_save: se aprovisiona automáticamente un perfil de comercio al registrar cualquier usuario nuevo, sin lógica extra en las vistas",
      "Cloudinary Storage para imágenes: la DB solo guarda el objeto relacional que apunta al CDN, sin almacenar bytes. WhiteNoise sirve estáticos comprimidos y cacheados sin necesitar Nginx",
      "Configuración por dj_database_url desde variables de entorno — misma codebase en SQLite local y PostgreSQL en producción siguiendo 12-Factor App",
    ],
    demo: "https://ecommerce-g2jg.onrender.com/",
    codigo: "https://github.com/JoacoM2003/ecommerce",
    capturas: [],
  },
];

export default projects;