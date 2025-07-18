import React from 'react';
import '../styles/social-buttons.css';
import mailIcon from '../assets/mail-icon.jpg';
import linkedinIcon from '../assets/linkedin-icon.jpg';
import githubIcon from '../assets/github-icon.jpg';
import translatorIcon from '../assets/translator-icon.jpg';
import lightThemeIcon from '../assets/light_theme-icon.jpg';
import darkThemeIcon from '../assets/dark_theme-icon.jpg'; 

const SocialButtons = ({ darkMode, onToggleTheme, language, onToggleLanguage }) => {
  const tooltips = {
  mail: language === 'es' ? 'Enviar correo a jorge.casanova.sanchez@gmail.com' : 'Send an email to jorge.casanova.sanchez@gmail.com',  
  linkedin: language === 'es' ? 'Ver perfil de LinkedIn' : 'View LinkedIn profile',
  github: language === 'es' ? 'Ver perfil de GitHub' : 'View GitHub profile',
  language: language === 'es' ? 'Cambiar idioma' : 'Change language',
  theme: language === 'es' 
    ? (darkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro')
    : (darkMode ? 'Switch to light theme' : 'Switch to dark theme'),
  };
  
  return (
    <div className="social-buttons">
      {/* Botón Correo */}
      <a
        href="mailto:jorge.casanova.sanchez@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn mail"
        title={tooltips.mail}
        style={{
            background: 'var(--bg-button-theme)',
            border: '1px solid var(--border-button-theme)',
          }}
        >
        <img 
          src={mailIcon} 
          alt="Email" 
          style={{ 
            width: '20px',
            height: '20px', 
            objectFit: 'contain',
            filter: 'var(--icon-filter)',
          }}
        />
      </a>
      
      {/* Botón LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jorge-casanova-s%C3%A1nchez-763087320/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn linkedin"
        title={tooltips.linkedin}
        style={{
            background: 'var(--bg-button-theme)',
            border: '1px solid var(--border-button-theme)',
          }}
        >
        <img 
          src={linkedinIcon} 
          alt="LinkedIn" 
          style={{ 
            width: '20px',
            height: '20px', 
            objectFit: 'contain',
            filter: 'var(--icon-filter)',
          }}
        />
      </a>

      {/* Botón GitHub */}
      <a
        href="https://github.com/Jorge5115"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn github"
        title={tooltips.github}
        style={{
          background: 'var(--bg-button-theme)',
          border: '1px solid var(--border-button-theme)',
        }}
        >
        <img 
          src={githubIcon} 
          alt="GitHub" 
          style={{ 
            width: '20px',
            height: '20px', 
            objectFit: 'contain',
            filter: 'var(--icon-filter)',
          }}
        />
      </a>


      {/* Botón Idioma */}
      <button 
        onClick={onToggleLanguage}
        className="social-btn language"
        aria-label="Cambiar idioma"
        title={tooltips.language}
        style={{
          background: 'var(--bg-button-theme)',
          border: '1px solid var(--border-button-theme)',
        }}
        >
        <img 
          src={translatorIcon} 
          alt="Cambiar idioma" 
          style={{ 
            width: '20px',
            height: '20px', 
            objectFit: 'contain',
            filter: 'var(--icon-filter)',
          }}
        />
      </button>


      {/* Botón Tema */}
      <button 
        onClick={onToggleTheme}
        className="social-btn theme"
        aria-label={darkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        title={tooltips.theme}
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