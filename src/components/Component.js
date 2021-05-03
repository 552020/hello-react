import "./Component.css";

function Component(props) {
  return (
    <div className="container">
      <div className="flex">
        <p className="p-c">{props.line}</p>
        <button className="myButton">Click me!</button>
      </div>
    </div>
  );
}

export default Component;
