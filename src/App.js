import React from 'react';
import fotoPerfil from './assets/foto-jorge.jpg';
import './styles/globals.css'; // Importamos solo globals.css

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-info">
        <h1 className="header-name">Jorge Casanova Sánchez</h1>
        <p className="header-title">Desarrollador Full Stack | React & Node.js</p>
        <div className="contacto">
          <p>📧 jorge.casanova.sanchez@gmail.com</p>
          <p>📞 +34 123 456 789</p>
          {/* Botones sociales pueden agregarse aquí */}
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