import React, { useState } from 'react'
 
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      count:0
    }
  }

  render(){
    return (
      <div>
        <p>you clicked the button {this.state.count} times</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          click me
        </button>
      </div>
    )
  }
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
     <Counter/>
    </div>
  )
}

export default App
