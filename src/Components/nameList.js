import React from "react";

function NameList() {
  const Names = ["venkat", "sadik", "bhargav"];
  const list = Names.map((name) => <h2>{name}</h2>);
  return <div>{list}</div>;
}

export default NameList;
