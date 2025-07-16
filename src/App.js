import React, { useState } from 'react';
import Header from './components/Header';
import './styles/globals.css';

function App() {
  // Estados para controlar tema e idioma
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('es'); // 'es' o 'en'

  // Función para cambiar el tema
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
      <Header 
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        language={language}
        onToggleLanguage={toggleLanguage}
      />
    </div>
  );
}

export default App;