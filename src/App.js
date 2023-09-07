import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FormControl from "./components/FormControl";
import About from "./components/About";
import Alert from "./components/Alert";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const setAlertFn = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#212529"
      setAlertFn("Switched to Dark Mode", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      setAlertFn("Switched to Light Mode", "success")
    }
    console.log(mode)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar toggle={toggleMode}></Navbar>
        <Alert alert={alert} setAlert={setAlert}></Alert>
        <Routes>
          <Route exact path="/" element={<FormControl mode={mode} setAlertFn={setAlertFn}></FormControl>} />
          <Route exact path="/React-Refresher" element={<FormControl mode={mode} setAlertFn={setAlertFn}></FormControl>} />
          <Route exact path="/about" element={<About></About>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
