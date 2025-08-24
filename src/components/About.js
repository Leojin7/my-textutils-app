
import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content glass fade-in">
        <div className="about-header">
          <h1 className="about-title">About iNotebook</h1>
          <p className="about-subtitle">Your secure digital notebook in the cloud</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3>Secure & Private</h3>
            <p>Your notes are encrypted and stored securely. Only you have access to your personal thoughts and ideas.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3>Easy Organization</h3>
            <p>Create, edit, and organize your notes with tags. Find what you need quickly with our intuitive interface.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3>Cloud Sync</h3>
            <p>Access your notes from anywhere. Your data is automatically synced across all your devices.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>Fast & Responsive</h3>
            <p>Built with modern web technologies for a smooth, fast experience on desktop and mobile devices.</p>
          </div>
        </div>

        <div className="about-description">
          <h2>Why Choose iNotebook?</h2>
          <p>
            iNotebook is designed for people who value simplicity, security, and accessibility. Whether you're a student, 
            professional, or creative individual, our platform provides the perfect space to capture your thoughts, 
            organize your ideas, and access them whenever inspiration strikes.
          </p>
          <p>
            Built with React and modern web technologies, iNotebook offers a seamless experience with beautiful 
            animations, responsive design, and intuitive user interface that makes note-taking a pleasure.
          </p>
        </div>

        <div className="tech-stack">
          <h3>Built With</h3>
          <div className="tech-badges">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">MongoDB</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">JWT Auth</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
