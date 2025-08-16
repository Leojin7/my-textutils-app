import React from 'react';

const ThemeToggle = ({ dark, toggleDark }) => (
  <div style={{ position: 'absolute', top: 16, right: 32, zIndex: 1000 }}>
    <label className="theme-switch">
      <input type="checkbox" checked={dark} onChange={toggleDark} />
      <span className="slider" />
      <span className="theme-label">{dark ? '🌙' : '☀️'}</span>
    </label>
    {/* Style */}
    <style>{`
      .theme-switch {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 12px;
      }
      .theme-switch input {
        display: none;
      }
      .slider {
        width: 44px;
        height: 24px;
        background: #ddd;
        border-radius: 12px;
        position: relative;
        margin-right: 10px;
       
        
        transition: background 0.3s;
      }
      .slider:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
        transition: transform 0.3s;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      }
      input:checked + .slider {
        background: #222831;
      }
      input:checked + .slider:after {
        transform: translateX(20px);
        background: #6366f1;
      }
      .theme-label {
        margin-left: 4px;
      }
    `}</style>
  </div>
);

export default ThemeToggle;
