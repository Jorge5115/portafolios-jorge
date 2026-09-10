import '../styles/sections.css';

const EXPERIENCE = {
  es: [
    {
      id: 'freelance',
      role: 'Desarrollador Full Stack Independiente',
      companyType: 'Freelance · Autónomo',
      period: 'Ene 2025 - Presente · 1 año 9 meses',
      location: 'España · Remoto',
      description:
        'Diseño y desarrollo de aplicaciones full-stack de forma independiente (Java, Spring Boot, React), aplicando prácticas de nivel profesional: autenticación JWT/OAuth2, testing con JUnit y Mockito, contenedorización con Docker y despliegue en la nube.',
      bullets: [],
    },
    {
      id: 'abaco',
      role: 'Desarrollador Backend Junior',
      companyType: 'ABACO DEVELOPMENTS · Contrato de prácticas',
      period: 'Sep 2024 - Dic 2024 · 4 meses',
      location: 'Madrid, España · Híbrido',
      description:
        'Desarrollo de un ERP a medida para la gestión de pedidos, clientes y logística, trabajando con JavaScript y MySQL en un entorno de producción real.',
      bullets: [
        'Implementé un módulo de filtrado y edición de datos, optimizando las consultas frecuentes a la base de datos.',
        'Mejoré la interfaz de usuario iterando directamente con el feedback del cliente, reduciendo la fricción en los flujos clave del sistema.',
        'Colaboré con el equipo en la resolución de incidencias y el mantenimiento continuo de la aplicación.',
        'Experiencia con el desarrollo en un entorno profesional: control de versiones, comunicación con el cliente y requisitos de negocio reales.',
      ],
    },
  ],
  en: [
    {
      id: 'freelance',
      role: 'Independent Full Stack Developer',
      companyType: 'Freelance · Self-employed',
      period: 'Jan 2025 - Present · 1 yr 9 mos',
      location: 'Spain · Remote',
      description:
        'Design and development of full-stack applications independently (Java, Spring Boot, React), applying professional-level practices: JWT/OAuth2 authentication, testing with JUnit and Mockito, containerization with Docker, and cloud deployment. ',
      bullets: [],
    },
    {
      id: 'abaco',
      role: 'Junior Backend Developer',
      companyType: 'ABACO DEVELOPMENTS · Internship contract',
      period: 'Sept 2024 - Dec 2024 · 4 mos',
      location: 'Madrid, Spain · Hybrid',
      description:
        'Development of a custom ERP for order, customer, and logistics management, working with JavaScript and MySQL in a real production environment.',
      bullets: [
        'Implemented a data filtering and editing module, optimizing frequent database queries.',
        'Improved the user interface by directly iterating based on client feedback, reducing friction in key system flows.',
        'Collaborated with the team on incident resolution and ongoing application maintenance.',
        'Experience with development in a professional environment: version control, client communication, and working with real business requirements.',
      ],
    },
  ],
};

const Experience = ({ language }) => {
  const sectionTitle = language === 'es' ? 'Mi experiencia' : 'Experience';
  const openToWork = language === 'es' ? 'Disponible' : 'Open to work';

  return (
    <section className="section" id="experience">
      <h2 className="section-title">{sectionTitle}</h2>

      <div className="experience-grid">
        {EXPERIENCE[language].map((xp) => (
          <article className="xp-card" key={xp.id}>
            {xp.id === 'freelance' && (
              <span className="xp-status" role="status" aria-label={openToWork}>
                <span className="xp-status-dot" />
                <span className="xp-status-tip">{openToWork}</span>
              </span>
            )}
            <h3 className="xp-role">{xp.role}</h3>
            <p className="xp-company">{xp.companyType}</p>
            <p className="xp-meta">
              <span>{xp.period}</span>
              <span aria-hidden="true">·</span>
              <span>{xp.location}</span>
            </p>
            <p className="xp-text">{xp.description}</p>
            {xp.bullets.length > 0 && (
              <ul className="xp-list">
                {xp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;