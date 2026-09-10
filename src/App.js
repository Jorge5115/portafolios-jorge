import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ProjectsList from './components/ProjectsList';
import Stack from './components/Stack';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleLanguage = () => setLanguage(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <div className="app">
      <Header
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        language={language}
        onToggleLanguage={toggleLanguage}
      />
      <main>
        <Hero language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <ProjectsList language={language} />
        <Stack language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App;