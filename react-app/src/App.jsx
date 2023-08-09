import React, { useEffect, useState } from 'react'
 
function Counter(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
    const handleClick = () => setCount((c) => c + 1);
    document.addEventListener('click', handleClick);
    
    return () => {
      console.log("Component unmounted");
      document.removeEventListener('click',handleClick );
    }

  }, [])

  useEffect(() => {
    console.log("Count updated");
    document.title = `Count: ${count} `
  }, [count])

  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

function App() {
  return (<div><Counter/></div>)
}

export default App
