import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

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
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container'>
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
