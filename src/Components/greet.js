import React from "react";

// function Greet() {
//   return <h1>Hello Me</h1>;
// }

// const Greet = () => <h1>Hello Me</h1>;

const Greet = ({name, job}) => {
  return (
    <div>
      <h1>
        Hello {name} is working as a {job}
      </h1>
      {/* {props.children} */}
    </div>
  );
};
export default Greet;
