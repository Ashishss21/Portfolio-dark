import React, { useState, useEffect } from 'react';
import Main from "./Components/MainComponent";
import Loader from './Components/loaderComponent';
import './App.css';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },4000);
  })

  return (
    <div>
      {
        isLoading==true?
        <Loader/>:
        <Main/>
      }
    </div>
  );
}

export default App;
/*

*/