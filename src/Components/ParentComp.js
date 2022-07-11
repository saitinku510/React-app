import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./pureComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Venkat",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sai",
      });
    }, 2000);
  }

  render() {
    console.log("parent Comp")
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
