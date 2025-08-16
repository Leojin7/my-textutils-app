import React from 'react'
import './App.css'
import TextForm from './components/TextForm'
import AppNavbar from './components/Navbar'
import About from './components/About'

const App = () => {
  return (
    <>
      <AppNavbar title="TextUtils" aboutText="About TextUtils" />
      <div className='container'>
        <TextForm heading="Enter the Text to anaylze" />

        <About />
      </div>
    </>
  )
}

export default App
