import Navbar from "./components/Navbar";
import FormControl from "./components/FormControl";
import React, {useState} from "react";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {

  const [mode,setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const setAlertFn = (msg, type) => {
    setAlert({
      msg : msg,
      type : type
    })
    
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#212529"
      setAlertFn("Switched to Dark Mode","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      setAlertFn("Switched to Light Mode","success")
    }
    console.log(mode)
  }

  return (
    <div className="App">
      <Navbar toggle={toggleMode}></Navbar>
      <Alert alert={alert} setAlert={setAlert}></Alert>
      <FormControl mode={mode} setAlertFn={setAlertFn}></FormControl>
      <About></About>
    </div>
  );
}

export default App;
