import '../styles/sections.css';

const Contact = ({ language }) => {
  const email = 'jorge.casanova.sanchez@gmail.com';
  const phone = '+34 648 07 50 79';

  const message = language === 'es'
    ? 'Estoy abierto a nuevas oportunidades.\nSi crees que podríamos encajar, ¡ponte en contacto conmigo!'
    : "I'm currently open to new roles.\nIf you think we could be a good match, get in touch!";

  return (
    <section className="section section-contact" id="contact">
      <p className="contact-message" key={language}>{message}</p>
      <div className="contact-links">
        <a className="contact-link" href={`mailto:${email}`}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 6 10-6" />
          </svg>
          {email}
        </a>
        <a className="contact-link" href={`tel:${phone.replace(/\s/g, '')}`}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {phone}
        </a>
      </div>
      <footer className="site-footer">© Jorge Casanova Sánchez 2026</footer>
    </section>
  );
};

export default Contact;