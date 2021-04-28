import logo from "./logo.svg";
import "./App.css";

const styles = {
  //background: "#f5f7b2",
  background: "whitesmoke",

  color: "black",
  padding: "1vw",
  borderRadius: "1vw", // border-radius: 1vw;
  fontFamily: "Inconsolata",
};

const learnReact = [
  "https://reactjs.org",
  "https://www.codecademy.com/learn/react-101",
  "https://www.google.com/",
];

const RandomArrInd = Math.floor(Math.random() * learnReact.length);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: "red", background: "orange" }}>Hello React!</h1>
        <p>Hello {RandomArrInd}</p>

        <a
          style={styles}
          className="App-link"
          href={learnReact[RandomArrInd]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
