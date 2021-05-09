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

const content = [
  {
    id: "c1",
    line: "I'm a component.",
    like: "Ice cream 🍦",
    button: "click me!",
  },

  { id: "c2", line: "Me too...", like: "kittens 🐈", button: "try me!" },
  {
    id: "c3",
    line: "Me as well!",
    like: "holidys 🏖🌊🏝🌅",
    button: "guess what!",
  },
];

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
          onClick={clickHandler}
          href="https://www.google.com/search?q=learn+react&oq=learn+react&aqs=chrome.0.69i59j0l4j69i60l3.4603j0j7&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        {/* <a href="#" class="myButton">
          white
        </a> */}
      </header>
      <main>
        <Component
          line={content[0].line}
          like={content[0].like}
          button={content[0].button}
        />
        <Component
          line={content[1].line}
          like={content[1].like}
          button={content[1].button}
        />
        <Component
          line={content[2].line}
          like={content[2].like}
          button={content[2].button}
        />
      </main>
    </div>
  );
}

export default App;
