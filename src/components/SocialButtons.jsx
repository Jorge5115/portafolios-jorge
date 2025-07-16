import React from 'react';
import '../styles/social-buttons.css';

const SocialButtons = ({ darkMode, onToggleTheme, language, onToggleLanguage }) => {
  return (
    <div className="social-buttons">
      {/* Botón LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jorge-casanova-s%C3%A1nchez-763087320/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn linkedin"
      >
        LinkedIn
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

      {/* Botón Idioma */}
      <button 
        onClick={onToggleLanguage}
        className="social-btn language"
      >
        {language === 'es' ? 'EN' : 'ES'}
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