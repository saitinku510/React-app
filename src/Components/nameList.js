import React from "react";
import Person from "./person";

function NameList() {
    const name = ['venkat', 'bhargav', 'sadik', 'romaan', 'bhargav'];
  const person = [
    {
      id: 1,
      name: "venkat",
      age: 23,
    },
    {
      id: 2,
      name: "sadik",
      age: 20,
    },
    {
      id: 3,
      name: "bhargav",
      age: 19,
    },
  ];
  const nameList = name.map((name, index) => <h2 key={index}>{index} {name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
