import React from "react";

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
  const personList = person.map((person) => (
    <h2>
      I am {person.name} & {person.age} years old
    </h2>
  ));
  return <div>{personList}</div>;
}

export default NameList;
