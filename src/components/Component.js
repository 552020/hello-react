import React, { useState } from "react";
import "./Component.css";

function Component(props) {
  const [button, setButton] = useState(props.button);

  const clickHandler = () => {
    setButton("Yes! 👌");
  };
  return (
    <div className="container">
      <div className="flex">
        <p className="p-c">{props.line}</p>
        <p className="p-c">I like {props.like}</p>

        <button onClick={clickHandler} className="myButton">
          {button}
        </button>
      </div>
    </div>
  );
}

export default Component;
