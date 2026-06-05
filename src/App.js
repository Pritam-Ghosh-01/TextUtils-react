// import logo from './logo.svg';
import './App.css';
import Navbar from "C:/Users/prita/OneDrive/Desktop/Pritam Personal/React/my-app/src/components/Navbar.js";
import TextForm from "C:/Users/prita/OneDrive/Desktop/Pritam Personal/React/my-app/src/components/TextForm.js";
import About from "C:/Users/prita/OneDrive/Desktop/Pritam Personal/React/my-app/src/components/About.js"
import { useState } from 'react';
import Alert from "C:/Users/prita/OneDrive/Desktop/Pritam Personal/React/my-app/src/components/Alert.js";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [red, setRed] = useState('light');
   const showAlert =(message, type) => {
    setAlert({msg: message,
              type: type});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    
  };
   const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };
   const redMode = () => {
    if (red === 'light') {
      setRed('red');
      document.body.style.backgroundColor = 'lightcoral';
      showAlert("Red mode has been enabled", "success");
    } else  {
      setRed('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Red mode has been disabled", "success");
    }
  };
  return (
<>

<Router>
<Navbar  title="TextUtils" aboutText="About TextUtils" mode={mode} red={red} toggleMode={toggleMode} redMode={redMode}/>
<Alert alert={alert}/>
<div className="container my-3">

<Routes>
  

  <Route
    exact path="/"
    element={
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze"
        mode={mode}
        red={red}
      />
    }
  />
  <Route exact path="/about" element={<About />} />
</Routes>
   
</div>
</Router>

 

</>
  );
}

export default App;
