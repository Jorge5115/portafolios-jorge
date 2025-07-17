import React from 'react';
import '../styles/social-buttons.css';
import linkedinIcon from '../assets/linkedin-icon.jpg';
import githubIcon from '../assets/github-icon.jpg';
import translatorIcon from '../assets/translator-icon.jpg';
import lightThemeIcon from '../assets/light_theme-icon.jpg';
import darkThemeIcon from '../assets/dark_theme-icon.jpg'; 

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
        href="https://github.com/Jorge5115"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn github"
      >
         <img 
          src={githubIcon} 
          alt="LinkedIn" 
          style={{  
            width: '20px',
            height: '20px',
            objectFit: ' contain'
          }}/>
      </a>

      {/* Botón Idioma */}
      <button 
        onClick={onToggleLanguage}
        className="social-btn language"
        aria-label="Cambiar idioma"
      >
        <img 
          src={translatorIcon} 
          alt="LinkedIn" 
          style={{
            width: '20px',
            height: '20px',
            objectFit: ' contain'
          }}/>
      </button>


      {/* Botón Tema */}
      <button 
        onClick={onToggleTheme}
        className="social-btn theme"
        aria-label={darkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        style={{
          background: 'var(--bg-button-theme)',
          border: '1px solid var(--border-button-theme)',
        }}
      >
        <img 
          src={darkMode ? lightThemeIcon : darkThemeIcon} 
          alt={darkMode ? 'Tema claro' : 'Tema oscuro'} 
          style={{ 
            width: '20px',
            height: '20px', 
            objectFit: 'contain',
            filter: 'var(--icon-filter)',
          }}
        />
      </button>
    </div>
  );
};

export default SocialButtons;