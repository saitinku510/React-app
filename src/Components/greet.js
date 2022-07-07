import React from "react";

// function Greet() {
//   return <h1>Hello Me</h1>;
// }

// const Greet = () => <h1>Hello Me</h1>;

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} is working as a {props.job}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
