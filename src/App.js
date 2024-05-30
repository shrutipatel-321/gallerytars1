import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/searchbar/Search';
import Gallery from './components/gallery/Gallery';

function App() {
  const [result, setResult] = useState();
  // useEffect(() => {
  //   console.log(result);
  // }, [result])

  return (
    <div className="App">
      <Search result={result} setResult={setResult} />
      <Gallery result={result} />
    </div>
  );
}

export default App;
