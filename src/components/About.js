import React,{useState} from 'react';

export default function About(props) {
    // const[myStyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'})
    //const[btnText, setBtnText] = useState('Enable Dark mode')
    //  const toggleStyle =()=>{
    //     if(myStyle.color == 'black'){
    //     setMystyle({
    //     color: 'white',
    //     backgroundColor: 'black',
    //     Border: '1px solid white'
    //     })
    //     setBtnText('Enable Light Mode')} 
    //     else{setMystyle({
    //         color: 'back',
    //         backgroundColor: 'white'})
    //         setBtnText('Enable Dark Mode');}
    //     } 
    let myStyle = {
      color: props.darkMode === 'dark'?'white': 'black',
      backgroundColor: props.darkMode ==='dark'?'#042743':'white',
      border : '2px solid',
      borderColour : props.darkmode  === 'dark'?'white': 'black' 
      }
       
        
  return <div className='container' style={{color: props.darkMode === 'dark'?'white': '#042743'}}>
      <h1 className='my-2'>About us</h1>
<div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Textofy Analysis</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
  <strong>Textofy helps you to make your text perfect and easy to write. </strong>  whether its about removing spaces , copying text to clipboard ,uppercasing and lowercasing the text ,etc . You can also analyse  your text word count , character count and minute count in this, as it will be really helpful in writing appropriate word count essays . </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free To Use
      </strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        <strong>Free tool:</strong> It is a free tool to use with instant word and minute count . It reports word to word and character to character count and also the minutes we need to read it. thus , it is a suitable writing tool . 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Friendly</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Browser friendly:</strong> Textofy works in any web browser be its  chrome , firefox,Internet Explorer , Safari,Opera.It is  suitable to count  characters in facebook , pdfs , wordFiles ,essays and it can also be used with extensions like Grammeraly.
      </div>
    </div>
  </div>
</div>
{/* <div className="container">
<button onClick={toggleStyle} type='button' className='btn btn-primary'> {btnText}</button>

</div> */}
  </div>
}
