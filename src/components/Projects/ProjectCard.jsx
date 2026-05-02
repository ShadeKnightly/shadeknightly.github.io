// ─────────────────────────────────────────────
//  src/components/Projects/ProjectCard.jsx
//  Renders a single project card.
//  Receives a project object from projects.js
// ─────────────────────────────────────────────

import { useState } from "react";

export default function ProjectCard({ project }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { name, badge, badgeStyle, featured, highlight, description, tags, youtubeId } = project;

  return (
    <article className={`project-card ${featured ? "project-card--featured" : ""}`}>

      {/* Video / placeholder */}
      <div className="video-wrapper">
        {videoLoaded && youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={name}
          />
        ) : (
          <div
            className="video-placeholder"
            onClick={() => youtubeId && setVideoLoaded(true)}
            role={youtubeId ? "button" : undefined}
            aria-label={youtubeId ? `Play demo for ${name}` : undefined}
          >
            {youtubeId ? (
              <>
                <div className="play-btn" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--sky)">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="video-label">Watch Demo</span>
              </>
            ) : (
              <span className="video-label">Demo Coming Soon</span>
            )}
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="project-info">
        <span className={`project-badge badge-${badgeStyle}`}>{badge}</span>
        <h3 className="project-name">{name}</h3>
        {highlight && <p className="project-highlight">{highlight}</p>}
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

    </article>
  );
}
