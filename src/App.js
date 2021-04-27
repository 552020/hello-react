import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: "red", background: "orange" }}>Hello React!</h1>

        <div
          style={{
            width: "auto",
            height: "auto",
            padding: "1vw",
            background: "orange",
          }}
        >
          <p style={{ color: "red", background: "orange" }}>
            This is (partially) styled inline like this:
          </p>

          <p style={{ color: "red", background: "orange" }}>
            <code>{`
        <h1 style={{ color: "red", background: "orange" }}>Hello React!</h1>
          `}</code>
          </p>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
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
