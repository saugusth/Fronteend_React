import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
