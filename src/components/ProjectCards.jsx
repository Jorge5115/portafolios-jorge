// ...existing code...
import React, { useRef, useState } from 'react';
import '../styles/project-cards.css';

const ProjectCards = ({ title, description, hoverDescription, tags, videoSrc, videoLayout = 'mobile' }) => {
  const cardRef = useRef();
  const videoRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    setZoomed(false);
    if (videoRef.current) try { videoRef.current.pause(); } catch {}
  };

  // Zoom / fullscreen
  const handleZoom = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    // Try native fullscreen first
    if (v.requestFullscreen) {
      v.requestFullscreen().catch(() => setZoomed(z => !z));
      return;
    }
    // Fallback: toggle scaled view inside the card
    setZoomed(z => !z);
  };

  const visible = hovered; // según tu lógica previa

  return (
    <div
      className={`project-card ${videoLayout === 'desktop' ? 'desktop-layout' : ''} ${visible ? 'video-visible' : ''}`}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {videoLayout === 'desktop' ? (
        <>
          <div className={`video-row ${zoomed ? 'zoomed' : ''}`}>
            {visible && videoSrc && (
              <>
                <video ref={videoRef} src={videoSrc} autoPlay muted loop playsInline />
                <button className="zoom-btn" onClick={handleZoom} aria-label="Zoom video">⤢</button>
              </>
            )}
          </div>

          <div className="content-row">
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
        </>
      ) : (
        <div className="two-column">
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
            {visible && videoSrc && (
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCards;
