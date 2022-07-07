import React from "react";

const HelloJsx = () => {
  // return(
  //     <div className = "hello" id="Hey">
  //         <h1>Hello Jsx Compiler</h1>
  //     </div>
  // )
  return React.createElement(
    "div",
    { id: "hey", className: "hello" },
    React.createElement("h1", null, "Hello Me")
  );
};

export default HelloJsx;
