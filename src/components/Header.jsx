import React, { useState, useEffect } from 'react';
import fotoPerfil from '../assets/foto-jorge.jpg';
import locationIcon from '../assets/world-icon.jpg'; 
import telephoneIcon from '../assets/telephone-icon.jpg';
import SocialButtons from './SocialButtons';
import ProjectCards from './ProjectCards';
import '../styles/globals.css';
import '../styles/light-theme.css'; 
import '../styles/dark-theme.css'; 
import projectDemo from '../assets/videos/first-project.mp4';
import personalNotesDemo from '../assets/videos/second-project.mp4';
import invoiceDemo from '../assets/videos/third-project.mp4';
import stackShopDemo from '../assets/videos/fourth-project.mp4';

const Header = ({ darkMode, onToggleTheme, language, onToggleLanguage }) => {
  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const [visibleText, setVisibleText] = useState(language === 'es'
    ? 'Desarrollador Junior Full-Stack, apasionado por construir soluciones completas y escalables. Combino lógica de negocio con diseño de interfaz usando React y Spring Boot.'
    : 'Junior Full-Stack Developer, passionate about building complete and scalable solutions. I combine business logic with interface design using React and Spring Boot.'
  );
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => {
      setVisibleText(language === 'es'
        ? 'Desarrollador Junior Full-Stack, apasionado por construir soluciones completas y escalables. Combino lógica de negocio con diseño de interfaz usando React y Spring Boot.'
        : 'Junior Full-Stack Developer, passionate about building complete and scalable solutions. I combine business logic with interface design using React and Spring Boot.'
      );
      setFade(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [language]);

  const aboutMeEs = `Titulado en Desarrollo de Aplicaciones Multiplataforma, con muchas ganas de aprender y dominar el campo del desarrollo FullStack. Mi objetivo es dominar tanto el frontend como el backend para crear aplicaciones eficientes y escalables que impulsen el crecimiento empresarial.\n
  Actualmente enfocado en:
  - Crear proyectos Full-Stack completos con React + Spring Boot como desarrollador autodidacta.
  - Aplicar los principios de Clean Architecture y Domain-Driven Design en mis desarrollos.
  - Transformar cada error en oportunidades de aprendizaje y mejora continua.`;

  const aboutMeEn = `Graduated in Multiplatform Application Development, eager to learn and master the field of FullStack development. My goal is to master both frontend and backend to create efficient and scalable applications that drive business growth.\n
  Currently focused on:
  - Building complete Full-Stack projects with React + Spring Boot as a self-taught developer.
  - Applying the principles of Clean Architecture and Domain-Driven Design in my developments.
  - Turning every mistake into opportunities for learning and continuous improvement.`;

  const [aboutMeText, setAboutMeText] = useState(language === 'es' ? aboutMeEs : aboutMeEn);
  const [aboutFade, setAboutFade] = useState(false);

  useEffect(() => {
    setAboutFade(true);
    const timeout = setTimeout(() => {
      setAboutMeText(language === 'es' ? aboutMeEs : aboutMeEn);
      setAboutFade(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [language, aboutMeEs, aboutMeEn]);

  const firstExperienceEs = `Diseño y desarrollo de un ERP a medida utilizando JavaScript, optimizando la interfaz de usuario para mejorar la experiencia del cliente. Implementación de soluciones web personalizadas adaptadas a diversas necesidades empresariales, así como mejoras en los procesos logísticos que contribuyeron a la eficiencia del código. Además, desarrollé funciones para crear, filtrar y editar información mediante MySQL Shell en Visual Studio.`;
  const firstExperienceEn = `Design and development of a custom ERP system using JavaScript, optimizing the user interface to enhance customer experience. Implementation of tailored web solutions to meet various business needs, along with improvements in logistics processes that contributed to code efficiency. Additionally, I developed functions to create, filter, and edit information using MySQL Shell in Visual Studio.`;

  const [firstExperienceText, setfirstExperienceText] = useState(language === 'es' ? firstExperienceEs : firstExperienceEn);
  const [firstExperienceFade, setfirstExperienceFade] = useState(false);

  useEffect(() => {
    setfirstExperienceFade(true);
    const timeout = setTimeout(() => {
      setfirstExperienceText(language === 'es' ? firstExperienceEs : firstExperienceEn);
      setfirstExperienceFade(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [language, firstExperienceEs, firstExperienceEn]);

  const degreeTextEs = 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)';
  const degreeTextEn = 'Advanced Technician in Multiplatform Application Development (DAM)';

  const [degreeText, setDegreeText] = useState(language === 'es' ? degreeTextEs : degreeTextEn);
  const [degreeFade, setDegreeFade] = useState(false);

  useEffect(() => {
    setDegreeFade(true);
    const timeout = setTimeout(() => {
      setDegreeText(language === 'es' ? degreeTextEs : degreeTextEn);
      setDegreeFade(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [language, degreeTextEs, degreeTextEn]);

  return (
    <>
      <header className="header-container">
        <div className="header-info">
          <h1 className="header-name">Jorge Casanova Sánchez</h1>
          
          <p className={`header-title fade ${fade ? 'fade-out' : 'fade-in'}`}>
            {visibleText.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>

          <div className="contacto">
            <p className="location">
              <img src={locationIcon} alt="Icono de ubicación" className="location-icon" />
              Guadarrama, Madrid, {language === 'es' ? 'España' : 'Spain'}
            </p>
            <p className="telephone">
              <img src={telephoneIcon} alt="Icono de teléfono" className="telephone-icon" />
              648 07 50 79
            </p>
            <SocialButtons 
              darkMode={darkMode}
              onToggleTheme={onToggleTheme}
              language={language}
              onToggleLanguage={onToggleLanguage}
            />
          </div>
        </div>
        
        <div className="header-foto">
          <img src={fotoPerfil} alt="Foto de Jorge" className="foto-perfil" />
        </div>
      </header>

      <div className="body-container">
        <h1 className="about-me-title">{language === 'es' ? 'Sobre mí' : 'About'}</h1>
        <p className={`about-me-content fade ${aboutFade ? 'fade-out' : 'fade-in'}`}>
          {aboutMeText.split('\n').map((line, i) => (
            <span key={i}>{line.trim()}<br /></span>
          ))}
        </p>
      </div>

      <div className="experience-container">
        <h1 className="experience-title">
          {language === 'es' ? 'Mi experiencia' : 'Experience'}
        </h1>
        <div className="experience-entry">
          <div className="experience-header">
            <span className="company-name">Abaco Developments</span>
            <span className="work-type">{language === 'es' ? 'Remoto' : 'Remote'}</span>
            <span className="date-range">{language === 'es' ? 'Sep 2024 - Dic 2024' : 'Sep 2024 - Dec 2024'}</span>
          </div>
          <p className="work-range">{language === 'es' ? 'Desarrollador en prácticas' : 'Developer Intern'}</p>
          <p className={`experience-content fade ${firstExperienceFade ? 'fade-out' : 'fade-in'}`}>
            {firstExperienceText}
          </p>
        </div>
      </div>

      <div className="education-container">
        <h1 className="education-title">
          {language === 'es' ? 'Educación' : 'Education'}
        </h1>
        <div className="education-header">
          <span className="university-name">I.E.S Infanta Elena</span>
          <span className="education-range">Sep 2021 - Jun 2024</span>
        </div>
        <p className={`degree-name fade ${degreeFade ? 'fade-out' : 'fade-in'}`}>{degreeText}</p>
      </div>

      <div className="projects-container">
        <h1 className="projects-title">
          {language === 'es' ? 'Proyectos' : 'Projects'}
        </h1>

        <div className="cards-wrapper">

          {/* Proyecto 4 - Stack Shop */}
          <ProjectCards
            title="Stack Shop"
            description={
              language === 'es'
                ? 'E-commerce completamente funcional con autenticación, carrito de compras, sistema de pedidos, panel de administración y notificaciones en tiempo real. Construido con un stack moderno y profesional.'
                : 'Fully functional e-commerce with authentication, shopping cart, order system, admin panel and real-time notifications. Built with a modern and professional stack.'
            }
            hoverDescription={
              language === 'es'
                ? `Aspectos destacados del proyecto:\n\n- Autenticación y autorización con JWT\n\n- Carrito de compras con persistencia\n\n- Sistema de pedidos y tracking\n\n- Panel de administración con analytics\n\n- Notificaciones en tiempo real con WebSockets\n\n- Sistema de cupones y descuentos\n\n- Filtros y búsquedas avanzadas`
                : `Project highlights:\n\n- Authentication and authorization with JWT\n\n- Shopping cart with persistence\n\n- Order system and tracking\n\n- Admin panel with analytics\n\n- Real-time notifications with WebSockets\n\n- Coupon and discount system\n\n- Advanced filters and search`
            }
            tags={['Spring Boot', 'Java 21', 'Spring Security', 'MySQL', 'Redis', 'Docker', 'React 18', 'WebSockets']}
            videoSrc={stackShopDemo}
            videoLayout="desktop"
          />

          {/* Proyecto 3 - Invoice Manager */}
          <ProjectCards
            title={language === 'es' ? 'Invoice Manager' : 'Invoice Manager'}
            description={
              language === 'es'
                ? 'Aplicación web full-stack para la gestión eficiente y visual de ingresos y gastos personales. Diseñada para ofrecer control total sobre las finanzas con gráficos dinámicos y gestión completa de transacciones.'
                : 'Full-stack web application for efficient and visual management of personal income and expenses. Designed to offer total financial control with dynamic charts and complete transaction management.'
            }
            hoverDescription={
              language === 'es'
                ? `Aspectos destacados del proyecto:\n\n- Gráficos dinámicos de ingresos y gastos\n\n- Filtros por semanas, meses o años\n\n- Gestión CRUD completa de transacciones\n\n- Filtros por tipo, categoría y rango de fechas\n\n- Backend con Spring Boot y MySQL\n\n- Frontend con React`
                : `Project highlights:\n\n- Dynamic income and expense charts\n\n- Filters by weeks, months or years\n\n- Full CRUD transaction management\n\n- Filters by type, category and date range\n\n- Backend with Spring Boot and MySQL\n\n- Frontend with React`
            }
            tags={['Spring Boot', 'Java 17', 'MySQL', 'React', 'Maven', 'IntelliJ IDEA', 'Visual Studio Code']}
            videoSrc={invoiceDemo}
            videoLayout="desktop"
          />

          {/* Proyecto 2 - Notas Personales */}
          <ProjectCards
            title={language === 'es' ? 'Notas Personales' : 'Personal Notes'}
            description={
              language === 'es'
                ? 'Aplicación web full-stack diseñada para gestionar notas personales de forma rápida y eficaz. Combina un backend que maneja el almacenamiento y procesamiento de los datos con un frontend que ofrece una interfaz de usuario amigable e intuitiva.'
                : 'Full-stack web application designed for quick and efficient personal note management. It combines a backend that handles data storage and processing with a frontend that offers a user-friendly and intuitive interface.'
            }
            hoverDescription={
              language === 'es'
                ? `Aspectos destacados del proyecto:\n\n- Crear nuevas notas rápidamente\n\n- Ver notas almacenadas de forma organizada\n\n- Editar contenido de notas existentes\n\n- Eliminar notas que ya no sean necesarias\n\n- Interfaz moderna e intuitiva`
                : `Project highlights:\n\n- Quickly create new notes\n\n- View stored notes in an organized way\n\n- Edit existing note content\n\n- Delete notes that are no longer needed\n\n- Modern and intuitive interface`
            }
            tags={['Full-Stack', 'H2 Database', 'CRUD', 'IntelliJ IDEA', 'Visual Studio Code']}
            videoSrc={personalNotesDemo}
            videoLayout="desktop"
          />

          {/* Proyecto 1 - Gear Fit App */}
          <ProjectCards
            title="Gear Fit App"
            description={
              language === 'es'
                ? 'He desarrollado una aplicación Android para ayudarte a llevar un control inteligente y personalizado de tu alimentación y actividad física. Un proyecto práctico, funcional y pensado para el día a día.'
                : 'I developed an Android application designed to help you manage your diet and physical activity in a smart and personalized way. A practical, functional project built for daily use.'
            }
            hoverDescription={
              language === 'es'
                ? `Aspectos destacados del proyecto:\n\n- Registro inteligente de comidas\n\n- Seguimiento semanal interactivo\n\n- Conteo de pasos en tiempo real\n\n- Gestión personalizada de alimentos\n\n- Escaneo rápido de alimentos\n\n- Base de datos robusta y eficiente`
                : `Project highlights:\n\n- Smart meal logging\n\n- Weekly interactive tracking\n\n- Real-time step counting\n\n- Custom food management\n\n- Rapid food scanning\n\n- Robust and efficient database`
            }
            tags={['Android Studio', 'Java', 'SQLite', 'CameraX', 'Google ML Kit', 'SensorManager']}
            videoSrc={projectDemo}
          />

        </div>
      </div>

      <div className="tools-container">
        <h1 className="tools-title">
          {language === 'es' ? 'Herramientas' : 'Tools'}
        </h1>
        <div className="tools-tags">
          {[
              'MongoDB',
              'Git / GitHub',
              'Docker',
              'Redis',
              'PostgreSQL',
              'TypeScript',
              'IntelliJ IDEA',
              'Visual Studio',
              'Android Studio',
              'Maven',
              'Spring Security / JWT',
              'SQL / MySQL / SQLite',
          ].map((tool, index) => (
            <span key={index} className="tool-tag">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;