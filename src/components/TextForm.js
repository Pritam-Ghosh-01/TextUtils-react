import React, {useState} from 'react'



export default function TextForm(props) {
  
  const handleUpClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLowClick = () => {
    
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleClearClick = () => {
    
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared!", "success");
  };
  

  const handleBoldClick = () => {
  setIsBold(!isBold);
  props.showAlert(isBold ? "Text is now normal!" : "Text is now bold!", "success"); 
};
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  
  const [text, setText] = useState("Enter Text here");
  const [isBold, setIsBold] = useState(false);
  return (
    <>
    <div className='container'
  style={{ color: props.mode === 'dark'|| props.red ==='red'? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : props.red === 'red' ? 'lightcoral' : 'white', color: props.mode === 'dark' || props.red === 'red' ? 'white' : 'black', fontWeight: isBold ? 'bold' : 'normal' }} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleBoldClick}>Make Bold</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark' || props.red === 'red'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.trim().split(/\s+/).filter(word => word.length !== 0).length} words and {text.length} characters</p>
      <p>{0.008*text.trim().split(/\s+/).filter(word => word.length !== 0).length} Minutes read</p>
      <h2>Preview</h2>
      <p style={{ fontWeight: isBold ? 'bold' : 'normal' }}>
        {text}
      </p>

    </div>
    </>
  )
}
