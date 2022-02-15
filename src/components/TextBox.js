import React, { useState } from 'react';

export default function TextBox(props) {
  
  const handleUpClick = ()=>{
    console.log('Uppercase was clicked'+ text);
   // setText('You have clicked on handleUpClick')
   props.showalert("converted to uppercase","success")
    let newText = text.toUpperCase();
    setText(newText)

    }
    const handleLoClick = ()=>{
      console.log('lowercase was clicked'+ text);
     // setText('You have clicked on handleUpClick')
     props.showalert("converted to lowercase","success")
      let newText = text.toLowerCase();
      setText(newText)
  
      }
      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        props.showalert("Extra spaces Cleared!", "success");
        setText(newText.join(""))
        }
        
      const handleCopy = () => {
        var text = document.getElementById("text1");
        props.showalert("Copied To Clipboard", "success");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();

        }
        
      const handleclearClick = ()=>{
        console.log(text);
        props.showalert("Text Cleared!", "success");
       // setText('You have clicked on handleUpClick')
        let newText = " ";
        setText(newText)
    
        }
       
    const handleOnChange = (event)=>{
      console.log('On change');
      setText(event.target.value);
      }
      const [text, setText] = useState('');  
 // setText('Your Text here')
  return(
  <>
  <div className="container "style={{color: props.darkMode === 'dark'?'white':'black'}}>
    <h1 className='my-2'>{props.heading}</h1>
    <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.darkMode==='dark'? '#13466e': 'white', color: props.darkMode=== 'dark'?'white': 'black'}} id="text1" rows="8"></textarea>
  </div>
  <button disabled = {text.length===0} className="btn btn-success mx-2 my-1" onClick={handleUpClick}>convert to upper case</button>
  <button disabled = {text.length===0}className="btn btn-success mx-2 my-1" onClick={handleLoClick}>convert to lower case</button>
  <button disabled = {text.length===0}className="btn btn-success mx-2 my-1" onClick={handleclearClick}>Clear</button>
  <button disabled = {text.length===0} className= "btn btn-success mx-1 my-1" onClick={handleCopy}> Copy Text</button>
  <button disabled = {text.length===0} className= "btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
  
  </div>
  <div className="container my-3" style={{color : props.darkMode === 'dark'?'white':'black'}}>
    <h2>Your Text Count </h2>
    <p>Words {text.split(" ").filter((element)=>{return element.length !== 0}).length} and Count {text.length}</p>
    <p>{0.008* text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes To Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"enter something to preview in her"}</p>
  </div>
  </>)
}

