import React from "react";
import { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, job } = this.props;
    const { state1, state2 } = this.state; //this is used in the state methods
    return (
      <h1>
        Welcome {name} and works as {job}
      </h1>
    );
  }
}
export default Welcome;
