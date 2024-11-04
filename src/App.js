
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import DateScroll from './components/DateScroll';
import About from './components/About';
//import Viewdate from './components/Viewdate';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";


function App() {
const [mode, setMode] =  useState('dark');
const [alert,setAlert] = useState(null);


const showAlert = (message, type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
              setAlert(null);
        },3000);
}


const toggleMode = () =>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","success");
    document.title = 'TextUtils-Dark';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabed", "success");
  } document.title = 'TextUtils light_mode';
}
  return (
    <>
    <Router>
    
      <Navbar title="ashish"  mode ={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      
      {/* <DateScroll> </DateScroll>  */}
      {/* <About></About>  */}

        <Routes>
          <Route exact path="/about"  element={ <About />}/>
          <Route exact path="/"    element = {<TextForm mode ={mode} showAlert ={showAlert}></TextForm>}/>
          </Routes>

      </Router>
  
      </>
  );
}


export default App;
