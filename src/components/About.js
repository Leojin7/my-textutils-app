import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const About = ({ dark }) => {
  const aboutStyle = {
    color: dark ? 'white' : 'black',
    backgroundColor: dark ? '#222831' : 'white',
    padding: '20px',
    borderColor: dark ? '#6366f1' : '#ccc',
    boxShadow: dark ? '0 4px 24px rgba(0,0,0.10)' : '0 2px 10px rgba(0,0,0,0.10)',
    borderWidth: '1px',
    border: '1px solid #6366f1',
    borderRadius: '12px',
    margin: '18px 0',
    fontFamily: 'Courier New, Courier, monospace',
    transition: 'background-color 0.3s, color 0.3s',
  };


  return (
    <div style={aboutStyle}>
      <h1 className='courier' style={{ fontWeight: '700', fontFamily: 'Courier New, Courier, monospace' }}>About</h1>
      <Accordion defaultActiveKey="0" flush={dark}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet...
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div >
  );
};

export default About;
