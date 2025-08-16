import React, { useState, useEffect } from 'react'
import './App.css'
import TextForm from './components/TextForm'
import AppNavbar from './components/Navbar'
import About from './components/About'
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.body.style.background = dark ? '#222831' : '#f3f4f6';
    document.body.style.color = dark ? '#f1f5f9' : '#222831';
    document.title = 'TextUtils-Mode ' + (dark ? 'Dark' : 'Light');


  }, [dark]);

  return (
    <>
      <ThemeToggle dark={dark} toggleDark={() => setDark((d) => !d)} />

      <AppNavbar title="TextUtils" aboutText="About TextUtils" dark={dark} />

      <div className={dark ? 'container bg-dark text-light' : 'container bg-light text-dark'} style={{
        borderRadius: "18px",
        padding: "18px",
        marginTop: "32px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",

      }}>


        <TextForm heading="Enter the Text to analyze" dark={dark} />
        <About dark={dark} />

      </div>
    </>
  )
}

export default App
