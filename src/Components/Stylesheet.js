import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let classname = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={classname}>Hi this is CSS</h1>
    </div>
  )
}

export default Stylesheet
