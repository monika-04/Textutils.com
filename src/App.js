import './App.css';
import Navbar from './Components/Navbar.js';
//import About from './Components/About.js';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import Textform from './Components/Textform';
// import {BrowserRouter as Router,
//         Switch, 
//         Route, 
//         Link} 
//         from "react-router-dom";
 
function App(){

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setalert] = useState(null)

  const showalert=(msg,type)=>{
    setalert({
      msg,
      type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("dark mode enabled", "Success");
      document.title =" Textutils - dark mode";
      setInterval(() => {
        document.title =" Textutils is amazing";
      }, 3000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode enabled", "Success");
      document.title =" Textutils - light mode";
      setInterval(() => {
        document.title ="Install Textutils";
      }, 1500);
    }
  }

  const greenMode=()=>{
     if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#014421';
      showalert("the green dark mode enabled","success");
     } 
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
     }    
  }
  
  return(
    <>
    {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} greenMode={greenMode} showalert={showalert}/>
     <Alert alert={alert} showalert={showalert}/>
     <div className="container" style={{textAlign :'left', padding: 40 }}>
     {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <Textform  heading='enter the text you want to analyze' showalert={showalert} mode={mode}/>
          {/* </Route>
    </Switch> */}
    </div> 
    {/* </Router> */}
    </>
  );
}

export default App;
