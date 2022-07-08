import React from "react";
import Person from "./person";

function NameList() {
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
  const personList = person.map((person) => <Person person={person}></Person>);
  return <div>{personList}</div>;
}

export default NameList;
