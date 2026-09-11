import { useRef, useState } from 'react';
import fotoPerfil from '../assets/foto-jorge.jpg';
import cvEsp from '../assets/CV_Jorge_Casanova_ES.pdf';
import cvEng from '../assets/CV_Jorge_Casanova_EN.pdf';
import '../styles/hero.css';

const social = (language) => ({
  name: 'Jorge Casanova Sánchez',
  bio: language === 'es'
    ? [
        '¡Hola! Me llamo Jorge y soy Desarrollador Full Stack viviendo en Madrid. Crecí con internet y siempre me ha apasionado el software.',
        'Terminé el grado superior de DAM y, desde entonces, llevo dos años formándome por mi cuenta, aprendiendo a diseñar, desarrollar, testear y desplegar proyectos completos de forma independiente.',
        'Actualmente estoy abierto a nuevas oportunidades laborales, si crees que podríamos encajar, ¡no dudes en ponerte en contacto conmigo!',
      ]
    : [
        'Hello there! My name is Jorge and I\'m a Full Stack Developer living in Madrid. I grew up on the internet and am passionate about software.',
        'I completed DAM (Multiplatform Application Development), and for the past two years I\'ve been self-teaching, learning to design, develop, test, and deploy complete projects independently.',
        'I\'m currently open to new job opportunities. If you think we could be a good match, don\'t hesitate to get in touch!',
      ],
  subtitle: language === 'es' ? 'Desarrollador Fullstack' : 'Fullstack Developer',
  links: {
    linkedin: 'https://www.linkedin.com/in/jorge-casanova-s%C3%A1nchez-763087320/',
    github: 'https://github.com/Jorge5115',
  },
});

const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const MagneticButton = ({ href, children, onClick }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - py) * 14;
    const rotateY = (px - 0.5) * 14;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <a
      ref={ref}
      className="hero-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <ArrowUpRightIcon />
    </a>
  );
};

const Hero = ({ language }) => {
  const t = social(language);
  const [cvOpen, setCvOpen] = useState(false);

  const cvFile = language === 'es' ? cvEsp : cvEng;
  const cvName = language === 'es' ? 'CV_Jorge_Casanova_ES.pdf' : 'CV_Jorge_Casanova_EN.pdf';

  return (
    <section className="hero" id="top">
      <div className="hero-container">
        <div className="hero-info">
          <h1 className="hero-name">{t.name}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          {t.bio.map((para, i) => (
            <p
              className="hero-summary"
              key={i}
              style={{ '--hero-delay': `${0.29 + i * 0.12}s` }}
            >
              {para}
            </p>
          ))}

          <div className="hero-actions">
            <MagneticButton href={t.links.linkedin}>LinkedIn</MagneticButton>
            <MagneticButton href={t.links.github}>GitHub</MagneticButton>
            <MagneticButton
              href={cvFile}
              onClick={(e) => {
                e.preventDefault();
                setCvOpen(true);
              }}
            >
              CV
            </MagneticButton>
          </div>
        </div>

        <div className="hero-photo">
          <img src={fotoPerfil} alt={`${t.name} — ${language === 'es' ? 'foto de perfil' : 'profile photo'}`} className="hero-photo-img" draggable={false} />
<span className="hero-photo-caption">
            {language === 'es' ? 'Déjame\npresentarme' : 'Let me\nintroduce\nmyself'}
          </span>
        </div>
      </div>

      {cvOpen && (
        <div className="cv-overlay" onClick={() => setCvOpen(false)} role="presentation">
          <div className="cv-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="cv-modal-header">
              <span className="cv-modal-title">{language === 'es' ? 'Mi Currículum Vitae' : 'My Curriculum Vitae'}</span>
              <button
                className="cv-modal-close"
                onClick={() => setCvOpen(false)}
                aria-label={language === 'es' ? 'Cerrar' : 'Close'}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="cv-frame">
              <iframe
                src={cvFile}
                title={language === 'es' ? 'Vista previa del CV' : 'CV preview'}
                loading="lazy"
              />
            </div>

            <div className="cv-footer">
              <a className="cv-download" href={cvFile} download={cvName}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {language === 'es' ? 'Descargar' : 'Download'}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;