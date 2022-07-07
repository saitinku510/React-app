import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      name: "venkat",
    };
  }

  changeMessage(){
      this.setState({
          message : 'Thanks for subscribing'
      })
  }

  render() {
    let state = this.state;
    return (
      <div>
        <h1>
          {state.message} {state.name}
        </h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
