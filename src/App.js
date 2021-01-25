import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [boke, setBoke] = useState('')
  const [punchline, setPunchline] = useState('')

  const getBoke = () => {
    axios.get('https://official-joke-api.appspot.com/jokes/random').then( 
      (res) => {
        setBoke("ボケ：" + res.data.setup);
      }
    );
  }

  const getPunchline = () => {
    axios.get('https://official-joke-api.appspot.com/jokes/random').then( 
      (res) => {
        setPunchline("ツッコミ：" + res.data.punchline);
      }
    );
  }

  const Joke = () => {
    getBoke();
    getPunchline();
  }

  return (
    <div>
      <h1 className="App">
        REACT-AXIOS
      </h1>
      <div className={"btn"} >
        <button type="button" onClick={Joke}>Get Joke API</button>
      </div>
      <div className={"boke"}>
        {boke} 
      </div>
      <div className={"punchline"}>
        {punchline} 
      </div>
    </div>
  );
}

export default App;
