import React, { useState, useEffect } from 'react';
import fotoPerfil from '../assets/foto-jorge.jpg';
import SocialButtons from './SocialButtons';
import '../styles/globals.css';

const Header = ({ darkMode, onToggleTheme, language, onToggleLanguage }) => {
  const [visibleText, setVisibleText] = useState(language === 'es'
    ? 'Desarrollador Junior con enfoque en Full-Stack'
    : 'Junior Developer focused on Full-Stack'
  );
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true); // inicia fade-out
    const timeout = setTimeout(() => {
      setVisibleText(language === 'es'
        ? 'Desarrollador Junior con enfoque en Full-Stack'
        : 'Junior Developer focused on Full-Stack'
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
          {visibleText}
        </p>

        <div className="contacto">
          <p>📧 jorge.casanova.sanchez@gmail.com</p>
          <p>📞 +34 123 456 789</p>
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