import { useState, useRef, useCallback, useEffect } from 'react';
import '../styles/projects.css';

import firstProjectDemo from '../assets/videos/first-project.mp4';
import secondProjectDemo from '../assets/videos/second-project.mp4';
import thirdProjectDemo from '../assets/videos/third-project.mp4';
import fourthProjectDemo from '../assets/videos/fourth-project.mp4';
import firstProjectPoster from '../assets/poster-first-project.jpg';
import fifthProjectDemo from '../assets/videos/fifth-project.mp4';

export const PROJECTS = [
  {
    id: 'stack-shop',
    title: { es: 'Stack Shop', en: 'Stack Shop' },
    description: {
      es: 'E-commerce completamente funcional con autenticación, carrito de compras, sistema de pedidos, panel de administración y notificaciones en tiempo real. Construido con un stack moderno y profesional.',
      en: 'Fully functional e-commerce with authentication, shopping cart, order system, admin panel and real-time notifications. Built with a modern and professional stack.',
    },
    detail: {
      es: 'Aspectos destacados del proyecto:\n\n- Autenticación y autorización con JWT\n\n- Carrito de compras con persistencia\n\n- Sistema de pedidos y tracking\n\n- Panel de administración con analytics\n\n- Notificaciones en tiempo real con WebSockets\n\n- Sistema de cupones y descuentos\n\n- Filtros y búsquedas avanzadas',
      en: 'Project highlights:\n\n- Authentication and authorization with JWT\n\n- Shopping cart with persistence\n\n- Order system and tracking\n\n- Admin panel with analytics\n\n- Real-time notifications with WebSockets\n\n- Coupon and discount system\n\n- Advanced filters and search',
    },
    tags: ['Spring Boot', 'Java 21', 'Spring Security', 'MySQL', 'Redis', 'Docker', 'React 18', 'WebSockets'],
    video: fourthProjectDemo,
    videoClass: 'desktop',
    repo: 'https://github.com/Jorge5115/ecommerce-frontend',
  },
  {
    id: 'invoice-manager',
    title: { es: 'Invoice Manager', en: 'Invoice Manager' },
    description: {
      es: 'Aplicación web full-stack para la gestión eficiente y visual de ingresos y gastos personales. Diseñada para ofrecer control total sobre las finanzas con gráficos dinámicos y gestión completa de transacciones.',
      en: 'Full-stack web application for efficient and visual management of personal income and expenses. Designed to offer total financial control with dynamic charts and complete transaction management.',
    },
    detail: {
      es: 'Aspectos destacados del proyecto:\n\n- Gráficos dinámicos de ingresos y gastos\n\n- Filtros por semanas, meses o años\n\n- Gestión CRUD completa de transacciones\n\n- Filtros por tipo, categoría y rango de fechas\n\n- Backend con Spring Boot y MySQL\n\n- Frontend con React',
      en: 'Project highlights:\n\n- Dynamic income and expense charts\n\n- Filters by weeks, months or years\n\n- Full CRUD transaction management\n\n- Filters by type, category and date range\n\n- Backend with Spring Boot and MySQL\n\n- Frontend with React',
    },
    tags: ['Spring Boot', 'Java 17', 'MySQL', 'React', 'Maven', 'IntelliJ IDEA', 'Visual Studio Code'],
    video: thirdProjectDemo,
    videoClass: 'desktop',
    repo: 'https://github.com/Jorge5115/personal-finances',
  },
  {
    id: 'personal-notes',
    title: { es: 'Notas Personales', en: 'Personal Notes' },
    description: {
      es: 'Aplicación web full-stack diseñada para gestionar notas personales de forma rápida y eficaz. Combina un backend que maneja el almacenamiento y procesamiento de los datos con un frontend que ofrece una interfaz de usuario amigable e intuitiva.',
      en: 'Full-stack web application designed for quick and efficient personal note management. It combines a backend that handles data storage and processing with a frontend that offers a user-friendly and intuitive interface.',
    },
    detail: {
      es: 'Aspectos destacados del proyecto:\n\n- Crear nuevas notas rápidamente\n\n- Ver notas almacenadas de forma organizada\n\n- Editar contenido de notas existentes\n\n- Eliminar notas que ya no sean necesarias\n\n- Interfaz moderna e intuitiva',
      en: 'Project highlights:\n\n- Quickly create new notes\n\n- View stored notes in an organized way\n\n- Edit existing note content\n\n- Delete notes that are no longer needed\n\n- Modern and intuitive interface',
    },
    tags: ['Full-Stack', 'H2 Database', 'CRUD', 'IntelliJ IDEA', 'Visual Studio Code'],
    video: secondProjectDemo,
    videoClass: 'desktop',
    repo: 'https://github.com/Jorge5115/personal-notes',
  },
  {
    id: 'gear-fit',
    title: { es: 'Gear Fit App', en: 'Gear Fit App' },
    description: {
      es: 'He desarrollado una aplicación Android para ayudarte a llevar un control inteligente y personalizado de tu alimentación y actividad física. Un proyecto práctico, funcional y pensado para el día a día.',
      en: 'I developed an Android application designed to help you manage your diet and physical activity in a smart and personalized way. A practical, functional project built for daily use.',
    },
    detail: {
      es: 'Aspectos destacados del proyecto:\n\n- Registro inteligente de comidas\n\n- Seguimiento semanal interactivo\n\n- Conteo de pasos en tiempo real\n\n- Gestión personalizada de alimentos\n\n- Escaneo rápido de alimentos\n\n- Base de datos robusta y eficiente',
      en: 'Project highlights:\n\n- Smart meal logging\n\n- Weekly interactive tracking\n\n- Real-time step counting\n\n- Custom food management\n\n- Rapid food scanning\n\n- Robust and efficient database',
    },
    tags: ['Android Studio', 'Java', 'SQLite', 'CameraX', 'Google ML Kit', 'SensorManager'],
    video: firstProjectDemo,
    poster: firstProjectPoster,
    videoClass: 'mobile',
    repo: 'https://github.com/Jorge5115/gearFit-android',
  },
  {
    id: 'notes-ai',
    title: { es: 'Notes AI', en: 'Notes AI' },
    description: {
      es: 'Asistente de notas inteligente con IA: genera, resume y organiza tus notas automáticamente. Backend con Spring Boot y seguridad híbrida (JWT + inicio de sesión con Google), generación y resumen de notas con IA (Groq / Llama 3) y frontend React + Vite con CI/CD.',
      en: 'AI-powered smart notes assistant: generates, summarizes and organizes your notes automatically. Spring Boot backend with hybrid security (JWT + Google login), AI-powered note generation and summarization (Groq / Llama 3) and a React + Vite frontend with CI/CD.',
    },
    detail: {
      es: 'Aspectos destacados del proyecto:\n\n- Generación y resumen de notas con IA (Groq / Llama 3)\n\n- Seguridad híbrida: JWT + inicio de sesión con Google (OAuth2)\n\n- Backend con Spring Boot y pruebas con JUnit 5 y Mockito\n\n- Despliegue con Docker\n\n- Frontend React + Vite con CI/CD en GitHub Actions\n\n- Desplegado en el plan gratuito: Vercel (frontend), Render (backend) y Aiven (MySQL)',
      en: 'Project highlights:\n\n- AI note generation and summarization (Groq / Llama 3)\n\n- Hybrid security: JWT + Google OAuth2 login\n\n- Spring Boot backend with JUnit 5 and Mockito testing\n\n- Docker deployment\n\n- React + Vite frontend with GitHub Actions CI/CD\n\n- Free-tier hosting: Vercel (frontend), Render (backend) and Aiven (MySQL)',
    },
    tags: ['Spring Boot', 'JWT', 'OAuth2', 'React', 'Vite', 'Docker', 'JUnit 5', 'Mockito', 'GitHub Actions'],
    video: fifthProjectDemo,
    videoClass: 'desktop',
    repo: 'https://github.com/Jorge5115/notes-ai-frontend',
  },
];

const ProjectCard = ({ project, language, onOpen, hidden = false, onMediaReady }) => (
  <div
    className={`carousel-card ${project.videoClass === 'mobile' ? 'portrait' : ''} card-${project.id}`}
    role="button"
    tabIndex={hidden ? -1 : 0}
    onClick={() => onOpen(project)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen(project);
      }
    }}
  >
    <div className="card-media">
      <video
        src={project.video}
        poster={project.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={onMediaReady}
        onError={onMediaReady}
      />
    </div>
  </div>
);

const Projects = ({ language }) => {
  const [modalProject, setModalProject] = useState(null);
  const [ready, setReady] = useState(false);
  const loadedCount = useRef(0);
  const totalMedia = useRef(PROJECTS.length * 2);

  const handleMediaReady = useCallback(() => {
    loadedCount.current += 1;
    // Empieza con 6 de 8 listos (tolera dos vídeos lentos sin bloquear el
    // carrusel); el fallback de 12s cubre el caso extremo en que ni eso se
    // resuelve. Si el hueco sigue apareciendo, el problema no es la cuenta
    // de vídeos cargados sino el buffering/decode al entrar en pantalla.
    if (loadedCount.current >= totalMedia.current - 2) {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    const fallback = setTimeout(() => setReady(true), 12000);
    return () => clearTimeout(fallback);
  }, []);

  // Preload del vídeo Gear Fit con prioridad alta desde el arranque:
  // lanza su descarga antes de que el resto de vídeos sature la red, para que
  // el primer frame esté pronto y el intercambio poster->vídeo sea inmediato.
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.type = 'video/mp4';
    link.href = firstProjectDemo;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const closeModal = () => setModalProject(null);

  return (
    <section className="projects" id="projects">
      <div className="carousel" aria-label={language === 'es' ? 'Carrusel de proyectos' : 'Projects carousel'}>
        <div className={`carousel-track ${ready ? 'is-ready' : ''}`}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`${project.id}-${i}`} project={project} language={language} onOpen={setModalProject} onMediaReady={handleMediaReady} />
          ))}
          <div className="carousel-clone" aria-hidden="true">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={`${project.id}-clone-${i}`} project={project} language={language} onOpen={setModalProject} hidden onMediaReady={handleMediaReady} />
            ))}
          </div>
        </div>
      </div>

      {modalProject && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div className="modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="modal-header">
              <a
                className="modal-repo"
                href={modalProject.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === 'es' ? 'Ver repositorio' : 'View repository'}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.77 1.06.77 2.14v3.17c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
              <button className="modal-close" onClick={closeModal} aria-label={language === 'es' ? 'Cerrar' : 'Close'}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className={`modal-media ${modalProject.videoClass}`}>
              <video src={modalProject.video} autoPlay muted loop playsInline controls />
            </div>

            <h3 className="modal-title">{modalProject.title[language]}</h3>
            <p className="modal-description">{modalProject.description[language]}</p>
            <div className="modal-detail">
              {modalProject.detail[language].split('\n\n').map((line, i) => {
                const isBullet = line.startsWith('- ');
                return (
                  <p key={i} className={`modal-detail-line ${isBullet ? 'bullet' : 'lead'}`}>
                    {isBullet ? line.slice(2) : line}
                  </p>
                );
              })}
            </div>
            <div className="card-tags">
              {modalProject.tags.map((tag, i) => (
                <span key={i} className="card-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;