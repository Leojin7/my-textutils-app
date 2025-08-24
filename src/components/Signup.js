import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertContext } from '../context/alert/alertContext';
import './Login.css';

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const { showAlert } = useContext(AlertContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (credentials.password !== credentials.cpassword) {
      showAlert("Passwords do not match", "error");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password
        })
      });

      const json = await response.json();
      
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authToken);
        showAlert("Account created successfully!", "success");
        navigate("/")
      } else {
        showAlert(json.error || "Failed to create account", "error");
      }
    } catch (error) {
      console.error("Signup error:", error);
      showAlert("An error occurred. Please try again.", "error");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass fade-in">
        <div className="auth-header">
          <h2 className="auth-title">Join iNotebook</h2>
          <p className="auth-subtitle">
            Create your account to get started
          </p>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="form-input"
              placeholder="Enter your full name"
              value={credentials.name}
              onChange={onChange}
              minLength={3}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email-address" className="form-label">Email Address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="form-input"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="form-input"
              placeholder="Create a password (min 5 characters)"
              value={credentials.password}
              onChange={onChange}
              minLength={5}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input
              id="cpassword"
              name="cpassword"
              type="password"
              autoComplete="new-password"
              required
              className="form-input"
              placeholder="Confirm your password"
              value={credentials.cpassword}
              onChange={onChange}
              minLength={5}
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            Create Account
          </button>
          
          <p className="auth-link-text">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="auth-link"
            >
              Sign in here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
