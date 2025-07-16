import React from 'react';
import fotoPerfil from '../assets/foto-jorge.jpg';
import SocialButtons from './SocialButtons';
import '../styles/globals.css';

const Header = ({ darkMode, onToggleTheme, language, onToggleLanguage }) => {
  return (
    <header className="header-container">
      <div className="header-info">
        <h1 className="header-name">Jorge Casanova Sánchez</h1>
        <p className="header-title">
          {language === 'es' 
            ? 'Desarrollador Junior con enfoque en Full-Stack' 
            : 'Junior Developer focused on Full-Stack'}
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