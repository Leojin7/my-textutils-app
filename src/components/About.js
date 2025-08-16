import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

const About = () => {
  const [dark, setDark] = useState(false)

  const aboutStyle = {
    color: dark ? 'white' : 'black',
    backgroundColor: dark ? '#4d5156ff' : 'white',
    padding: '20px',
    border: '1px solid #ccc',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  }
  return (
    <div className="container my-3 mx-2" style={aboutStyle}>
      {/* Toggle button */}
      <button className="btn btn-sm btn-outline-primary mb-3"
        onClick={() => setDark(!dark)}
      >
        {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <h1>About</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


    </div>
  )
}

export default About
