import React, { useState, useEffect } from 'react';
import fotoPerfil from '../assets/foto-jorge.jpg';
import locationIcon from '../assets/world-icon.jpg'; 
import telephoneIcon from '../assets/telephone-icon.jpg';
import SocialButtons from './SocialButtons';
import '../styles/globals.css';
import '../styles/light-theme.css'; 
import '../styles/dark-theme.css'; 

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


  return (
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
  );
};

export default Header;