import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NewNavbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import NoteState from './context/notes/NoteState';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <NoteState>
      <AlertState>
        <Router>
          <Navbar />
          <Alert />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </AlertState>
    </NoteState>
  );
}

export default App;
