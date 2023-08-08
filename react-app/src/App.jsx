import React, { useState } from 'react'
 
function Greeting(props){
    return <h1>Hello, {props.name}!</h1>
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Greeting name="Alice"/>
      <Greeting name="John"/>
    </div>
  )
}

export default App
