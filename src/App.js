import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextBox  from './components/TextBox';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  const [darkMode,setDarkMode] = useState('white')
 
  const [alert, setalert] = useState(null);
  const showalert = (message ,type)=>{
setalert({
  msg : message,
  type : type
})
setTimeout(() => {
 setalert(null) 
}, 1500);
  }
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   }
    
  const toggleMode = ()=>{
    // removeBodyClasses();
    // document.body.classList.add('bg-' + cls)
    if(darkMode === 'light'){
    setDarkMode('dark')
  document.body.style.backgroundColor = '#042743'
  showalert("Dark mode has been enabled","success");
// document.title = 'Textofy-darkMode';
}
  
    else{
      setDarkMode('light') 
      document.body.style.backgroundColor = 'white'
      showalert("light mode has been enabled","success");
      // document.title = 'Textofy-lightMode';
    }
   
  }
 
  return (
    <>
    
    {/* <Clipboard />    */}
  
<Navbar title = "Textofy" darkMode = {darkMode} toggleMode = {toggleMode}/>
 <Alert alert = {alert}/> 
<div className="container my-3">
{/* <Switch>
<Route exact path= "/about">
<About  darkMode ={darkMode}/>
</Route>
<Route exact path="/"> */}
<TextBox showalert={showalert} heading = "Textofy|word counter |text manuplator" darkMode ={darkMode}/>
{/* </Route>
</Switch>  */}
 

</div>


</>  );
}

export default App;
