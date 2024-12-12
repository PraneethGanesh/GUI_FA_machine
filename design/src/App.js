// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
    <div className="App">
      <h1>Simulation of Finite Machine </h1>
    </div>
    <div className="block">
      <label>Enter the number of state</label>
      <div>
        <input type="text" placeholder=".."/>
      </div>
      <label>Enter the initial state</label>
      <div>
        <input type="text" placeholder=".."/>
      </div>
      <label>Enter the initial state</label>
      <div>
        <input type="text" placeholder=".."/>
      </div>
      <label>Enter the Final state</label>
      <div>
        <input type="text" placeholder=".."/>
      </div>
      <label>Attach the file</label>
      <div>
        <input type="file" id="Myfile" placeholder=".."/>
      </div>
      <p>
        <h4>Enter the accepting string</h4>
        <input type="text" placeholder=".."/>
      </p>
    </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
