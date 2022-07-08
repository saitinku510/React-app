import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      select: "angular",
    };
  }

  handleUserName = event => {
    this.setState({
      username: event.target.value,
    });
  };

  handleComments = event => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleSelect = event => {
    this.setState({
      select: event.target.value,
    });
  };
  
  handleSubmit = event => {
      event.preventDefault()
      alert(`${this.state.username} ${this.state.select} ${this.state.comments}`)
  }

  render() {
      const {comments, username, select} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={username}
              onChange={this.handleUserName}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={comments}
              onChange={this.handleComments}
            ></textarea>
          </div>
          <div>
            <label>Select</label>
            <select value={select} onChange={this.handleSelect}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
