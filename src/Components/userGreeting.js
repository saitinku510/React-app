import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    let message 
    if(this.state.isLoggedIn){
        message = <div>Welcome Venkat</div>
    }else{
        message = <div>Welcome to the user</div>
    }

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Venkat</div>;
    // } else {
    //   return <div>Welcome to the Guest User</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Venkat</div>
    //     <div>Welcome to the Guest User</div>
    //   </div>
    // )
    return(
        <div>{message}</div>
    )
  }
}

export default UserGreeting;
