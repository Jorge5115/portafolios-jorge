import { useEffect, useRef } from 'react';
import {
  SiOpenjdk,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiReact,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiGit,
  SiJunit5,
} from 'react-icons/si';
import {
  FaServer,
  FaCode,
  FaKey,
  FaDesktop,
  FaDatabase,
  FaCogs,
  FaCheckCircle,
  FaRobot,
  FaRocket,
  FaBug,
  FaBrain,
} from 'react-icons/fa';
import '../styles/sections.css';

const ICONS = {
  server: FaServer,
  code: FaCode,
  key: FaKey,
  desktop: FaDesktop,
  database: FaDatabase,
  cogs: FaCogs,
  check: FaCheckCircle,
  robot: FaRobot,
  rocket: FaRocket,
  bug: FaBug,
  brain: FaBrain,
  java: SiOpenjdk,
  springBoot: SiSpringboot,
  springSecurity: SiSpringsecurity,
  hibernate: SiHibernate,
  react: SiReact,
  typescript: SiTypescript,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  mysql: SiMysql,
  redis: SiRedis,
  mongodb: SiMongodb,
  docker: SiDocker,
  git: SiGit,
  junit: SiJunit5,
};

const CATEGORIES = [
  {
    icon: 'server',
    label: { es: 'Backend', en: 'Backend' },
    items: [
      { icon: 'java', name: 'Java' },
      { icon: 'springBoot', name: 'Spring Boot' },
      { icon: 'springSecurity', name: 'Spring Security' },
      { icon: 'code', name: 'REST APIs' },
      { icon: 'hibernate', name: 'JPA / Hibernate' },
      { icon: 'key', name: 'OAuth2' },
    ],
  },
  {
    icon: 'desktop',
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      { icon: 'react', name: 'React' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'redux', name: 'Redux Toolkit' },
      { icon: 'tailwind', name: 'Tailwind CSS' },
    ],
  },
  {
    icon: 'database',
    label: { es: 'Bases de datos', en: 'Databases' },
    items: [
      { icon: 'mysql', name: 'MySQL' },
      { icon: 'redis', name: 'Redis' },
      { icon: 'mongodb', name: 'MongoDB' },
    ],
  },
  {
    icon: 'cogs',
    label: { es: 'DevOps', en: 'DevOps' },
    items: [
      { icon: 'docker', name: 'Docker' },
      { icon: 'rocket', name: 'CI/CD' },
      { icon: 'git', name: 'Git' },
    ],
  },
  {
    icon: 'check',
    label: { es: 'Testing', en: 'Testing' },
    items: [
      { icon: 'junit', name: 'JUnit' },
      { icon: 'bug', name: 'Mockito' },
    ],
  },
  {
    icon: 'robot',
    label: { es: 'Integración con IA', en: 'AI Integration' },
    items: [
      {
        icon: 'brain',
        name: {
          es: 'APIs de LLM (OpenAI / Gemini)',
          en: 'LLM APIs (OpenAI / Gemini)',
        },
      },
    ],
  },
];

const Stack = ({ language }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.stack-card');
    if (!cards || cards.length === 0) return;

    if (typeof IntersectionObserver === 'undefined') {
      cards.forEach((card) => card.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="stack">
      <h2 className="section-title">{language === 'es' ? 'Mi stack' : 'Stack'}</h2>
      <div className="stack-grid" ref={gridRef}>
        {CATEGORIES.map((category, index) => {
          const Icon = ICONS[category.icon];
          return (
            <article
              className="stack-card"
              key={category.label.en}
              style={{ '--stack-delay': `${index * 60}ms` }}
            >
              <div className="stack-card-header">
                <span className="stack-card-icon">
                  <Icon />
                </span>
                <h3 className="stack-card-title">{category.label[language]}</h3>
              </div>
              <div className="stack-tags">
                {category.items.map((item) => {
                  const ItemIcon = ICONS[item.icon];
                  const name =
                    typeof item.name === 'string' ? item.name : item.name[language];
                  return (
                    <span className="stack-tag" key={name}>
                      <ItemIcon />
                      {name}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Stack;