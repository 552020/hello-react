import "./Component.css";

function Component(props) {
  return (
    <div className="container">
      <div className="flex">
        <p className="p-c">{props.line}</p>
        <p className="p-c">I like {props.like}</p>

        <button className="myButton">{props.button}</button>
      </div>
    </div>
  );
}

export default Component;
