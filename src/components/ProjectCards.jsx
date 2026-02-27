import React, { useRef, useState } from 'react';
import '../styles/project-cards.css';

const ProjectCards = ({ title, description, hoverDescription, tags, videoSrc, videoLayout = 'mobile' }) => {
  const cardRef = useRef();
  const videoRef = useRef();
  const modalVideoRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) try { videoRef.current.pause(); } catch {}
  };

  const handleCardClick = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleZoom = (e) => {
    e.stopPropagation();
    const v = modalVideoRef.current || videoRef.current;
    if (!v) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    if (v.requestFullscreen) {
      v.requestFullscreen().catch((err) => console.log('Fullscreen error:', err));
    }
  };

  const visible = hovered;

  const contentBlock = (expanded = false) => (
    <>
      <h2 className="project-title">{title}</h2>
      <p className="default-description">{description}</p>
      {hoverDescription && (
        <p className="hover-description" style={{ display: expanded ? 'block' : undefined }}>
          {hoverDescription.split('\n\n').map((line, i) => (
            <span key={i} className="hover-line">{line}<br /></span>
          ))}
        </p>
      )}
      {tags && tags.length > 0 && (
        <div className="tags">
          {tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
        </div>
      )}
    </>
  );

  const videoBlock = (ref) => videoSrc && (
    <div className="video-wrapper">
      <video ref={ref} src={videoSrc} autoPlay muted loop playsInline />
      <button className="zoom-btn" onClick={handleZoom} aria-label="Zoom video">⤢</button>
    </div>
  );

  return (
    <>
      {/* CARD NORMAL */}
      <div
        className={`project-card ${videoLayout === 'desktop' ? 'desktop-layout' : ''} ${visible ? 'video-visible' : ''}`}
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        {videoLayout === 'desktop' ? (
          <>
            <div className="video-row">
              {visible && videoBlock(videoRef)}
            </div>
            <div className="content-row">{contentBlock()}</div>
          </>
        ) : (
          <div className="two-column">
            <div className="left-column">{contentBlock()}</div>
            <div className="right-column">
              {visible && videoBlock(videoRef)}
            </div>
          </div>
        )}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>

            {videoLayout === 'desktop' ? (
              <>
                <div className="modal-video-row">
                  {videoBlock(modalVideoRef)}
                </div>
                <div className="modal-content-row">{contentBlock(true)}</div>
              </>
            ) : (
              <div className="modal-two-column">
                <div className="modal-left">{contentBlock(true)}</div>
                <div className="modal-right">
                  {videoBlock(modalVideoRef)}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCards;