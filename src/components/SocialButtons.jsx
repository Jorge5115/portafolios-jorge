import React, { useState, useEffect } from 'react';
import '../styles/social-buttons.css';
import linkedinIcon from '../assets/linkedin-icon.jpg';


const SocialButtons = ({ darkMode, onToggleTheme, language, onToggleLanguage }) => {
  const [showLang, setShowLang] = useState(language);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true); // inicia animación
    const timeout = setTimeout(() => {
      setShowLang(language); // cambia texto después de fade out
      setIsFading(false);    // termina animación
    }, 1000); // 200ms deben coincidir con CSS

    return () => clearTimeout(timeout);
  }, [language]);

  return (
    <div className="social-buttons">
      {/* Botón LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jorge-casanova-s%C3%A1nchez-763087320/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn linkedin"
      >
        <img 
          src={linkedinIcon} 
          alt="LinkedIn" 
          style={{
            width: '20px',
            height: '20px',
            objectFit: ' contain'
          }}
        />
      </a>

      {/* Botón GitHub */}
      <a
        href="https://github.com/tu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn github"
      >
        GitHub
      </a>

      {/* Botón idioma con transición real */}
      <button 
        onClick={onToggleLanguage}
        className="social-btn language"
      >
        <span className={`fade-text ${isFading ? 'fade-out' : 'fade-in'}`}>
          {showLang.toUpperCase()}
        </span>
      </button>


      {/* Botón Tema */}
      <button 
        onClick={onToggleTheme}
        className="social-btn theme"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default SocialButtons;