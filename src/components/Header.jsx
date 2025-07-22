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

const Header = ({ darkMode, onToggleTheme, language, onToggleLanguage }) => {
  // Efecto para cambiar el tema en el HTML root
  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  
  const [visibleText, setVisibleText] = useState(language === 'es'
    ? 'Desarrollador junior con enfoque en Full-Stack, decidido a construir soluciones completas y escalables, uniendo lógica y diseño con React y Spring.'
    : 'Junior Developer with a focus on Full-Stack, determined to build complete and scalable solutions, combining logic and design learning React and Spring.'
    );
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true); // inicia fade-out
    const timeout = setTimeout(() => {
      setVisibleText(language === 'es'
        ? 'Desarrollador Junior con enfoque en Full-Stack, \ndecidido a construir soluciones completas y escalables, \nuniendo lógica y diseño aprendiendo React y Spring.'
        : 'Junior Developer with a focus on Full-Stack, \ndetermined to build complete and scalable solutions, \ncombining logic and design learning React and Spring.'
      );
      setFade(false); // inicia fade-in
    }, 300); // medio segundo de desvanecimiento

    return () => clearTimeout(timeout);
  }, [language]);

  // Estado y fade para el texto "About me"
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

   // Estado y fade para el texto "First experience"
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

  // Estado y fade para el texto "First degree"
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
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <div className="contacto">
          <p className="location">
            <img 
              src={locationIcon} 
              alt="Icono de ubicación" 
              className="location-icon"
            />
            Guadarrama, Madrid, {language === 'es' ? 'España' : 'Spain'}
          </p>
          <p className="telephone">
            <img 
              src={telephoneIcon} 
              alt="Icono de teléfono" 
              className="telephone-icon"
            />
            648 07 50 79
          </p>

          {/* Botones sociales */}
          <SocialButtons 
            darkMode={darkMode}
            onToggleTheme={onToggleTheme}
            language={language}
            onToggleLanguage={onToggleLanguage}
          />
        </div>

      </div>
      
      <div className="header-foto">
        <img 
          src={fotoPerfil} 
          alt="Foto de Jorge" 
          className="foto-perfil"
        />
      </div>
    </header>

    <div className="body-container">
      <h1 className="about-me-title">{language === 'es' ? 'Sobre mí' : 'About'}</h1>
        <p className={`about-me-content fade ${aboutFade ? 'fade-out' : 'fade-in'}`}>
          {aboutMeText.split('\n').map((line, i) => (
            <span key={i}>
              {line.trim()}
              <br />
            </span>
          ))}
        </p>
    </div>

    <div className="experience-container">
      <h1 className="experience-title">
        {language === 'es' ? 'Mi experiencia' : 'Experience'}
      </h1>

      <div className="experience-entry">
        <div className="experience-header">
          <span className="company-name">Abaco Developmetns</span>
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

      <ProjectCards
        title="Nutrition App"
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
        tags={['Android Studio', 'Java', 'SQLite', 'CameraX', 'Google Ml Kit', 'SensorManager']} // puedes añadir los tags que quieras
        videoSrc={projectDemo}
      />
    </div>

    <div className="tools-container">
      <h1 className="tools-title">
        {language === 'es' ? 'Herramientas' : 'Tools'}
      </h1>
    </div>
    </>
  );
};

export default Header;