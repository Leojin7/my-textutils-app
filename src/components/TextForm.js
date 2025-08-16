import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

const TextForm = (props) => {
  const [text, setText] = useState('enter text here')



  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleUp = () => {
    let newText = text.toUpperCase();


    setText(newText);
  }

  const handledown = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }


  const handleSubmit = () => {
    alert('Submitted: ' + text);
  }

  const handleClear = () => {
    setText('');  // Clear the text area 
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(' ');
    setText(newText);
  }

  return (
    <div>
      <h1>{props.heading}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Example Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={text}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <div className='container'>
        <h1>Your Text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes to read</p>


      </div>

      <button className="btn btn-success mx-2" onClick={handleUp}>Convert to Uppercase</button>
      <button className="btn btn-warning mx-2" onClick={handledown}>Convert to Lowercase</button>
      <button className="btn btn-info mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      <button className="btn btn-secondary mx-2" onClick={handleClear}>Clear</button>
      <button className="btn btn-dark mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



    </div>
  )
}

export default TextForm
