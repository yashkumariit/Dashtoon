import "./App.css";
import Navbar from "./components/Navbar_component/Navbar";
import Comic_body from "./components/Comic_body_component/Comic_body";
import { useState } from "react";
import { useEffect } from "react";
function App() {
 
  const [readingMode,setReadingMode]=useState(false);

 

  return (
    <div className="App">
      <Navbar readingMode={readingMode}/>
      <Comic_body readingMode={readingMode} setReadingMode={setReadingMode} />
    </div>
  );
}

export default App;
