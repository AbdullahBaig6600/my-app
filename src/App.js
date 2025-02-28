import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);

      }, 1500)
  }

  const toggleMode = ()=>{
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042454';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      
      // Annoying ALert on Some websites - How it works 
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container'>
          <Routes>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
            </Route>
          </Routes>
        </div>
      </Router> */}
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            {/* /users --> Component 1
            /users/home --> Component 2
            Note: use "exact path" for exact matching otherwise React will do partial matching of path */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
