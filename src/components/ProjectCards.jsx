import React, { useRef } from 'react';
import '../styles/project-cards.css';

const ProjectCards = ({ title, description, hoverDescription, tags, videoSrc }) => {
  const cardRef = useRef();

  const handleClick = () => {
    cardRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center', // También puedes usar 'start' si prefieres arriba
    });
  };

  return (
    <div className="project-card" ref={cardRef} onClick={handleClick}>
        <div className="left-column">
            <h2 className="project-title">{title}</h2>
            <p className="default-description">{description}</p>

            {hoverDescription && (
            <p className="hover-description">
              {hoverDescription.split('\n\n').map((line, i) => (
                <span key={i} className="hover-line">
                  {line}
                  <br />
                </span>
              ))}
            </p>
            )}
            
            {tags && tags.length > 0 && (
            <div className="tags">{tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>))}
            </div>
            )}
        </div>

        <div className="right-column">
            <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            />
        </div>
    </div>
  );
};

export default ProjectCards;
