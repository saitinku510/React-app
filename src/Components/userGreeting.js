import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Venkat</div>;
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Venkat</div>
    // ) : (
    //   <div>Welcome to the User</div>
    // );

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Venkat</div>
    // }else{
    //     message = <div>Welcome to the user</div>
    // }
    // return(
    //     <div>{message}</div>
    // )

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
  }
}

export default UserGreeting;
