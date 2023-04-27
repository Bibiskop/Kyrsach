import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Sign from "./components/Sign";

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Sign" element={<Sign/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
