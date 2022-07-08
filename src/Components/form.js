import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  handleUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserName}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
