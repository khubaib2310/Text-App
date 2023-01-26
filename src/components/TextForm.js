import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState();

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper Case', "success")
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lower Case', "success")
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text Clear', "success")
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copy', "success")
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra space has been removed', "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // setText('Enter text here');
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode === 'dark' ? '#1d1d1d87' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
          ></textarea>
        </div>
        <div className="container d-flex flex-column">
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleUpperCase}
          >
            Convert to UpperCase
          </button> 
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleLowerCase}
          >
            Convert to LowerCase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>
            Clear
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleRemoveExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-3"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 >Your Text Summary</h1>
        <p>
          {text?.split(" ")?.filter((element) => {return element.length !== 0}).length} words and {text?.length} character
        </p>
        <h1>Preview</h1>
        <p>{0.008 * text?.split(" ")?.filter((element) => {return element.length !== 0}).length} Minutes Read </p>
        <p>{text}</p>
      </div>
    </>
  );
}
