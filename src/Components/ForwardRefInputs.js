import React from "react";

// function ForwardRefInputs() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }
const ForwardRefInputs = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ForwardRefInputs;
