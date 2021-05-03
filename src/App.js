import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Component from "./components/Component";

const styles = {
  //background: "#f5f7b2",
  background: "whitesmoke",

  color: "black",
  padding: "1vw",
  borderRadius: "1vw", // border-radius: 1vw;
  fontFamily: "Inconsolata",
};

// const clickHandler = () => {
//   RandomArrInd();
// };

// props.randomLink = learnReact[RandomArrInd];
// let randomLink = learnReact[RandomArrInd];

function App(props) {
  // Learn React Link

  const learnReact = [
    "https://reactjs.org",
    "https://www.codecademy.com/learn/react-101",
    "https://www.google.com/",
  ];
  const RandomArrInd = Math.floor(Math.random() * learnReact.length);
  const [randomLink, setLink] = useState(props.randomLink);

  const clickHandler = () => {
    setLink(learnReact[RandomArrInd]);
  };

  // Button

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: "red", background: "orange" }}>Hello React!</h1>
        {/* <p>Hello {RandomArrInd}</p> */}

        <a
          style={styles}
          className="App-link"
          onclick={clickHandler}
          href={randomLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <a href="#" class="myButton">
          white
        </a> */}
      </header>
      <main>
        <Component />
        <Component />
        <Component />
      </main>
    </div>
  );
}

export default App;
