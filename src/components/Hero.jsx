import { useRef } from 'react';
import fotoPerfil from '../assets/foto-jorge.jpg';
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
    email: 'mailto:jorge.casanova.sanchez@gmail.com',
    cv: `${process.env.PUBLIC_URL}/CV_Jorge_Casanova_Sanchez.pdf`,
  },
});

const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const MagneticButton = ({ href, children }) => {
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
            <MagneticButton href={t.links.email}>Email</MagneticButton>
          </div>
        </div>

        <div className="hero-photo">
          <img src={fotoPerfil} alt={`${t.name} — ${language === 'es' ? 'foto de perfil' : 'profile photo'}`} className="hero-photo-img" draggable={false} />
<span className="hero-photo-caption">
            {language === 'es' ? 'Déjame\npresentarme' : 'Let me\nintroduce\nmyself'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;