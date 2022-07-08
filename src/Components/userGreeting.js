import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Venkat</div>;
    } else {
      return <div>Welcome to the Guest User</div>;
    }
    // return (
    //   <div>
    //     <div>Welcome Venkat</div>
    //     <div>Welcome to the Guest User</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
