import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
// ---- Dark Mode Button -----
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a3b82";
      showAlert('Dark mode has been enabled', "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled', "success");
    }
  };

  //----- Set Alert Message -----
  const showAlert = (message, type)=>{
setAlert({
  msg: message,
  type: type,
})

setTimeout(() => {
  setAlert(null);
}, 1800);
  };

  return (
    <>
      <Navbar
        title="Text app"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert= {alert} />
      <div className="container">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert = {showAlert}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
