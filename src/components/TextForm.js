import React, {useState} from "react";


export default function TextForm(props) {
 

  const handleUpperCase = ()=>{

    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowerCase = ()=>{ 

  let newText = text.toLowerCase();
  setText(newText);
  
  }

  const handleClear = ()=>{

    let newText = '';
    setText(newText);
  }
  
  const handleOnChange = (event)=>{
  
    setText(event.target.value)
  }

 const [text, setText] = useState();
// setText('Enter text here');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">    
        <textarea className="form-control"  value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
      </div>
      <div className="container-sm d-flex flex-column">
      <button className="btn btn-primary my-2 mx-2" onClick={handleUpperCase}>Convert to UpperCase</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear</button>
      </div>
    </div>
    <div className="container my-3">
    <h1>Your Text Summary</h1>
     <p>{text?.split(" ")?.length} words and {text?.length} character </p>
     <p>{0.008 * text?.split(" ")?.length} Minutes Read </p>
     <p>{text}</p>
    </div>
    </>

  );
}
