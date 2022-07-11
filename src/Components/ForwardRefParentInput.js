import React, { Component } from "react";
import ForwardRefInputs from "./ForwardRefInputs";

class ForwardRefParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
      this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <ForwardRefInputs ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}

export default ForwardRefParentInput;
