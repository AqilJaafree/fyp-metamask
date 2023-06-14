import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import React from 'react';
function App() {
  const [address, setAddress] = useState('')
  //Helper Functions
  async function requestAccount(){
    console.log("Requesting Account...");

  //check if metamask extension exists
  if(window.ethereum){
    console.log("Metamask Detected");

    try{
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
      });
    setAddress(accounts[0])
    } catch (e) {
      console.log(e)
    }

    

  } else {
    console.log("Metamask Not Detected");
  
  }
  }
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={requestAccount}>Connect</button>
        <h3>Wallet Address:{address}</h3>

      </header>
    </div>
  );
}

export default App;
