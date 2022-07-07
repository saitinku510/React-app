import React from "react";
import { Component } from "react";

class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} and works as {this.props.job}</h1>
    }
}
export default Welcome;