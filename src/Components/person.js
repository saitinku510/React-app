import React from 'react'

function Person({personArg}) {
  return (
    <div>
      <h2>
      I am {personArg.name} & {personArg.age} years old
    </h2>
    </div>
  )
}

export default Person
